// 4) llamando a bd (La conexion a la base de datos)
const pool = require('./../bd');


// 5) Crear funcion que hara la consulta a la base de datos

async function agregarNombre(obj) {
    try {
        // 6) se define la query de mysql dentro de la variable query
        let query = "insert into nombres set ?";
        // 7) se realiza la consulta llamando a la funcion query de pool, definida previamente en bd.js
        let rows = await pool.query(query,obj);
        // 8) devolvemos el resultado de la query en forma de array, 
        // en este caso al ser un insert nos devuelve un objeto con los datos del ingreso
        return rows;
        
    } catch(error) {
        throw error;
    }

}

module.exports = {agregarNombre}