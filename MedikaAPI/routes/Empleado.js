var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
const cors = require('cors');

router.use(bodyParser.json());
router.use(cors());

var Database = require('./Database.js');

router.post('/RegistrarEmpleado', function (req, res) {

    var enviado=req.body;
    console.log('Los datos recibidos son:')
    console.log(req.body);
    if(enviado==undefined){
        console.log("no se recibieron datos");
    }
    else{
        var database = new Database();
        var sql = 'SELECT * FROM EMPLEADO';
        console.log(enviado.user);
        var nombre=enviado.user.name;
        var apellido=enviado.user.apellido;
        var dpi=enviado.user.dpi;
        var rol=enviado.user.puesto;
        var telefono=enviado.user.telefono;
        var correo=enviado.user.correo;
        var fechanac=enviado.user.fechanac;
        try{ 
            var query = database.query('INSERT INTO EMPLEADO(nombre, apellido, dpi, rol, telefono, correo,fechanac)  VALUES(?, ?, ?,?,?,?, ?)', [nombre, apellido, dpi,rol,telefono,correo, fechanac], function(error, result){
                if(error){
                    console.log(error);
                    res.send("No se pudo registrar el empleado");
                }
                else{
                    
                    
                }
            }
           );
           console.log("Empleado Registrado");
           res.send("Empleado Registrado");
        }
        catch(x){ 
            console.log("Error en Agregar Empleado Nuevo. Error en Insert base de datos" + x); 
            res.send("No se pudo registrar el empleado");
        } 
    }

});

module.exports = router;
