const assert = require("assert");
const { getUser } = require("./index")

describe("Rest API Employees", function () {
  it("Should get one user by the id given", async () => {
    const idBase = 40;
    const expected = {id:idBase, name: "Jhon Wick", age: 38, OccupationId: 15, createdAt: "2021-02-16T14:01:48.000Z", updatedAt: "2021-02-16T14:01:48.000Z"};
    const resultado = await getUser(idBase);
    assert.deepStrictEqual(resultado, expected);
  });
});


// assert.ok(false)

// const { obterPessoas } = require("./index");
// const nock = require("nock"); // Para simular requisições

// describe("Star Wars API", function () {
//   it("Deve buscar o r2d2 com o formato correto", async () => {
//     const expected = [{ nome: "R2-D2", peso: "96" }];
//     const nomeBase = `r2-d2`;
//     const resultado = await obterPessoas(nomeBase);
//     assert.deepStrictEqual(resultado, expected);
//   });
// });
