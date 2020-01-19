const axios = require('axios')

const Frentista = require('../models/Frentista.js')

module.exports = {

    async store(req, res){

        const {cpf} = req.body
        console.log(cpf)
        const frentistaExists = await Frentista.findOne({cpf : cpf})

        if(frentistaExists){
            return res.json(frentistaExists)
        }

        const frentista_db = await Frentista.create({
            cpf
        })

        return res.json(frentista_db)
    }
}