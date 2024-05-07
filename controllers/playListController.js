/** @format */
import PlayList from "../models/playlistModel.js";
export const createPlayList = async (req, res, next) => {
  try {
    const { name, songList } = req.body;
    const newPlaylist = new PlayList({
      name,
      songList,
    });
    const savedPlaylist = await newPlaylist.save();
    res.status(200).json(savedPlaylist);
  } catch {
    res.status(500).json({ error: "Lỗi khi tạo playlist" });
  }
};

export const getPlaylist = async (req, res, next) => {
  try {
    const { skip } = req.query;
    let playlists = await PlayList.find()
      .skip(parseInt(skip, 10))
      .limit(10)
      .populate({
        path: "songList",
        populate: { path: "artist" },
      });

    const reversedPlaylists = playlists.reverse();
    res.status(200).json(reversedPlaylists);
  } catch {
    res.status(500).json({ error: "Lỗi khi lấy playlist" });
  }
};

export const getPlaylistByIds = async (req, res, next) => {
  try {
    const { playlistIds } = req.query;
    let playlists = await PlayList.find({ _id: { $in: playlistIds } }).populate(
      {
        path: "songList",
        populate: { path: "artist" },
      }
    );

    res.status(200).json(playlists);
  } catch {
    res.status(500).json({ error: "Lỗi khi lấy playlist" });
  }
};
