const service = require("./service")

async function main(){
    try {
        // Normal for
        const result = await service.obterPessoas('a')
        var nomes = []
        console.time('For')
        for (let i=0; i <= result.results.length - 1; i++){
            const pessoas = result.results[i]
            nomes.push(pessoas.name)
        }
        console.timeEnd('For')
        

        // For In
        console.time('For In')
        for (let i in result.results){
            const ger = result.results[i]
            nomes.push(ger.name)
        }
        console.timeEnd('For In')

        // For Of
        console.time('For Of')
        for (i of result.results){            
            nomes.push(i.name)
        }
        console.timeEnd('For Of')
    } catch (error) {
        console.log(error,'Erro interno')
    }
}

main()