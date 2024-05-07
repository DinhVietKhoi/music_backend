/** @format */

import express from "express";
import {
  addSong,
  getAllSong,
  getNewSong,
  getSongByArtist,
  getSongByGenres,
  getSongByIds,
} from "../controllers/songController.js";
const router = express.Router();

router.post("/addSong", addSong);
router.get("/getAllSong", getAllSong);
router.get("/getSongByGenres", getSongByGenres);
router.get("/getSongByArtist", getSongByArtist);
router.get("/getNewSong", getNewSong);
router.get("/getSongByIds", getSongByIds);
// router.get('/getlastmsg', getLatestMessage)

export default router;
