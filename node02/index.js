function getUser(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      nome: "Aladin",
      dataNascimento: new Date(),
    });
  }, 1000);
}

function getPhoneNumber(idUser, callback) {
  setTimeout(() => {
    return callback(null, {
      phone: 1132132,
      nome: "Daniel",
      dataNascimento: new Date(),
    });
  }, 2000);
}

// function resolveUser(error, idUser) {
//   let usuario = idUser;
//   console.log("Usuário", usuario.id);
// }

// function getAddress(idUser) {}

getUser(function resolveUser(error, usuario) {
  if (error) {
    console.error("Usuario tá dodoi", error);
    return;
  }
  getPhoneNumber(usuario, function resolvePhoneNumber(error1, phone) {
    if (error) {
      console.error("Telefone tá dodoi", error);
      return;
    }

    console.log(
      `Identificação do usuário: ${usuario.id}
      Nome do usuário: ${usuario.nome}
      Telefone do usuário: ${phone.phone}`
    );
  });
});

// const phoneNumber = getPhoneNumber(usuario);

// console.log("Telefone", phoneNumber);
