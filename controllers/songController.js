/** @format */

import Song from "../models/songModel.js";
//add artist
export const addSong = async (req, res, next) => {
  try {
    const { name, artist, genre, link, lyrics } = req.body;
    // Tạo một đối tượng mới từ mô hình Artist
    const newSong = new Song({
      name,
      artist,
      genre,
      link,
      lyrics,
    });
    // Lưu thông tin ca sĩ vào cơ sở dữ liệu
    const savedSong = await newSong.save();
    res.status(200).json(savedSong);
  } catch {
    res.status(500).json({ error: "Lỗi khi thêm bài hát" });
  }
};

//get song
export const getAllSong = async (req, res, next) => {
  try {
    const { skip } = req.query;
    let songs = await Song.find()
      .skip(parseInt(skip, 10))
      .limit(10)
      .populate("artist");

    const reversedSongs = songs.reverse();
    res.status(200).json(reversedSongs);
  } catch {
    res.status(500).json({ error: "Lỗi khi lấy danh sách bài hát" });
  }
};
//get song by genres
export const getSongByGenres = async (req, res, next) => {
  try {
    const { genres } = req.query;
    let songs = await Song.find({ genre: genres }).populate("artist");
    res.status(200).json(songs);
  } catch {
    res.status(500).json({ error: "Lỗi khi lấy danh sách bài hát" });
  }
};
//get song by artist
export const getSongByArtist = async (req, res, next) => {
  try {
    const { artistId } = req.query;
    let songs = await Song.find({ artist: artistId }).populate("artist");
    res.status(200).json(songs);
  } catch {
    res.status(500).json({ error: "Lỗi khi lấy danh sách bài hát" });
  }
};

//get new song
export const getNewSong = async (req, res, next) => {
  try {
    const songs = await Song.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .populate("artist");
    res.status(200).json(songs);
  } catch {
    res.status(500).json({ error: "Lỗi khi lấy danh sách bài hát" });
  }
};

export const getSongByIds = async (req, res, next) => {
  try {
    const { songIds } = req.query;
    // const formattedIds = songIds.replace(/"/g, "").split(",");
    const songs = await Song.find({ _id: { $in: songIds } }).populate("artist");
    res.status(200).json(songs);
  } catch {
    return res.status(500).json({ error: "Đã xảy ra lỗi" });
  }
};
