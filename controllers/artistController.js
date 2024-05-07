/** @format */

import Artist from "../models/artistModel.js";
//add artist
export const addArtist = async (req, res, next) => {
  try {
    const { name, history, dateOfBird, image } = req.body;
    // Tạo một đối tượng mới từ mô hình Artist
    const newArtist = new Artist({
      name,
      history,
      dateOfBird,
      image,
    });
    // Lưu thông tin ca sĩ vào cơ sở dữ liệu
    const savedArtist = await newArtist.save();
    res.status(200).json(savedArtist);
  } catch {
    res.status(500).json({ error: "Lỗi khi thêm ca sĩ" });
  }
};

//get all artist
export const getAllArtist = async (req, res, next) => {
  try {
    const { skip } = req.query;
    let artists = await Artist.find().skip(parseInt(skip, 10)).limit(10);
    const reversedArtists = artists.reverse();
    res.status(200).json(reversedArtists);
  } catch {
    res.status(500).json({ error: "Lỗi khi lấy danh sách ca sĩ" });
  }
};
