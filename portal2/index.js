const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const axios = require("axios");

 const app = express();
 app.use(cors());
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));

 const PORT = 5000;
 app.listen(PORT,function () {
    console.log("CONECTADO AL PUERTO :" + PORT);

 });

 const bbdd = "portal-el-dorado";
 const url = "mongodb+srv://shara:sharans70.@cluster0.gh5n1kg.mongodb.net/"+bbdd+"?retryWrites=true&w=majority&appName=Cluster0";

 const connection = mongoose.connect(url);
 connection.then(function(){
    console.log("CONECTADO A LA BASE DE DATOS");
}).catch(function(error){
    console.log("Error en la conexion"+ error)

 });
 require("./assets/models/mensajes.js")
 const Mensajes = mongoose.model("mensajes")


 app.post("/subir",function(req,res){

    const mensaje = req.body.mensaje;

    try {
        Mensajes.create(mensaje);
        res.send({
            status:true,
            mensaje: "Mensaje enviado"
        })
    }
    catch(error){
     res.send({
        status: false,
        message: "No se logro enviar el mensaje",
        error:error.message
     })

    }
 });

 app.get("/recibir", async function(req,res){

   try{
      const mensajes = await Mensajes.find({});
      res.send({
         status: true,
         message: "Mensajes recibidos correctamente",
         datos:mensajes
      })
   }
   catch(error){
      res.send({
        status: false,
        message: "error al enviar el mensaje",
        error:error.message
      })
       
   }
 });



   