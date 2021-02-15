const service = require("./service");

async function main() {
  try {
    const result = await service.obterPessoas("a");
    const names = result.results.map((pessoa) => pessoa.name);

    console.log("Names", names);
  } catch (error) {
    console.error("Deu Ruim", error);
  }
}
main();
