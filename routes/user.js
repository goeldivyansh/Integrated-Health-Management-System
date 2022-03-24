const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/",userController.user_add);
// router.get("/",userController.user_all); //Get all
router.get("/:userId" ,userController.user_details); // get Single
// router.put("/:userId",userController.user_update);  // TO UPDATE USER
// router.delete("/:userId"); //TO DELETE USER 

module.exports = router;