const express =  require('express');
const controller = require("../controllers/adminControllers");
const router  = express.Router();


// router.get("/",controller.get);
router.post("/register",controller.signup);
router.post("/login",controller.login);
// router.get("/:id",controller.getOneAdmin);
// router.put("/:id",controller.updateAdmin);
// router.delete("/:id",controller.deleteAdmin);

router.get('/', controller.getAll)
router.get('/:id', controller.getbyId)
// router.post('/', controller.post)
router.put('/:id', controller.put)
router.delete('/:id', controller.delete)





module.exports = router;