var express = require('express');
var router = express.Router();
// 1) Llamar al model donde esta la consulta(query)
const ingresarModel = require('../models/ingresarModel');



router.get('/', function(req, res, next) {
  res.render('ingresar');
});




// 1) Funcion que se dispara al momento de presionar el boton
router.post('/', async(req, res, next)=> {
    try {
        // 2) Se define un objeto donde se guardan los valores que se enviaran a la base de datos 
        //    en la izquierda va el nombre del campo de la base de datos y en la derecha el valor
        //    en este caso req.body.ingreso. sacado del input con name="ingreso"
        
        let objNombre = {
            nombre : req.body.ingreso,          
        }

        // 3) se define una variable con la funcion del model que hara la consulta a la base de datos en este caso un insert
        //   >>continua en models/ingresarmodel              
        let resultado = await ingresarModel.agregarNombre(objNombre);

        res.redirect('/');
        return resultado;

    } catch(error) {
        console.log(error);
         }
  });

module.exports = router;


