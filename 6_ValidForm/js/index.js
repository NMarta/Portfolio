let user = 0;
TestValue = () => {
  let regExpName = /^[a-zA-Z]/;
  let regExpEmail = /\S+@\S+\.\S+/;
  let regExpPassword = /[a-zA-Z0-9]{4,16}/;
  if (!regExpName.test(document.getElementById("firstName").value)) {
    $("#notValueFirstName").css("display", "inline");
  } else {
    $("#notValueFirstName").css("display", "none");
  }
  if (!regExpName.test(document.getElementById("lastName").value)) {
    $("#notValueLastName").css("display", "inline");
  } else {
    $("#notValueLastName").css("display", "none");
  }
  if (!regExpEmail.test(document.getElementById("email").value)) {
    $("#notValueEmail").css("display", "inline");
  } else {
    $("#notValueEmail").css("display", "none");
  }
  if (!regExpPassword.test(document.getElementById("password").value)) {
    $("#notValuePassword").css("display", "inline");
  } else {
    $("#notValuePassword").css("display", "none");
  }
};

let arrUser = [];
GetUser = () => {
  let fName = document.getElementById("firstName").value;
  document.getElementById("firstName").innerHTML = fName;
  let lName = document.getElementById("lastName").value;
  document.getElementById("lastName").innerHTML = lName;
  let email = document.getElementById("email").value;
  document.getElementById("email").innerHTML = email;
  let pass = document.getElementById("password").value;
  document.getElementById("password").innerHTML = pass;
  let obj = {
    fName: `${fName}`,
    lName: `${lName}`,
    email: `${email}`,
    pass: `${pass}`,
  };
  arrUser.push(obj);
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";

  user++;
  localStorage.setItem(`${user}`, JSON.stringify(obj));
};

CheckValue = () => {
  let emailVal = document.getElementById("emailSingUp").value;
  document.getElementById("emailSingUp").innerHTML = emailVal;
  let passVal = document.getElementById("passwordSingUp").value;
  document.getElementById("passwordSingUp").innerHTML = passVal;
  for (let i = 0; i < localStorage.length; i++) {
    let a = localStorage.key(i);
    let b = localStorage.getItem(a);
    b = JSON.parse(b);
    console.log(a);
    console.log(b.email);
    if (emailVal == b.email && passVal == b.pass) {
      let name = b.fName;
      let lname = b.lName;
      let userEmal = b.email;
      $("#box").css("display", "none");
      $("#user").css("display", "block");
      document.getElementById("userH2").innerHTML = `${name}` + `${lname}`;
      document.getElementById("userEmal").innerHTML = `${userEmal}`;
      $("#text").css("display", "none");
    } else {
      $("#text").css("display", "inline");
    }
  }
  document.getElementById("emailSingUp").value = "";
  document.getElementById("passwordSingUp").value = "";
};

ButtonSingUp = () => {
  TestValue();
  GetUser();
};

OvenFormaSing = () => {
  $("#forma").css("display", "none");
  $("#formaSing").css("display", "block");
  $("#text").css("display", "none");
};

OvenForma = () => {
  $("#formaSing").css("display", "none");
  $("#forma").css("display", "block");
  $("#notValuePassword").css("display", "none");
  $("#notValueEmail").css("display", "none");
  $("#notValueLastName").css("display", "none");
  $("#notValueFirstName").css("display", "none");
};

ReturnPageForm = () => {
  $("#box").css("display", "block");
  $("#forma").css("display", "block");
  $("#formaSing").css("display", "none");
  $("#user").css("display", "none");
};
