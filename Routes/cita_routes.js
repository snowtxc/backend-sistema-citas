

const router = require('express').Router();

const CitaController = require("../Controllers/CitaController");
const verifyToken = require("../Middlewares/verifyToken");



router.post("/citas", verifyToken, CitaController.create);
router.get("/citas", verifyToken, CitaController.getAllByUser);
router.get("/citas/:id/info", verifyToken, CitaController.getById);
router.delete("/citas/:id/delete", verifyToken, CitaController.deleteById);
router.put("/citas/:id/edit", verifyToken, CitaController.editById);



module.exports = router;