/** @format */

import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    songList: [
      {
        type: ObjectId,
        ref: "Song",
        require: true,
      },
    ],
    view: {
      type: Number,
      default: 0,
    },
    like: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
const Playlist = mongoose.model("Playlist", UserSchema);

export default Playlist;
