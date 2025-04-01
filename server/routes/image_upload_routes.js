const express = require('express');
const multer = require('multer');
const image_controller = require('../controllers/image_upload_controller');
const route_image_upload = express.Router()


route_image_upload.post('/image', image_controller)

module.exports = route_image_upload