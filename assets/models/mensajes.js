const mongoose = require("mongoose");

/*const UsuarioSchema = new mongoose.Schema({
    cedula:String,
    userName:String,
    nombre:String,
    apellidos:String,
    correo:String,
    password:String,
    telefono: int
},{collection:"usuarios"})*/

const MensajeSchema = new mongoose.Schema({
    mensajes:String
},{collection:"mensajes"});

mongoose.model("mensajes",MensajeSchema);
