const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
const auth_router = require("./server/routes/register_route");
const multer = require("multer");
const recipe_app_router = require("./server/routes/recipe_routes");
const recipe_comment_router = require("./server/routes/recipe_comment_routes");
const router = require("./server/controllers/image_upload_controller");
const route_image_upload = require("./server/routes/image_upload_routes");
const image_controller = require("./server/controllers/image_upload_controller");
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

// Set up Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); // Specify the directory where you want to save the uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Generate a unique filename for the uploaded image
  }
});

// Create a Multer instance
const upload = multer({ storage: storage });

// set up mongoose
mongoose.connect('mongodb://127.0.0.1:27017/recipeApp', { useNewUrlParser: true, useUnifiedTopology: true })

// mongoose.connect(process.env.MONGODB)
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
app.use('/uploads', express.static('uploads')),
app.post('/media/upload/', upload.single('image'), image_controller)

app.listen(PORT, (req, res) => {
    console.log("Server started", PORT);
})