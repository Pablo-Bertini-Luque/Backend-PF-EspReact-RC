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
  posicion: {
    type: String,
    required: true,
    enum: ["DRIVE", "REVES"],
  },
  avatar: {
    type: String,
    default:
      "https://img.freepik.com/vector-gratis/ilustracion-padel-estilo-dibujado-mano_23-2149199898.jpg",
  },
  rol: {
    type: String,
    required: true,
    enum: ["ADMIN-ROLE", "USER-ROLE"],
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
  const { __v, contraseña, _id, ...usuario } = this.toObject();
  usuario.uid = _id;
  return usuario;
};

module.exports = model("Usuario", UsuarioSchema);
