var express = require('express');
var router = express.Router();
const borrarModel = require('../models/borrarModel');

// MOSTRAR ELEMENTOS DE LA BASE DE DATOS PASO A PASO
// 1) Funcion para mostrar la lista de elementos de la base de datos

router.get('/', async(req, res, next)=> {
  try {

    // 2) llamar a la funcion del Model (BorrarModel) que ejecutara la query para traer los elementos de la base de datos.
    let data = await borrarModel.getNombres();
    // 3) renderiza la vista borrar, en conjunto con el array (nombres_array) que contiene todos los elementos de la tabla.
    res.render('borrar',{nombres_array : data});

  } catch(error) {

    // mostrar una página de error
    res.render('error');

  }
});

// ELIMINAR ELEMENTOS DE LA BASE DE DATOS PASO A PASO

// 1) crear funcion que se encargara de eliminar elemento de acuerdo a el id

router.get('/eliminar/:id', async(req,res,next)=> {
  try{
      // 2) Tomar el id de la url 
      let id = req.params.id;

      // 3) Llamar a la funcion del Model(borrarModel) que ejecutara la query para eliminar elementos por id
      await borrarModel.eliminarNombrePorId(id);
      // 4) Despues de eliminar redirige a la pagina inicial
      res.redirect('/');

  } catch(error) {
      // render('error')
  }
})

module.exports = router;