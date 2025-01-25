import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"], 
    },
});

const players = {};
const gameState = {
    player1: "",
    player2: "",
    turn: 1,
    row: 6,
    col: 7,
    data: [
        [
            [], [], [], [], [], [], [],
        ],
        [
            [], [], [], [], [], [], [],
        ],
        [
            [], [], [], [], [], [], [],
        ],
        [
            [], [], [], [], [], [], [],
        ],
        [
            [], [], [], [], [], [], [],
        ],
        [
            [], [], [], [], [], [], [],
        ]
    ]
};

io.on("connection", (socket) => {
    socket.on("player-join", (data) => {
        console.log("Jugador",data.username, "conectado, id:", socket.id);
        socket.emit("update-board", gameState);
    });

    socket.on("update-board", (board) => {
        gameState.data = board;
        io.emit("update-board", gameState);
    });

    socket.on("disconnect", () => {
        console.log("Jugador desconectado:", socket.id);
    });
});

server.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});