const axios = require('axios')
const URL = 'https://swapi.dev/api/people'

async function obterPessoas(nome){
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}

obterPessoas('luke')
.then((mensagem) =>{
    console.log("Resultado",mensagem)
}).catch((err)=>{
    console.log(err)
})

module.exports = {obterPessoas} 