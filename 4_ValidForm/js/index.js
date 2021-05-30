function first() {
  let first = document.getElementById("firstName").value;
  document.getElementById("firstName").innerHTML = first;
  let regExp = /[a-zA-Z]{2,20}/;
  if (!regExp.test(first)) {
    document.getElementById("firstName").style.border = "3px solid red";
  } else {
    document.getElementById("firstName").style.border = "3px solid green";
  }
}
function last() {
  let first = document.getElementById("lastName").value;
  document.getElementById("lastName").innerHTML = first;
  let regExp = /[a-zA-Z]{2,20}/;
  if (!regExp.test(first)) {
    document.getElementById("lastName").style.border = "3px solid red";
  } else {
    document.getElementById("lastName").style.border = "3px solid green";
  }
}

function email() {
  let first = document.getElementById("email").value;
  document.getElementById("email").innerHTML = first;
  let regExp = /\S+@\S+\.\S+/;
  if (!regExp.test(first)) {
    document.getElementById("email").style.border = "3px solid red";
  } else {
    document.getElementById("email").style.border = "3px solid green";
  }
}

function phone() {
  let first = document.getElementById("phone").value;
  document.getElementById("phone").innerHTML = first;
  let regExp = /^\+?3?8?(0[5-9][0-9]\d{7})$/;
  if (!regExp.test(first)) {
    document.getElementById("phone").style.border = "3px solid red";
  } else {
    document.getElementById("phone").style.border = "3px solid green";
  }
}

function password() {
  let first = document.getElementById("password").value;
  document.getElementById("password").innerHTML = first;
  let regExp = /[a-zA-Z0-9]{8,16}/;
  if (!regExp.test(first)) {
    document.getElementById("password").style.border = "3px solid red";
  } else {
    document.getElementById("password").style.border = "3px solid green";
  }
}

document.getElementById("button").onclick = () => {
  first();
  last();
  email();
  phone();
  password();
};
