const axios = require('axios')

const api = axios.create({
    baseURL: 'http://localhost:3333'
})

async function povoar() {
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

povoar()