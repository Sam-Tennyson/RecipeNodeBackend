const mongoose = require('mongoose')

const Image_upload = new mongoose.Schema({
    filename: String,
    path: String,
})

const ImageSchema = mongoose.model('Image', Image_upload)
module.exports = {ImageSchema}