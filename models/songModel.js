/** @format */

import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    artist: {
      type: ObjectId,
      ref: "Artist",
      require: true,
    },
    genre: {
      type: String,
    },
    link: {
      type: String,
    },
    lyrics: {
      type: String,
      default: "",
    },
    view: {
      type: Number,
      default: 0,
    },
    like: {
      type: Number,
      default: 0,
    },
    // lyrics: [
    //   {
    //     type: ObjectId,
    //     ref: "song",
    //     require: true,
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);
const Song = mongoose.model("Song", UserSchema);

export default Song;
