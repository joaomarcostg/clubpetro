const axios = require('axios')

const Cliente = require('../models/Cliente.js')

module.exports = {

    async store(req, res) {

        try {
            const { cpf } = req.body
            const clienteExists = await Cliente.findOne({ cpf: cpf })

            if (clienteExists) {
                return res.json(clienteExists)
            }

            const cliente_db = await Cliente.create({
                cpf
            })
            return res.json(cliente_db)
        }
        catch (err) {
            return res.json(err)
        }
    },

    async index(req, res) {
        try {
            const { idc } = req.params
            const clienteExists = await Cliente.findById(idc)
            if (!clienteExists) {

                return res.json(null)
            }
            return res.json(clienteExists)

        }
        catch (err) {
            return res.json(err)
        }
    },

    async list(req, res) {
        try{
            const clientes = await Cliente.find()
            return res.json(clientes)
        }
        catch(err){
            return res.json(err)
        }
    }
}