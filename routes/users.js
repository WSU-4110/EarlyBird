const express = require("express");
const { userProfile } = require("../controllers/user.js");
const router = express.Router();
const {auth} = require( "../middleware/auth");

const { signin, signup } = require( "../controllers/user.js");

router.post("/signin", signin);
router.post("/signup", signup);

//for profile
router.route('/profile').post(auth,userProfile);

module.exports = router;