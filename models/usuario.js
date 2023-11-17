const { Schema, model, methods } = require("mongoose");

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  email: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true,
  },
  contraseña: {
    type: String,
    required: [true, "La contraseña es obligatorio"],
  },
  imagen: {
    type: String,
  },
  posicion: {
    type: String,
    required: true,
    enum: ["DRIVE", "REVES"],
  },
  rol: {
    type: String,
    required: true,
    enum: ["ADMIN_ROLE", "USER-ROLE"],
    default: "USER-ROLE",
  },

  estado: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

UsuarioSchema.methods.toJSON = function () {
  const { __v, contraseña, ...usuario } = this.toObject();
  return usuario;
};

module.exports = model("Usuario", UsuarioSchema);
