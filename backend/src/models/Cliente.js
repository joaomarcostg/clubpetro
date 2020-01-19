const { Schema, model } = require('mongoose')

const ClienteSchema = new Schema({
    cpf: {
        type: Number,
        required: true
    },
})

module.exports = model('Cliente', ClienteSchema)