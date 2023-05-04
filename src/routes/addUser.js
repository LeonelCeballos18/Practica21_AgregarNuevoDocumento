let express = require('express'); //inyeccion de la dependencia de express
let router = express.Router(); //Instalacion del router
const mongoose = require('mongoose'); //Inyectamos la dependencia de mongoose
let User = require('../models/users'); //Le indicamos la direccion de nuestro modelo

router.get('/addUser', async (req, res)=>{
    res.render("addUser"); //Imprimimos lo que recuperamos en formato JSon
})

router.post('/addUser', (req, res)=>{
    const newUser = User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    newUser
    .save()
    .then((data) => {res.redirect('/users')})
    .catch((error) => {res.json({message:error})})
})

module.exports = router;