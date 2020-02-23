'user strict';

const mysql = require('mysql');

class Database {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'MedikaDB',
            port: 3306
        });
        this.connection.connect(function(error){
            try{ 
                //si error es true mandamos el mesaje de error
                if(error){ 
 
                    console.log("Error al establecer la conexión a la BD -- " + error); 
 
                //conexión exitosa, en este punto ya hemos establecido la conexión a base de datos
                }else{  
                    console.log("Conexión exitosa"); 
                     //Aquí debes escribir el código que necesites, un INSERT, SELECT etc.
                } 
            }
            catch(x){ 
                console.log("Contacto.agregarUsuario.connect --Error-- " + x); 
            } 
         });
    }
    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err)
                    return reject(err);
                resolve(rows);
            });
        });
    }
    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    }
}

module.exports = Database;
