const Usuario = require("../models/usuario");

const emailExiste = async (email = "") => {
  //Verificar que el correo existe
  const existeEmail = await Usuario.findOne({ email });
  if (existeEmail) {
    throw new Error(`El mail: ${email} ya existe`);
  }
};

const usuarioPorIdExiste = async (id) => {
  //Verificar que el correo existe
  const existeID = await Usuario.findById(id);
  if (!existeID) {
    throw new Error(`El id: ${id} no existe`);
  }
};

module.exports = {
  emailExiste,
  usuarioPorIdExiste,
};
