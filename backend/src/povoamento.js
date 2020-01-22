const axios = require('axios')
const Cliente = require('./models/Cliente.js')
const Frentista = require('./models/Frentista.js')


const api = axios.create({
    baseURL: 'http://localhost:3333'
})

async function listar() {
    const resp = await api.get('/frentistas', {
        headers: {
            cpf: 61810452291
        }
    })
    if(resp !== null){
        const vendas = await api.get('/')
    }
}
async function postar() {
    // let min = Math.ceil(00000000000)
    // let max = Math.floor(99999999999)

    // let cpf_frentista = Math.floor(Math.random() * (max - min)) + min
    // console.log(cpf_frentista)
    const data = JSON.stringify({
        cpf: 24133038687
    })
    await api.post('/frentistas', data, {
        headers: {
            'content-type': 'application/json',
        }
    })
}

async function povoar_frentistas() {
    for (let i = 0; i < 8; i++) {
        let min = Math.ceil(00000000000)
        let max = Math.floor(99999999999)

        let cpf_frentista = Math.floor(Math.random() * (max - min)) + min
        console.log(cpf_frentista)
        const data = JSON.stringify({
            cpf: cpf_frentista
        })
        await api.post('/frentistas', data, {
            headers: {
                'content-type': 'application/json',
            }
        })
    }
}

async function povoar_vendas() {
    
    
}

listar()