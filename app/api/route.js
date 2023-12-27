

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
