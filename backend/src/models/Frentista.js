const { Schema, model } = require('mongoose')

const FrentistaSchema = new Schema({
    cpf: {
        type: Number,
        required: true
    },
})

module.exports = model('Frentista', FrentistaSchema)