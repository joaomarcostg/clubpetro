const axios = require('axios')

const Frentista = require('../models/Frentista.js')
const Cliente = require('../models/Cliente.js')
const Venda = require('../models/Venda.js')


module.exports = {
    async store(req, res) {
        try {
            const { idf } = req.params
            const { cliente } = req.body
            const { preco } = req.body

            const clienteExists = await Cliente.findById(cliente)

            if (!clienteExists) {
                return res.json(null)
            }

            const venda_db = await Venda.create({
                preco,
                data: new Date(),
                cliente: clienteExists
            })
            await Frentista.updateOne(
                { _id: idf },
                {
                    $push: {
                        vendas: venda_db
                    }
                })

            return res.json(venda_db)
        }
        catch (err) {
            return res.json(err)
        }
    },

    async index(req, res) {
        try{
            const { idv } = req.params
            const vendaExists = await Venda.findById(idv)
            if (!vendaExists) {
                return res.json(null)
            }
            return res.json(vendaExists)
        }
        catch(err){
            return res.json(err)
        }
    },

    async list(req, res) {
        try {
            const vendas = await Venda.find()
            return res.json(vendas)
        }
        catch (err) {
            return res.json(err)
        }
    }
}