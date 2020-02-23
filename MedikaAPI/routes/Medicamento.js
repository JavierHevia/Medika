var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
const cors = require('cors');

router.use(bodyParser.json());
router.use(cors());

var Database = require('./Database.js');

router.post('/RegistrarMedicamento', function (req, res) {

    var enviado=req.body;
    console.log('Los datos recibidos son:')
    console.log(req.body);
    if(enviado==undefined){
        console.log("no se recibieron datos");
    }
    else{
        var database = new Database();
        console.log(enviado.medicina);
        var nombre=enviado.medicina.nombre;
        var cantidad=enviado.medicina.cantidad;
        var distribuidora=enviado.medicina.distribuidora;
        
        try{ 
            var query = database.query('INSERT MEDICINA(nombre, cantidad, distribuidora)  VALUES(?, ?, ?)', [nombre, cantidad, distribuidora], function(error, result){
                if(error){
                    console.log(error);
                    res.send("No se pudo registrar el medicamento");
                }
                else{
                    
                    
                }
            }
           );
           console.log("Medicamento Registrado");
           res.send("Medicamento Registrado");
        }
        catch(x){ 
            console.log("Error en Agregar Medicamento Nuevo. Error en Insert base de datos" + x); 
            res.send("No se pudo registrar el medicamento");
        } 
    }

});

module.exports = router;
