const Router = require("express");
const { check } = require("express-validator");
const { validarCampos, validarJWT } = require("../middlewares");
const {
  crearTurno,
  listarTurnos,
  turnoById,
} = require("../controllers/turnos");

const router = Router();

//Obtener todos los turnos
router.get("/", listarTurnos);

//Obtener turno por ID
router.get("/:id", turnoById);

//Crear un nuevo turno
router.post(
  "/",
  [
    validarJWT,
    check("lugar", "Debe indicar el lugar del turno").not().isEmpty(),
    check("hora", "Debe indicar la hora de inicio y fin del turno")
      .not()
      .isEmpty(),
    check("categoria", "Debe ingresar un número del 1 al 8").isIn([
      1, 2, 3, 4, 5, 6, 7, 8,
     ]),
     check("tipoCancha", "Indicar si la cancha es de cemento o cesped").isIn([
       "CESPED",
       "CEMENTO",
     ]),
    validarCampos,
  ],
  crearTurno
);

//Actualizar turno
router.put("/:id", (req, res) => {
  res.json("Actualizando turno");
});

//Borrar turno
router.delete("/:id", (req, res) => {
  res.json("Borrando turno");
});

module.exports = router;
