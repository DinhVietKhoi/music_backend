/** @format */

import express from "express";
import {
  createUser,
  getUser,
  likePlaylist,
  likeSong,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/createUser", createUser);
router.get("/getUser", getUser);
router.post("/likeSong", likeSong);
router.post("/likePlaylist", likePlaylist);

export default router;
