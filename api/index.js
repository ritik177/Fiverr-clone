import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js"

const app = express();

dotenv.config();
mongoose.set('strictQuery', true);


const connect = async () => {

    try {
        await mongoose.connect(process.env.DB)
        console.log("Connected to mongoDB!");
    } catch (error) {
        console.log(error);
    }

};

app.use("/api/users", userRoute);

app.listen(8800, () => {
    connect();
    console.log("backend server is running");
})