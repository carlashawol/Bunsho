/*const express = require('express');
const router = express.Router();

const Tarjeta = require('../models/Tarjeta');
const Archivo = require('../models/Archivo');

router.post('/tarjeta', async (req, res) => {
    const { id, ubicacion } = req.body;
    const tarjeta = await Tarjeta.find({ id: id });
    console.log(id);
    if (tarjeta.length == 0) {
        //la tarjeta no existe la guardo en la bd, llamo asignacion asignacion
        const archivo = await Archivo.findOne({ ubicacion: ubicacion }).sort({ date: 'desc' });
        const tiempoArch = archivo.date;
        const tiempoActual = new Date();
        if ((tiempoActual - tiempoArch < 0)) {
            console.log(tiempoActual - tiempoArch);
        } else {
            if ((tiempoActual - tiempoArch) < 10000) { //10000 -> 10 segundos
                await Archivo.findByIdAndUpdate(archivo.id, { idRFID: id });
                const nuevaTarjeta = new Tarjeta({ id, ubicacion, asignadoA: archivo.idArchivo });
                await nuevaTarjeta.save();
                console.log(archivo.idRFID);
            } else {
                console.log("se paso del tiempo o no hay archivo para asignar");

            }
        }

    } else {
        //la tarjeta existe, actualizo ubicacion
        console.log("Ya existe");
        let tarjetaUDP = await Tarjeta.findOne({ id: id });
        tarjetaUDP.ubicacion = ubicacion;
        await tarjetaUDP.save();
        let archivoUdp = await Archivo.findOne({idRFID: id});
        archivoUdp.ubicacion = ubicacion;
        await archivoUdp.save();    

    }
});

module.exports = router;*/