const { get } = require("axios");

const URL = "http://restemployeesapi-com.umbler.net/employees/list"

async function getUser(id){
  const url = `${URL}/${id}`
  const result = await get(url)
  return result.data
}

function mapIds(item){
  return {
    name: item.name,
    age: item.age
  }
}

module.exports = { getUser }

// const URL = `https://swapi.dev/api/people`;

// async function obterPessoas(nome) {
//   const url = `${URL}/?search=${nome}&format=json`;
//   const result = await get(url);
//   return result.data.results.map(mapearPessoas);
// }

// function mapearPessoas(item) {
//   return {
//     nome: item.name,
//     peso: item.height,
//   };
// }

// module.exports = { obterPessoas };
