const mongoose = require('mongoose');
const { Schema } = mongoose;

const TarjetaSchema = new Schema({
    id: { type: Number, required: true },
    ubicacion: { type: String, required: true },
    asignadoA: { type: Number, default: -1 },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tarjeta', TarjetaSchema)