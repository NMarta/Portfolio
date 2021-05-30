$("#buttonTextBold").click(() => {
  $("p").css("fontWeight", "bold");
});
$("#buttonTextItalic").click(() => {
  $("p").css("fontStyle", "italic");
});
$("#buttonTextUnderline").click(() => {
  $("p").css("textDecoration", "underline");
});
$("#buttonTextLine").click(() => {
  $("p").css("textDecoration", "line-through");
});
$("#buttonTexeAlingLeft").click(() => {
  $("p").css("textAlign", "left");
});
$("#buttonTextAlingCenter").click(() => {
  $("p").css("textAlign", "center");
  $("p").css("justifyContent", "center");
});
$("#buttonTextAlingRight").click(() => {
  $("p").css("textAlign", "right");
});

// font_family
$("#buttonSelectFont").click(() => {
  $("#selectFont").css("display", "block");
  $("#selectFontSize").css("display", "none");
});
$("#selectFont").click(() => {
  let fontFamily = $("#selectFont option:checked").val();
  $("p").css("fontFamily", `${fontFamily}`);
});

// FontSize
$("#buttonSelectFontSize").click(() => {
  $("#selectFontSize").css("display", "block");
  $("#selectFont").css("display", "none");
});
$("#selectFontSize").click(() => {
  let fontSize = $("#selectFontSize option:checked").val();
  $("p").css("fontSize", `${fontSize}`);
});

// Palet
$("#buttonSelectPaletes").click(() => {
  $("#selectFontSize").css("display", "none");
  $("#selectFont").css("display", "none");
  $("#boxSelectColorText").css("display", "block");
});

// Colors/Images/File on Back
$("#buttonSelectColorImageBack").click(() => {
  $("#boxSelectColorBack").css("display", "block");
});
$("#colorColorBackClose").click(() => {
  $("#boxSelectColorBack").css("display", "none");
});
$("#buttonOpenColorBack").click(() => {
  $("#boxColorBack").css("display", "block");
  $("#boxImageBack").css("display", "none");
  $("#FileChooseBack").css("display", "none");
});
$("#buttonOpenImagesBack").click(() => {
  $("#boxColorBack").css("display", "none");
  $("#boxImageBack").css("display", "block");
  $("#FileChooseBack").css("display", "none");
});
$("#buttonOpenFilesBack").click(() => {
  $("#boxColorBack").css("display", "none");
  $("#boxImageBack").css("display", "none");
  $("#FileChooseBack").css("display", "block");
});

// File

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#blah").attr("src", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
$("#push").click(() => {
  $("main").css("position", "absolute");
  $("main").css("top", "100");
  $("main").css("zIndex", "0");
  $("#blah").css("display", "block");
});
// Sing In
$("#buttonLock").click(() => {
  $("#formaSingIn").css("display", "block");
});
$("#buttonSingUp").click(() => {
  $("#openlock").css("display", "block");
  $("#buttonLock").css("display", "none");
  let log = document.getElementById("singLogin").value;
  document.getElementById("singLogin").innerHTML = log;
  let regExpL = /[a-zA-Z]{4,16}/;
  let pass = document.getElementById("singPassword").value;
  document.getElementById("singPassword").innerHTML = pass;
  let regExpP = /[a-zA-Z0-9]{4,16}/;
  if (log == "" && pass == "") {
    $("#notext").css("display", "block");
    $("#notext").css("display", "block");
    $("#singLogin").css("border", "2px solid red");
    $("#singPassword").css("border", "2px solid red");
  } else if (!regExpL.test(log) || !regExpP.test(pass)) {
    $("#falsetext").css("display", "block");
    $("#notext").css("display", "none");
    $("#singLogin").css("border", "2px solid red");
    $("#singPassword").css("border", "2px solid red");
  } else {
    $("#formaSingIn").css("display", "none");
    $("#buttonCode").prop("disabled", null);
  }
});
function showText() {
  document.getElementById("text").style.display = "none";
  let b = document.getElementById("text").innerHTML;
  document.getElementById("textTag").value = b;
}

function SaveText() {
  document.getElementById("textTag").style.display = "none";
  let c = document.getElementById("textTag").value;
  document.getElementById("text").innerHTML = c;
  document.getElementById("text").style.display = "block";
}

$("#buttonCode").click(() => {
  $("#buttonHeader").css("display", "none");
  $("#buttonsSing").css("display", "flex");
  document.getElementById("textTag").style.display = "block";
  document.getElementById("textTag").style.width = "1400px";
  document.getElementById("textTag").style.height = "500px";
  // document.getElementById("textTag").style.margin = "0px auto";
  showText();
});
$("#buttonSave").click(() => {
  $("#buttonHeader").css("display", "flex");
  $("#buttonsSing").css("display", "none");
  SaveText();
});

