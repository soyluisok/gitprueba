var express = require('express');
var router = express.Router();
const contactoModel = require('../models/contactoModel');

// funcion que muestra la vista de contacto
router.get('/', function(req, res, next) {
    res.render('contacto');
  });

module.exports = router;


// recibe los datos del formulario y envia un correo
router.post('/',async (req,res,next)=> {
    let objMsg = {

        nombre : req.body.nombre,
        correo : req.body.correo,
        mensaje : req.body.mensaje
    }
    // el id de la operacion se almacena en la variable respuesta
    let respuesta = await contactoModel.main(objMsg);
    // CANNOT SET HEADERS AFTER THEY ARE SENT
    
    res.render('contacto',)
    
})

module.exports = router;