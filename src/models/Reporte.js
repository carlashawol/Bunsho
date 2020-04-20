const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReporteSchema = new Schema({
    idArchivo: { type: Number, required: true },
    ubicacion: { type: String, default: null },
    estado: {type: String, required: true},
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reporte', ReporteSchema)