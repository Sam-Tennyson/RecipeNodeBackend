const { ImageSchema } = require('../models/image_upload_schema');

const image_controller = async (req, res) => {
    try {

        if (!req.file) {
            throw new Error('No image file provided');
        }
        // Create a new document in MongoDB to store the image information
        const newImageData = req.file
        
        // Save the image document to MongoDB
        const newImage = await new ImageSchema(newImageData).save();
        res.status(200).json({ 
            message: "Image successfully added", 
            image: newImage,
            image_url: `http://localhost:5000/uploads/${newImage.filename}`
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message
        })
    }
}

module.exports = image_controller;
