var rollV, nameV, genderV, addressV; //variaveis que irão receber os dados cadastrados

function readFom() {
  rollV = document.getElementById("roll").value; 
  nameV = document.getElementById("name").value;
  telefoneV = document.getElementById("telefone").value;
  addressV = document.getElementById("address").value;
  console.log(rollV, nameV, addressV, telefoneV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      rollNo: rollV,
      name: nameV,
      telefone: telefoneV,
      address: addressV,
    });
  alert("Dados Inseridos");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("address").value = "";
};


