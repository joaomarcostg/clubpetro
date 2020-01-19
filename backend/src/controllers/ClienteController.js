const axios = require('axios')

const Cliente = require('../models/Cliente.js')

module.exports = {

    async store(req, res){

        const {cpf} = req.body
        console.log(cpf)
        const clienteExists = await Cliente.findOne({cpf : cpf})

        if(clienteExists){
            return res.json(clienteExists)
        }

        const cliente_db = await Cliente.create({
            cpf
        })

        return res.json(cliente_db)
    }
}