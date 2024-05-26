const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');


const DataGameSchema = mongoose.Schema({                        //definir la estructura de un modelo de Mongoose
    Ganancia:{
        type: Number,
        required: true,
        maxLenght: 20,
        trim: true                                              // Elimina cualquier carácter de espacio en blanco al principio o al final del valor antes de almacenarlo.
    },
    Mesa:{
        type: Number,
        required: true,
        maxLenght: 20,
        trim: true 
    },
    Dealer:{
        type: String,
        required: true,
        maxLenght: 50,
        trim: true 
    },
    Fecha:{
        type: Date,
        required: true,
        trim: true 
    },

},{timestamps: true})                                         //añada automáticamente dos propiedades de marca de tiempo a tus documentos: createdAt y updatedAt

module.exports = mongoose.model('DataGame',DataGameSchema)