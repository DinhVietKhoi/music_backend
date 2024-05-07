/** @format */

import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    password: {
      type: String,
    },
    songFavorites: {
      type: [
        {
          type: ObjectId,
          ref: "Song",
          required: true,
        },
      ],
      default: [], // Set the default value as an empty array
    },
    playlistFavorites: {
      type: [
        {
          type: ObjectId,
          ref: "Playlist",
          required: true,
        },
      ],
      default: [], // Set the default value as an empty array
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", UserSchema);

export default User;
