import multer from 'multer';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/ads/images'); // Define the destination folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage }).single('image');

export default function POST(req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // Multer error
      return res.status(500).json({ error: err.message });
    } else if (err) {
      // Other error
      return res.status(500).json({ error: err.message });
    }

    return res.status(200).json({ imagePath: `/ads/images/${req.file.filename}` });
  });
}
