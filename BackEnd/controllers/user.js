const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuario");

const userGet = async (req = request, res = response) => {
  const { limite = 5, desde = 0 } = req.query;

  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments({ estado: true }),
    Usuario.find({ estado: true }).skip(Number(desde)).limit(Number(limite)),
  ]);

  res.json({
    total,
    usuarios,
  });
};

const userPost = async (req = request, res = response) => {
  const { nombre, email, contraseña, posicion } = req.body;

  const usuario = new Usuario({ nombre, email, contraseña, posicion });

  //Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.contraseña = bcryptjs.hashSync(contraseña, salt);

  //Guardar DB
  await usuario.save();

  res.json({
    msg: "Usuario registrado con exito",
    usuario,
  });
};

const userPut = async (req = request, res = response) => {
  const { id } = req.params;

  const { _id, contraseña, email, ...resto } = req.body;
  if (contraseña) {
    const salt = bcryptjs.genSaltSync();
    resto.contraseña = bcryptjs.hashSync(contraseña, salt);
  }

  const usuario = await Usuario.findByIdAndUpdate(id, resto);

  res.json(usuario);
};

const userPatch = (req = request, res = response) => {
  res.json({
    msg: "Patch API",
  });
};

const userDelete = async (req = request, res = response) => {
  const { id } = req.params;

  const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });

  res.json({
    usuario,
  });
};

module.exports = {
  userGet,
  userPost,
  userPut,
  userPatch,
  userDelete,
};
