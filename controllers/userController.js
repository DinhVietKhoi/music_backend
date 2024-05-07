/** @format */

import User from "../models/userModel.js";

/** @format */
export const createUser = async (req, res, next) => {
  try {
    const { username, name, image, password } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: "Người dùng đã tồn tại" });
    }
    const newUser = new User({
      username,
      name,
      image,
      password,
    });
    const savedUser = await newUser.save();

    res.status(200).json(savedUser);
  } catch {
    res.status(500).json({ error: "Tạo người dùng thất bại" });
  }
};
export const getUser = async (req, res, next) => {
  try {
    const { username } = req.query;
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      return res.status(400).json({ error: "Người dùng không tồn tại" });
    }
    res.status(200).json(existingUser);
  } catch {
    res.status(500).json({ error: "Lấy thông tin người dùng thất bại" });
  }
};
export const likeSong = async (req, res, next) => {
  try {
    const { songId, userId } = req.body;
    const existingUser = await User.findById(userId);

    if (!existingUser) {
      return res.status(400).json({ error: "Người dùng không tồn tại" });
    }

    if (existingUser.songFavorites.includes(songId)) {
      existingUser.songFavorites = existingUser.songFavorites.filter(
        (favorite) => favorite.toString() !== songId
      );
      await existingUser.save();
      return res.status(200).json({ message: "Bài hát đã được huỷ yêu thích" });
    }
    existingUser.songFavorites.push(songId);
    await existingUser.save();
    return res
      .status(200)
      .json({ message: "Bài hát đã được thêm vào danh sách yêu thích" });
  } catch (error) {
    return res.status(500).json({ error: "Đã xảy ra lỗi" });
  }
};

export const likePlaylist = async (req, res, next) => {
  try {
    const { playlistId, userId } = req.body;
    const existingUser = await User.findById(userId);

    if (!existingUser) {
      return res.status(400).json({ error: "Người dùng không tồn tại" });
    }

    if (existingUser.playlistFavorites.includes(playlistId)) {
      existingUser.playlistFavorites = existingUser.playlistFavorites.filter(
        (favorite) => favorite.toString() !== playlistId
      );
      await existingUser.save();
      return res
        .status(200)
        .json({ message: "Playlist đã được huỷ yêu thích" });
    }
    existingUser.playlistFavorites.push(playlistId);
    await existingUser.save();
    return res
      .status(200)
      .json({ message: "Playlist đã được thêm vào danh sách yêu thích" });
  } catch (error) {
    return res.status(500).json({ error: "Đã xảy ra lỗi" });
  }
};
