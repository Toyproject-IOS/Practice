const express = require('express');
const router = express.Router();

const { uploadImage } = require('../controllers/uploads');

router.route('/').post(uploadImage);

module.exports = router;