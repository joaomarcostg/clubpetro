const { Schema, model } = require('mongoose')

const OperacaoSchema = new Schema({
    frentista: {
        type: Schema.Types.ObjectId,
        ref: 'Frentista',
        required: true
    },
    venda: {
        type: Schema.Types.ObjectId,
        ref: 'Venda',
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('Frentista', OperacaoSchema)