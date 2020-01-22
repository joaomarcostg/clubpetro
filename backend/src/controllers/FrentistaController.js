const axios = require('axios')

const Frentista = require('../models/Frentista.js')

module.exports = {

    //registra um frentista
    async store(req, res) {
        try{
            const { cpf } = req.body
            const frentistaExists = await Frentista.findOne({ cpf: cpf })
            if (frentistaExists) {
                return res.json(frentistaExists)
            }
            
            const frentista_db = await Frentista.create({
                cpf
            })
            return res.json(frentista_db)
        }
        catch(err){
            return res.json(err)
        }
    },

    //mostra um frentista passado pelo parametro 'idf'
    async index(req, res) {
        try {
            const { idf } = req.params
            const frentistaExists = await Frentista.findById(idf)

            if (!frentistaExists) {
                return res.json(null)

            }
            return res.json(frentistaExists)
        }
        catch (err) {
            return res.json(err)
        }
    },

    //lista todos os frentistas
    async list(req, res) {
        try {
            const frentistas = await Frentista.find()
            return res.json(frentistas)
        }
        catch (err) {
            return res.json(err)
        }
    },

    //lista as vendas realizadas por determinado frentista 'idf'
    async vendas(req, res) {
        try {
            const { idf } = req.params
            const frentistaExists = await Frentista.findById(idf)
            if (frentistaExists) {
                return res.json(frentistaExists.vendas)
            }
            else {
                return res.json(null)
            }
        }
        catch (err) {
            return res.json(err)
        }
    }
}