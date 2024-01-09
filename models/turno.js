const { Schema, model, methods } = require("mongoose");

const TurnoSchema = Schema({
  lugar: {
    type: String,
    required: [true, "El lugar del turno es requerido"],
  },
  hora: {
    type: String,
    required: [true, "La hora del turno es requerida"],
  },
  categoria: {
    type: Number,
    required: [true, "Indica categoria de los jugadores del turno"],
    enum: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  tipoCancha: {
    type: String,
    required: [true, "Indica tipo superficie de la cancha del turno"],
    enum: ["CESPED", "CEMENTO"],
  },
  estado: {
    type: Boolean,
    default: true,
  },
  creadorTurno: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
});

TurnoSchema.methods.toJSON = function () {
  const { __v, ...turno } = this.toObject();
  return turno;
};

module.exports = model("Turno", TurnoSchema);
