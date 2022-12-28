const { StatusCodes } = require('http-status-codes');
const cloudinary = require('cloudinary').v2
const fs = require('fs');

const uploadImage = async (req, res) => {
    console.log(req.files.image);
    const result = await cloudinary.uploader.upload(
        req.files.image.tempFilePath,
            {
                public_id: `${req.files.image.md5}`,
                folder: `temp`,
                overwrite: true,
                invalidate: true
            }
        )
        fs.unlinkSync(req.files.image.tempFilePath);
        return res.status(StatusCodes.OK).json({ image: result.secure_url});
}

module.exports = {
    uploadImage,
}
