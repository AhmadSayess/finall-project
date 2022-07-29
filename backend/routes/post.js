const express =  require('express');
const router  = express.Router();
const controller = require('../controllers/postController');


var multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const DIR = "./public/images";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, uuidv4() + "-" + fileName);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jfalsepg and .jpeg format allowed!"));
    }
  },
});



router.get('/', controller.getAll)
router.get('/latest', controller.getLatest)
router.get('/:id', controller.getbyId)
router.get('/getAllByCat/:id', controller.getByCategory)
router.get('/getLatestByCat/:id', controller.getLatestByCategory)
router.post("/",upload.array("image", 4),controller.addNewPost);
router.put('/:id', controller.put)
router.delete('/:id', controller.delete)









module.exports = router;