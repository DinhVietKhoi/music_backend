/** @format */

import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    history: {
      type: String,
    },
    dateOfBird: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Artist = mongoose.model("Artist", UserSchema);

export default Artist;
