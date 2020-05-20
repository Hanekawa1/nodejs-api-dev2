const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

const authMiddleware = require("../middlewares/auth");

router.get("/usuario", usuarioController.index);
router.post("/usuario", usuarioController.store);
router.post("/usuario/autenticar", usuarioController.findByIdeUsuarioSenha);

router.use(authMiddleware);

router.put("/usuario/:id", usuarioController.update);
router.get("/usuario/:id", usuarioController.findById);

module.exports = router;

// Usuario: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: "Usuario",
//   required: true,
// },

// const imovel = await Imovel.create({ ...req.body, Usuario: req.userId });
