var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
const cors = require('cors');

router.use(bodyParser.json());
router.use(cors());

var Database = require('./Database.js');

router.get('/ObtenerPaciente', function (req, res, next) {

    var database = new Database();
    var sql = 'SELECT * FROM EMPLEADO';

    database.query(sql)
        .then(rows => {
            res.send(rows);
            console.log(rows);
            return database.close();
        }, err => {
            return database.close().then(() => {
                throw err;
            })
        })
        .catch(err => {
            console.log(err);
            res.send({
                mensaje: 'Se produjo un error al obtener los pacientes.'
            });
        });

});

module.exports = router;
