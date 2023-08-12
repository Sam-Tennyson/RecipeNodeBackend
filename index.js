const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
const auth_router = require("./server/routes/register_route");
const multer = require("multer");
const recipe_app_router = require("./server/routes/recipe_routes");
const recipe_comment_router = require("./server/routes/recipe_comment_routes");
const CategoryRouter = require("./server/routes/category_routes");
const cloudinary = require("cloudinary").v2;
require('dotenv').config()

// set up dependencies
const app = express();
const PORT = process.env.PORT || "5000"
app.use(cors(), (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "application/json");
    next()
  })
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Configuration 
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// set up mongoose
// mongoose.connect('mongodb://127.0.0.1:27017/recipeApp', { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connect(process.env.MONGODB)
.then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database', error);
  }
);

mongoose.Promise = global.Promise


// set up route
app.use('/auth/', auth_router);
app.use('/recipe/',recipe_app_router)
app.use('/recipe-comment/', recipe_comment_router)
app.use('/category', CategoryRouter)

app.post('/media/upload', upload.single('file'), function(req, res) {
  cloudinary.uploader.upload(req.file.path, function(error, result) {
    if (error) {
      console.error(error);
      res.sendStatus(500);
    } else {
      res.send({image_url: result.secure_url});
    }
  });
});

app.listen(PORT, (req, res) => {
    console.log("Server started", PORT);
})