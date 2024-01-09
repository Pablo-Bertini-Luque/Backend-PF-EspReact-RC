const { response, request } = require("express");
const Turno = require("../models/turno");
const Usuario = require("../models/usuario");

const listarTurnos = async (req = request, res = response) => {
  const [total, turnos] = await Promise.all([
    Turno.countDocuments({ estado: true }),
    Turno.find({ estado: true }),
  ]);

  res.json({
    total,
    turnos,
  });
};

const turnoById = async (req = request, res = response) => {
  const { id } = req.params;

  const turno = await Turno.findById(id);

  const idUsuarioCreadorTurno = turno.creadorTurno._id;

  const { nombre } = await Usuario.findById(idUsuarioCreadorTurno);

  res.json({
    turno,
    UsuarioCreadordelTurno: nombre,
  });
};

const crearTurno = async (req = request, res = response) => {
  try {
    const { lugar, hora, categoria, tipoCancha } = req.body;

    const cantidadTurnos = await Turno.countDocuments({ lugar, hora });

    if (cantidadTurnos >= 4) {
      return res.json(
        `No se pueden crear más turnos en ${lugar} a las ${hora}. Límite alcanzado.`
      );
    }

    const data = {
      lugar,
      hora,
      categoria,
      tipoCancha,
      creadorTurno: req.usuario,
    };

    const turno = new Turno(data);

    await turno.save();

    res.status(201).json({
      turno,
      cantidadTurnos,
      msg: "Turno creado con éxito",
    });
  } catch (error) {
    return res.json(error);
  }
};

module.exports = {
  crearTurno,
  listarTurnos,
  turnoById,
};
