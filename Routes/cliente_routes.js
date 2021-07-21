const router = require('express').Router();

const ClienteController = require("../Controllers/ClienteController");
const verifyToken = require("../Middlewares/verifyToken");


router.post("/clientes",verifyToken, ClienteController.create);
router.get("/clientes",verifyToken, ClienteController.getAllByUser);
router.get("/clientes/:id/info", verifyToken, ClienteController.getById);
router.delete("/clientes/:id/delete", verifyToken, ClienteController.deleteById);
router.put("/clientes/:id/edit", verifyToken, ClienteController.editById);




module.exports = router;