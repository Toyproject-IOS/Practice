// basic
require('dotenv').config();

// server
const express = require('express');
const app = express();

// uploader
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

// utility middleware
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
app.use(express.urlencoded({ extended: false }));


const port = process.env.PORT || 3000;

const uploadsRouter = require('./routes/uploads');

app.use('/uploads', uploadsRouter);

const start = async () => {
    app.listen(port, () => {
        console.log(`server is listening on port ${port}`);
    });
}

start();