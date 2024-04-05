var rollNo, rollV, nameV, genderV, addressV; //variaveis que irão receber os dados cadastrados

function readFom() {
  rollV = document.getElementById("roll").value; 
  nameV = document.getElementById("name").value;
  telefoneV = document.getElementById("telefone").value;
  addressV = document.getElementById("address").value;
  console.log(rollV, nameV, addressV, telefoneV);
}

document.getElementById("read").onclick = function () {
    readFom();
  
    firebase
      .database()
      .ref("student/" + rollV)
      .on("value", function (snap) {
        document.getElementById("roll").value = snap.val().rollNo;
        document.getElementById("name").value = snap.val().name;
        document.getElementById("telefone").value = snap.val().telefone;
        document.getElementById("address").value = snap.val().address;
      });
      console.log(rollNo,rollV, nameV, addressV, telefoneV);
  };
  
document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      //   rollNo: rollV,
      name: nameV,
      telefone: telefoneV,
      address: addressV,
    });
  alert("Dados Atualizados");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("address").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .remove();
  alert("Dados Excluidos");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("address").value = "";
};
function newFunction() {
    document.getElementById("read").onclick = function () {
        readFom();

        firebase
            .database()
            .ref("student/" + rollV)
            .on("value", function (snap) {
                document.getElementById("roll").value = snap.val().rollNo;
                document.getElementById("name").value = snap.val().name;
                document.getElementById("telefone").value = snap.val().telefone;
                document.getElementById("address").value = snap.val().address;
            });
    };
}

