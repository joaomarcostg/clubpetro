const { Schema, model } = require('mongoose')

const VendaSchema = new Schema({
    preco: {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        required: true
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    fraudulenta: {
        type: Boolean,
        required: true
    }
})

module.exports = model('Venda', VendaSchema)