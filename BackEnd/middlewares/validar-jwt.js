require("dotenv");
const { response, request } = require("express");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/usuario");

const secretKey = process.env.SECRETORPRIVATEKEY;

const validarJWT = async (req = request, res = response, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      msg: "La peticion no contiene el token",
    });
  }

  try {
    const { uid } = jwt.verify(token, secretKey);

    //leer usuario que corresponde al uid

    const usuario = await Usuario.findById(uid);

    if (!usuario) {
      res.status(401).json({
        msg: "Usuario inexistente",
      });
    }

    if (!usuario.estado) {
      //Verificar si el usuario está activo
      res.status(401).json({
        msg: "Usuario inactivo",
      });
    }

    req.usuario = usuario;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Token no valido",
    });
  }
};

module.exports = {
  validarJWT,
};
