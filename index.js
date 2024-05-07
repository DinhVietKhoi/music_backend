/** @format */

import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
import cors from "cors";
import artistRoutes from "./routes/artistRoutes.js";
import songRoutes from "./routes/songRoutes.js";
import playListRoutes from "./routes/playListRoutes.js";
import userRoutes from "./routes/userRoutes.js";
const app = express();

dotenv.config();
app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());

/* ROUTER */
app.use("/v1/user", userRoutes);
app.use("/v1/artist", artistRoutes);
app.use("/v1/song", songRoutes);
app.use("/v1/playlist", playListRoutes);
/* MONGOOSE SETUP*/
const mongoUrl = process.env.MONGO_URL;

//Listen MongoDB to Server
mongoose
  .connect(mongoUrl, {})
  .then(() => {
    console.log(` DB connect successfully.`);
  })
  .catch((errors) => {
    console.log(`${errors}`);
  });

const port = process.env.PORT || 6001;
const server = app.listen(port, () =>
  console.log(`Máy chủ đang hoạt động tại cổng: ${port}`)
);
