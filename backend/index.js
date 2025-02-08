import express from "express";
import http from "http";
import { Server } from "socket.io";
import bodyParser from "body-parser";
import cors from "cors";
import connectToDatabase, { Card } from "./db.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});

app.use(express.static("../frontend/dist"));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
connectToDatabase();

let gameState = {
    player1: {
        username: "",
        deck: [],
        hand: [],
    },
    player2: {
        username: "",
        deck: [],
        hand: [],
    },
    turn: 1,
    row: 6,
    col: 7,
    data: [
        [
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
        ],
        [
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
        ],
        [
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
        ],
        [
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
        ],
        [
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
        ],
        [
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
            { card: {}, stack: [] },
        ],
    ]
};

io.on("connection", (socket) => {
    socket.on("player-join", (data) => {
        console.log("Jugador", data, "conectado, id:", socket.id);
        if (gameState.player1.username == "") {
            gameState.player1 = data;
        } else if (gameState.player2.username == "") {
            gameState.player2 = data;
        }
        socket.emit("update-board", gameState);
    });

    socket.on("update-board", (data) => {
        console.log(gameState)        
        if (data.playerState.username === gameState.player1.username) {
            gameState.player1.deck = data.playerState.deck;
            gameState.player1.hand = data.playerState.hand;
        } else if (data.playerState.username === gameState.player2.username) {
            gameState.player2.deck = data.playerState.deck;
            gameState.player2.hand = data.playerState.hand;
        }

        gameState.data = data.gameState.data;
        
        io.emit("update-board", gameState);
    });

    socket.on("disconnect", () => {
        console.log("Jugador desconectado:", socket.id);
    });
});

app.get("/api", async (req, res) => {
    try {
        const cards = await Card.find()
        res.send(cards);
        console.log("Lista de cartas enviada");
    } catch (error) {
        console.error("Error al obtener las cartas:", error);
    }
});

app.post("/api", async (req, res) => {
    try {
        console.log(req.body);
        const card = new Card({
            number: req.body.number,
            title: req.body.title,
            type: req.body.type,
            element: req.body.element,
            img: req.body.img,
            description: req.body.description,
            atk: req.body.atk,
            vid: req.body.vid,
        });
        await card.save();
        res.send({
            card,
            message: "Carta agregada",
        });
        console.log("Carta agregada");
    } catch (error) {
        console.error("Error al agregar carta:", error);
    }
});

app.put("/api/:id", async (req, res) => {
    try {
        const card = await Card.findById(req.params.id);
        card.number = req.body.number;
        card.title = req.body.title;
        card.type = req.body.type;
        card.element = req.body.element;
        card.img = req.body.img;
        card.description = req.body.description;
        card.atk = req.body.atk;
        card.vid = req.body.vid;
        await card.save();
        res.send({
            card,
            message: "Carta actualizada",
        });
        console.log("Carta actualizada");
    } catch (error) {
        console.error("Error al actualizar carta:", error);
    }
});

app.delete("/api/:id", async (req, res) => {
    try {
        const card = await Card.findByIdAndDelete(req.params.id);
        res.send({
            card,
            message: "Carta eliminada",
        });
        console.log("Carta eliminada");
    } catch (error) {
        console.error("Error al eliminar carta:", error);
    }
});

server.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});