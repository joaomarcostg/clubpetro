const { Schema, model } = require('mongoose')

const FrentistaSchema = new Schema({
    cpf: {
        type: Number,
        required: true
    },  

    vendas: [{
        type: Schema.Types.ObjectId,
        ref: 'Venda'
    }]
})

module.exports = model('Frentista', FrentistaSchema)