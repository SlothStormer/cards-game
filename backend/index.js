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

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
connectToDatabase();

let gameState = {
    player1: "",
    player2: "",
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

app.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const card = new Card({
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

app.put("/:id", async (req, res) => {
    try {
        const card = await Card.findById(req.params.id);
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

app.delete("/:id", async (req, res) => {
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