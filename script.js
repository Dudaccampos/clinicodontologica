var rollV, nameV, telefoneV, addressV, appointmentDateV, appointmentTimeV; // variáveis que irão receber os dados cadastrados

function readForm() {
  rollV = document.getElementById("roll").value; 
  nameV = document.getElementById("name").value;
  telefoneV = document.getElementById("telefone").value;
  addressV = document.getElementById("address").value;
  appointmentDateV = document.getElementById("appointment-date").value;
  appointmentTimeV = document.getElementById("appointment-time").value;
  console.log(rollV, nameV, telefoneV, addressV, appointmentDateV, appointmentTimeV);
}

document.getElementById("insert").onclick = function () {
  readForm();

  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      rollNo: rollV,
      name: nameV,
      telefone: telefoneV,
      address: addressV,
      appointmentDate: appointmentDateV,
      appointmentTime: appointmentTimeV
    });
  alert("Dados Inseridos");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("address").value = "";
  document.getElementById("appointment-date").value = "";
  document.getElementById("appointment-time").value = "";
};
