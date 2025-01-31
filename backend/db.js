import mongoose, { model } from "mongoose";
import { config } from "dotenv";

config();

const CardSchema = new mongoose.Schema({
    number: Number,
    title: String,
    type: String,
    element: String,
    img: String,
    description: String,
    atk: Number,
    vid: Number,
});

export const Card = model("Card", CardSchema);


async function connectToDatabase() {
    try {
        await mongoose.connect(
            process.env.MONGODB
        );
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Error al conectar con la base de datos:", error);
    }
}

export default connectToDatabase;