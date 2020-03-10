const pool = require('../bd');


// 1) Funcion para traer los elementos de la tabla nombres

async function getNombres() {
    try {
        // 2) se realiza la query
        let query =  "select * from nombres";
        // 3) se envia la query y se obtiene una respuesta la cual se guarda en rows. Todos los elementos se guardan en rows
        let rows = await pool.query(query);
        console.log(rows);
        return rows;
    } catch(error){
        throw error;
    }
}

// 1) Funcion para eliminar elementos de la tabla nombres

async function eliminarNombrePorId(id){
    try{
        // 2) se define la query
        let query = "delete from nombres where id = ?";
        // 3) Se ejecuta la funcion pool que realiza la query en la base de datos y la respuesta se guarda en rows.
        let rows = await pool.query(query,id);
        return rows;
    } catch(error) {
        throw error;
    }
}


// 4) Se exportan las funciones
module.exports={eliminarNombrePorId,getNombres}