const Frentista = require('../models/Frentista.js')
const Cliente = require('../models/Cliente.js')
const Venda = require('../models/Venda.js')


module.exports = {
    
    //registra uma venda no banco
    async store(req, res) {
        try { 
            const { idf } = req.params
            const { cliente } = req.body
            const { preco } = req.body

            //se o cliente ou frentista não existem respondo com null
            const clienteExists = await Cliente.findById(cliente)
            if (!clienteExists) {
                return res.json(null)
            }

            const frentistaExists = await Frentista.findById(idf)
            if (!frentistaExists) {
                return res.json(null)
            }

            //procuro todas vendas que estão no intervalo dos ultimos 30 dias
            const vendas_mes = await Venda.find({
                data: {
                    $gt: new Date(new Date().getTime() - (30 * 24 * 60 * 60 * 1000)),
                    $lte: new Date().getTime()
                }
            })

            //total de vendas realizadas no mês
            const total_mes = vendas_mes.length

            //bool para determinar se a venda é fraudulenta ou não
            let fraudulenta = false

            //contagem de compras do cliente no mes
            let mes_cliente = 0

            //contagem de compras do frentista no mes
            let mes_frentista = 0

            //contagem de vendas que o frentista fez para o cliente
            let cliente_frentista = 0

            //guardo apenas o vetor de vendas da coleção do frentista
            const vendas_frentista = frentistaExists.vendas

            //para cada venda registrada no banco no mês
            vendas_mes.forEach(venda => {

                //verifico se essa venda está entre as feitas pelo frentista
                let frentista_vendeu = vendas_frentista.includes(venda.id)

                //verifico se o cliente é o mesmo que está comprando no momento
                let cliente_comprou = (venda.cliente == cliente) ? true : false

                //incremento as variáveis contadoras de acordo com as condições
                if (frentista_vendeu && cliente_comprou) {
                    cliente_frentista++
                    mes_frentista++;
                    mes_cliente++
                }
                else {
                    if (cliente_comprou) {
                        mes_cliente++
                    }
                    else if (frentista_vendeu) {
                        mes_frentista++;
                    }
                }
                cliente_comprou = false
            })
        
            //se alguma regra de negócio for quebrada, marco a venda como fraudulenta
            if ((mes_frentista >= 20) || (mes_cliente >= 7) || (cliente_frentista >= 3) || (mes_frentista > (total_mes * 0.2))) {
                fraudulenta = true
            }

            //crio uma venda no banco
            const venda_db = await Venda.create({
                preco,
                data: new Date(),
                cliente: clienteExists,
                fraudulenta
            })

            //adiciono essa venda ao array de vendas do frentista
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
            res.json(err)
        }
    },

    //mostra uma venda passada pelo parametro 'idv'
    async index(req, res) {
        try {
            const { idv } = req.params
            const vendaExists = await Venda.findById(idv)
            if (!vendaExists) {
                return res.json(null)
            }
            return res.json(vendaExists)
        }
        catch (err) {
            return res.json(err)
        }
    },

    //lista todas as vendas feitas
    async list(req, res) {
        try {
            const vendas = await Venda.find()
            return res.json(vendas)
        }
        catch (err) {
            return res.json(err)
        }
    },

}