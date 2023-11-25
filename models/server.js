require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../db/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.usuariosPath = "/api/usuarios";
    this.authPath = "/api/auth";
    this.turnosPath = "/api/turnos";
    this.conectarDB();
    this.middlewares();
    this.routes();
  }

  //Conectar a base de datos
  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    //CORS
    this.app.use(cors());
    //Parseo y lectura del body
    this.app.use(express.json());
    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.authPath, require("../routes/auth"));
    this.app.use(this.usuariosPath, require("../routes/user"));
    this.app.use(this.turnosPath, require("../routes/turnos"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor levantado correctamente en puerto", this.port);
    });
  }
}

module.exports = Server;
