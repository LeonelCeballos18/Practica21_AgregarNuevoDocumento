let express = require('express'); //inyeccion de la dependencia de express
let router = express.Router(); //Instalacion del router
const mongoose = require('mongoose'); //Inyectamos la dependencia de mongoose
let Person = require('../models/users'); //Le indicamos la direccion de nuestro modelo

router.get('/users', async (req, res)=>{
    const Persons = await Person.find({}); //Recuperamos los datos de nuestro schema
    res.render("index", {Persons}); //Imprimimos lo que recuperamos en formato JSon
})

module.exports = router;