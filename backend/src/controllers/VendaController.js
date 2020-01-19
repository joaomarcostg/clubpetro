const axios = require('axios')

const Cliente = require('../models/Cliente.js')
const Venda = require('../models/Venda.js')


module.exports = {
    async store(req, res) {

        const { cliente } = req.body
        const { preco } = req.body

        const clienteExists = await Cliente.findById(cliente)

        if (clienteExists) {
            return res.json(clienteExists)
        }

        const venda_db = await Venda.create({
            preco,
            data: new Date(),
            cliente: clienteExists
        })


    },

    // async list(req, res) {
    //     const { cliente } = req.body
    //     const total_mes = Venda.
    //     const total_cliente = Venda.count({
    //         cliente: cliente,
    //         data: Date,
    //     })
    // }

}