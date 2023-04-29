// Seccion de llamado a librerías
const express = require('express');
const bodyParser = require("body-parser");

const appiclation = express();


// Crear nuestras rutas
const routes = {
    exp: '/example',
    postApi: '/mypost'
};

// Instanciar recursos de la api
appiclation.use(bodyParser.json());
appiclation.get(routes.exp, (req, res) => {
    const responseStruct = {
        status: 'Ok',
        code: 1
    };
    res.json(responseStruct);
});

appiclation.post(routes.postApi, (req, res) =>{
    try{
        const {numberOne, numberTwo} = req.body;
        const result = numberOne * numberTwo;
        if(!numberOne || !numberTwo) throw({message: "Faltan datos para la operación"});
        res.json({
            status: 'Ok',
            result
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            status: 'Error',
            message: error.message
        });
    }
    
});



// Subir servidor
appiclation.listen(3000, () => console.log('Application running on port 3000'));