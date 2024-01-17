const Router = require("express")
const { Login, SignUp, getUserById } = require("../controller/user.controller")
const router = Router()

router.get("/login",Login);
router.post("/signup",SignUp);
router.get("/getUserById/:id",getUserById)

module.exports = router