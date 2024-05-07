/** @format */

import express from "express";
import {
  createPlayList,
  getPlaylist,
  getPlaylistByIds,
} from "../controllers/playListController.js";
const router = express.Router();

router.post("/create", createPlayList);
router.get("/getAllPlaylist", getPlaylist);
router.get("/getPlaylistByIds", getPlaylistByIds);

export default router;
