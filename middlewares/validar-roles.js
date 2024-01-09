const { response, request } = require("express");

const esAdminRole = (req = request, res = response, next) => {
  if (!req.usuario) {
    return res.status(500).json({
      msg: "Se quiere verificar sin validar el token primero",
    });
  }

  const { rol, nombre } = req.usuario;

  if (rol !== "ADMIN-ROLE") {
    return res.status(401).json({
      msg: `El usuario ${nombre} no tiene permiso para realizar esta tarea`,
    });
  }

  next();
};

module.exports = {
  esAdminRole,
};
