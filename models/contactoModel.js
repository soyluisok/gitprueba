/* 1) instalar npm i nodemailer
   2) crear archivo model en carpeta models
   3) ir a https://nodemailer.com/about/ y copiar el codigo base y haces las siguientes modificaciones*/



"use strict"; // cabecera del lenguaje
const nodemailer = require("nodemailer");


async function main(objeto) {
    try {
        console.log("llegamos a la funcion");
        let transporter = nodemailer.createTransport({
            // 4) host del servicio de correo utilizado
          host: "smtp.live.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: 'soyluis.es@hotmail.com', // 5)mail desde donde se enviaran los correos
            pass: '63384551' // 6)password del mail
          },
        //   transport security layer
          tls: {
              rejectUnauthorized : false
          }
        });
        let info = await transporter.sendMail({
          from: 'soyluis.es@hotmail.com', // 7)mail del que envia
          to: 'soyluis.es@hotmail.com', // 8)mails de los que reciben
          subject: "CONTACTO DESDE LA WEB ✔", // 9)linea de asunto
      
          html: "El usuario : "+objeto.nombre + " con correo : " +objeto.correo + " mando el siguiente mensaje :<br> "+objeto.mensaje // 9) 
          
          
      
        });
      
        return info.messageId;


    } catch(error) {
        console.log(error);
    }
}

module.exports = {main}