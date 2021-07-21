const router = require('express').Router();

const UserController = require("../Controllers/UserController");
const verifyToken = require("../Middlewares/verifyToken");


router.post("/auth/register", UserController.register);
router.post("/auth/login", UserController.login);
router.get("/user", verifyToken, UserController.getById);




module.exports = router;