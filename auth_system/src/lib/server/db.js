import mongoose from "mongoose";
import { MONGODB_URI } from "$env/static/private";

let isConnected = false;

export async function connectdb() {
    if (isConnected) return;

    await mongoose.connect(MONGODB_URI);

    isConnected = true;

    console.log("MongoDB Connected");
}