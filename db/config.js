const mongoose = require("mongoose");
const chalk = require("chalk");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN);
    console.log(chalk.blue("Conectado a la base de datos"));

    //console.log("Conectado a la base de datos");
  } catch (error) {
    console.log(error);
    throw new Error("Error en la conexión a la base de datos");
  }
};

module.exports = { dbConnection };
