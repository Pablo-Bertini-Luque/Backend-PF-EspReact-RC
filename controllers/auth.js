const { response, request } = require("express");
const Usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");
const { generarJWT } = require("../helpers/generar-jwt");

const login = async (req = request, resp = response) => {
  const { email, contraseña } = req.body;

  try {
    //Verificar si el email existe
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return resp.status(400).json({
        msg: "Email incorrecto",
      });
    }

    //Si el usuario está activo
    if (!usuario.estado) {
      return resp.status(400).json({
        msg: "Usuario inactivo. Comuniquese con el administrador",
      });
    }
    //Verificar la contraseña
    const validarContraseña = bcryptjs.compareSync(
      contraseña,
      usuario.contraseña
    );

    if (!validarContraseña) {
      return resp.status(400).json({
        msg: "La contraseña ingresada es incorrecto",
      });
    }
    //Generar JWT

    const token = await generarJWT(usuario.id);

    resp.json({
      msg: "Login OK",
      usuario,
      token,
    });
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      msg: "Algo salió mal",
    });
  }
};

module.exports = {
  login,
};
