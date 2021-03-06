const { json } = require('express');
const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());

//upload endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400), json({ msg: 'No file found' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/frontend/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res
      .status(200)
      .json({ filename: file.name, filePath: `/upload/${file.name}` });
  });
});

const PORT = 8000;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
