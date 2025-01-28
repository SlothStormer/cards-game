import express from "express";
import http from "http";
import { Server } from "socket.io";
import connectToDatabase, { Card } from "./db.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});

connectToDatabase();

let gameState = {
    player1: "",
    player2: "",
    turn: 1,
    row: 6,
    col: 7,
    data: [
        [
            { value: "", default: "Desterrados" },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", default: "Clima" },
        ],
        [
            { value: "", default: "Mazo" },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", default: "Campo" },
        ],
        [
            { value: "", default: "Cementerio" },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", default: "Extra Deck" },
        ],
        [
            { value: "", default: "Extra Deck" },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", default: "Cementerio" },
        ],
        [
            { value: "", default: "Campo" },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", default: "Mazo" },
        ],
        [
            { value: "", default: "Clima" },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", default: "Desterrados" },
        ],
    ]
};

io.on("connection", (socket) => {
    socket.on("player-join", (data) => {
        console.log("Jugador", data.username, "conectado, id:", socket.id);
        if (gameState.player1 == "") {
            gameState.player1 = data.username;
        } else if (gameState.player2 == "") {
            gameState.player2 = data.username;
        }
        socket.emit("update-board", gameState);
    });

    socket.on("update-board", (board) => {
        console.log("Jugador", socket.id, "envio board:", board);
        gameState = board;
        io.emit("update-board", gameState);
    });

    socket.on("disconnect", () => {
        console.log("Jugador desconectado:", socket.id);
    });
});

app.get("/", async (req, res) => {
    try {
        const cards = await Card.find()
        res.send(cards);
        console.log("Lista de cartas enviada");
    } catch (error) {
        console.error("Error al obtener las cartas:", error);
    }
});

app.post("/add-card", async (req, res) => {
    try {
        const card = new Card({
            value: req.body.value,
            type: req.body.type,
            element: req.body.element,
            img: req.body.img,
            description: req.body.description,
            atk: req.body.atk,
            vid: req.body.vid,
        });
        await card.save();
        res.send("Carta agregada");
        console.log("Carta agregada");
    } catch (error) {
        console.error("Error al agregar carta:", error);
    }
});

server.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});