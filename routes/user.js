const { Router } = require("express");
const { check } = require("express-validator");
const {
  userGet,
  userPut,
  userPost,
  userDelete,
  userPatch,
} = require("../controllers/user");
const { validarCampos, validarJWT, esAdminRole } = require("../middlewares");
const { emailExiste, usuarioPorIdExiste } = require("../helpers/db-validators");

const router = Router();

router.get("/", userGet);

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El correo no es valido").isEmail(),
    check("email").custom(emailExiste),
    check(
      "contraseña",
      "La contraseña es obligatorio y debe tener más de 6 carateres"
    ).isLength({ min: 6 }),
    check("posicion", "No es una posicion de la cancha válida").isIn([
      "DRIVE",
      "REVES",
    ]),
    validarCampos,
  ],
  userPost
);

router.put(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(usuarioPorIdExiste),
    validarCampos,
  ],
  userPut
);

router.patch("/", userPatch);

router.delete(
  "/:id",
  [
    validarJWT,
    esAdminRole,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(usuarioPorIdExiste),
    validarCampos,
  ],
  userDelete
);

module.exports = router;