function CreateTable() {
  let body = document.getElementById("text");
  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");
  let countTR = document.getElementById("countTR").value;
  let countTD = document.getElementById("countTD").value;
  let widthOfTR = document.getElementById("widthOfTR").value;
  let heightOfTD = document.getElementById("heightOfTD").value;
  let widthBorder = document.getElementById("WidthBorder").value;
  let borderStyle = document.getElementById("borderStyle").value;
  let borderColor = document.getElementById("borderColor").value;
  for (let i = 0; i < countTR; i++) {
    let row = document.createElement("tr");
    row.style.border = `${widthBorder} ${borderStyle} ${borderColor}`;
    for (let j = 0; j < countTD; j++) {
      let cell = document.createElement("td");
      cell.style.border = `${widthBorder} ${borderStyle} ${borderColor}`;
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("width", `${widthOfTR}`);
  tbl.setAttribute("height", `${heightOfTD}`);
  tbl.style.border = "none";
  let b = document.getElementById("text").innerHTML;
  document.getElementById("textTag").value = b;
}
function TableInputRed() {
  let countTR = document.getElementById("countTR").value;
  let countTD = document.getElementById("countTD").value;
  let widthOfTR = document.getElementById("widthOfTR").value;
  let heightOfTD = document.getElementById("heightOfTD").value;
  let widthBorder = document.getElementById("WidthBorder").value;
  if (
    countTR == "" ||
    countTD == "" ||
    widthOfTR == "" ||
    heightOfTD == "" ||
    widthBorder == ""
  ) {
    $(".inputTable").css("border", "2px solid red");
    $("#noValueTable").css("display", "block");
  }
}
function CleanInputTable() {
  document.getElementById("countTR").value = "";
  document.getElementById("countTD").value = "";
  document.getElementById("widthOfTR").value = "";
  document.getElementById("heightOfTD").value = "";
  document.getElementById("WidthBorder").value = "";
}
$("#buttonCreateTable").click(() => {
  TableInputRed();
  CreateTable();
});
$("#buttonResetTable").click(() => {
  CleanInputTable();
  $(".inputTable").css("border", "1px solid black");
  $(".inputTable").css("borderRadius", "4px");
  $("#noValueTable").css("display", "none");
});
$("#createTableClose").click(() => {
  $("#boxTable").css("display", "none");
});
$("#buttonTable").click(() => {
  $("#boxTable").css("display", "block");
});

// Create List OL
function GenerateOLList() {
  let body1 = document.getElementById("text");
  let olList = document.createElement("ol");
  let countLi = document.getElementById("OLli").value;
  let marks = document.getElementById("listStyleType").value;
  for (let l = 0; l < countLi; l++) {
    let liList = document.createElement("li");
    for (let t = 1; t <= l + 1; t++) {
      let textLi = "item" + t;
      liList.textContent = `${textLi}`;
    }
    olList.appendChild(liList);
  }
  body1.appendChild(olList);
  olList.style.listStyleType = `${marks}`;
  let b = document.getElementById("text").innerHTML;
  document.getElementById("textTag").value = b;
}
function InputOLClean() {
  let inp = document.getElementById("OLli");
  if (inp == "") {
    $("#OLli").css("border", "2px solid red");
    $("#noValueOL").css("display", "block");
  }
}
$("#buttonOL").click(() => {
  $("#boxOl").css("display", "block");
});
$("#closeOL").click(() => {
  $("#boxOl").css("display", "none");
});
$("#buttonResetOL").click(() => {
  InputOLClean();
  document.getElementById("OLli").value = "";
});
$("#buttonCreateOL").click(() => {
  GenerateOLList();
});

// Create ListUL
function GenerateULList() {
  let body1 = document.getElementById("text");
  let ulList = document.createElement("ul");
  let countLi = document.getElementById("ULli").value;
  let marks = document.getElementById("listUlStyleType").value;
  for (let l = 0; l < countLi; l++) {
    let liList = document.createElement("li");
    for (let t = 1; t <= l + 1; t++) {
      let textLi = "item" + t;
      liList.textContent = `${textLi}`;
    }
    ulList.appendChild(liList);
  }
  body1.appendChild(ulList);
  ulList.style.listStyleType = `${marks}`;
  let b = document.getElementById("text").innerHTML;
  document.getElementById("textTag").value = b;
}
function InputULClean() {
  let inp = document.getElementById("ULli");
  if (inp == "") {
    $("#ULli").css("border", "2px solid red");
    $("#noValueUL").css("display", "block");
  }
}
$("#buttonUL").click(() => {
  $("#boxUl").css("display", "block");
});
$("#closeUL").click(() => {
  $("#boxUl").css("display", "none");
});
$("#buttonResetUL").click(() => {
  InputULClean();
  document.getElementById("ULli").value = "";
});
$("#buttonCreateUL").click(() => {
  GenerateULList();
});

// Button Opel_lock
$("#openlock").click(() => {
  $("#openlockEnd").css("display", "block");
});
$("#clickCancel").click(() => {
  $("#openlockEnd").css("display", "none");
});
$("#clickSingUp").click(() => {
  $("#openlockEnd").css("display", "none");
  $("#openlock").css("display", "none");
  $("#buttonLock").css("display", "block");
  document.getElementById("singLogin").value = "";
  document.getElementById("singPassword").value = "";
  document.getElementById("buttonCode").setAttribute("disabled", "disabled");
});
