const mongoose = require('mongoose');
const { Schema } = mongoose;

const ArchivoSchema = new Schema({
    title: { type: String, required: true },
    idArchivo: { type: Number, required: true },
    idRFID: {type: String, default: null},
    ubicacion: { type: String, default: null },
    description: { type: String, required: true },
    estado: {type: String, required: true},
    digital: {type: Object, required: false},
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Archivo', ArchivoSchema)