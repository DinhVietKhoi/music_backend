/** @format */

import express from "express";
import { addArtist, getAllArtist } from "../controllers/artistController.js";
const router = express.Router();

router.post("/addArtist", addArtist);
router.get("/getAllArtist", getAllArtist);
// router.get('/getlastmsg', getLatestMessage)

export default router;
