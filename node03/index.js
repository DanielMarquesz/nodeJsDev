const { rejects } = require("assert");
const EventEmitter = require("events");
const { resolve } = require("path");
class MeuEmissor extends EventEmitter {}

const meuEmissor = new MeuEmissor();
const nomeEvento = "usuario:click";
meuEmissor.on(nomeEvento, function (click) {
  console.log("um usuário clickou", click);
});

// meuEmissor.emit(nomeEvento, "Na barra de rolagem");
// meuEmissor.emit(nomeEvento, "No botão de cancelar");

// let count = 0;

// setInterval(() => {
//   meuEmissor.emit(nomeEvento, "Ok" + count++);
// }, 1000);

const stdin = process.openStdin();
function main() {
  return new Promisse((resolve, reject));
}
stdin.addListener("data", function (value) {
  console.log(`Você digitou: ${value.toString().trim()}`);
});
