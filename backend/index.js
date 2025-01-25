import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // Dirección de tu aplicación Svelte
        methods: ["GET", "POST"], // Métodos permitidos
    },
});

const players = {}; // Guardará el mazo y estado de cada jugador
const board = {}; // Estado del tablero

io.on("connection", (socket) => {
    console.log("Jugador conectado:", socket.id);

    // Asignar jugador
    if (Object.keys(players).length < 2) {
        players[socket.id] = { deck: [], ready: false };
        socket.emit("player-assigned", { playerId: socket.id });
    } else {
        socket.emit("game-full");
        return socket.disconnect();
    }

    // Crear mazo del jugador
    socket.on("set-deck", (deck) => {
        if (players[socket.id]) {
            players[socket.id].deck = deck;
            players[socket.id].ready = true;
            io.emit("player-ready", { playerId: socket.id });

            // Iniciar juego si ambos están listos
            if (Object.values(players).every((p) => p.ready)) {
                io.emit("start-game", { board, players });
            }
        }
    });

    // Mover cartas durante el juego
    socket.on("move-card", ({ cardId, position }) => {
        board[cardId] = position; // Actualizar el tablero
        io.emit("update-board", board); // Notificar a ambos jugadores
    });

    socket.on("disconnect", () => {
        console.log("Jugador desconectado:", socket.id);
        delete players[socket.id];
    });
});

server.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});