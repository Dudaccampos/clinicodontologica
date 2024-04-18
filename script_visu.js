var rollNo, rollV, nameV, telefoneV, addressV, appointmentDateV, appointmentTimeV; // variáveis que irão receber os dados cadastrados

function readForm() {
  rollV = document.getElementById("roll").value; 
  nameV = document.getElementById("name").value;
  telefoneV = document.getElementById("telefone").value;
  addressV = document.getElementById("address").value;
  appointmentDateV = document.getElementById("appointment-date").value;
  appointmentTimeV = document.getElementById("appointment-time").value;
  console.log(rollV, nameV, telefoneV, addressV, appointmentDateV, appointmentTimeV);
}

document.getElementById("read").onclick = function () {
    readForm();
  
    firebase
      .database()
      .ref("student/" + rollV)
      .on("value", function (snap) {
        document.getElementById("roll").value = snap.val().rollNo;
        document.getElementById("name").value = snap.val().name;
        document.getElementById("telefone").value = snap.val().telefone;
        document.getElementById("address").value = snap.val().address;
        document.getElementById("appointment-date").value = snap.val().appointmentDate;
        document.getElementById("appointment-time").value = snap.val().appointmentTime;
      });
      console.log(rollNo,rollV, nameV, addressV, telefoneV);
  };

document.getElementById("update").onclick = function () {
  readForm();

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      name: nameV,
      telefone: telefoneV,
      address: addressV,
      appointmentDate: appointmentDateV,
      appointmentTime: appointmentTimeV
    });
  alert("Dados Atualizados");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("address").value = "";
  document.getElementById("appointment-date").value = "";
  document.getElementById("appointment-time").value = "";
};

document.getElementById("delete").onclick = function () {
  readForm();

  firebase
    .database()
    .ref("student/" + rollV)
    .remove();
  alert("Dados Excluídos");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("address").value = "";
  document.getElementById("appointment-date").value = "";
  document.getElementById("appointment-time").value = "";
};
