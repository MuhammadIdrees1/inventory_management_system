const {register , login} = require("../controller/authController");
const { checkUser } = require("../middlewares/AuthMiddleware");
const router = require("express").Router();


router.post("/", checkUser);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
