let b = document.getElementById("text1").innerHTML;

document.getElementById("buttonEdit").onclick = () => {
  document.getElementById("text").style.display = "block";
  document.getElementById("buttonAddSave").style.display = "block";
  document.getElementById("text").value = `${b}`;
  document.getElementById("forma").style.display = "none";
};

document.getElementById("buttonStyle").onclick = () => {
  document.getElementById("forma").style.display = "block";
  document.getElementById("text").style.display = "none";
  document.getElementById("buttonAddSave").style.display = "none";
};

// value_fontSize
document.getElementById("value12").onclick = () => {
  let a = document.getElementsByTagName("p");
  for (i = 0; i < a.length; i++) {
    a[i].style.fontSize = "12px";
  }
};
document.getElementById("value14").onclick = () => {
  let a = document.getElementsByTagName("p");
  for (i = 0; i < a.length; i++) {
    a[i].style.fontSize = "14px";
  }
};
document.getElementById("value16").onclick = () => {
  let a = document.getElementsByTagName("p");
  for (i = 0; i < a.length; i++) {
    a[i].style.fontSize = "16px";
  }
};
document.getElementById("value18").onclick = () => {
  let a = document.getElementsByTagName("p");
  for (i = 0; i < a.length; i++) {
    a[i].style.fontSize = "18px";
  }
};
document.getElementById("value20").onclick = () => {
  let a = document.getElementsByTagName("p");
  for (i = 0; i < a.length; i++) {
    a[i].style.fontSize = "20px";
  }
};

// color Of Text
document.getElementById("colorOfText").onclick = () => {
  document.getElementById("div_9color").style.display = "block";
  document.getElementById("div_9color").style.border = "1px solid black";
};

document.getElementById("color1").onclick = () => {
  let a = document.getElementsByTagName("p");
  for (i = 0; i < a.length; i++) {
    a[i].style.color = "red";
  }
  document.getElementById("div_9color").style.display = "none";
};

document.getElementById("color2").onclick = () => {
  let a = document.getElementsByTagName("p");
  for (i = 0; i < a.length; i++) {
    a[i].style.color = "yellow";
  }
  document.getElementById("div_9color").style.display = "none";
};

document.getElementById("color3").onclick = () => {
  let a = document.getElementsByTagName("p");
  for (i = 0; i < a.length; i++) {
    a[i].style.color = "orange";
  }
  document.getElementById("div_9color").style.display = "none";
};
document.getElementById("color4").onclick = () => {
  let a = document.getElementsByTagName("p");
  for (i = 0; i < a.length; i++) {
    a[i].style.color = "lightgreen";
  }
  document.getElementById("div_9color").style.display = "none";
};
document.getElementById("color5").onclick = () => {
  let a = document.getElementsByTagName("p");
  for (i = 0; i < a.length; i++) {
    a[i].style.color = "yellowgreen";
  }
  document.getElementById("div_9color").style.display = "none";
};

document.getElementById("color6").onclick = () => {
  let a = document.getElementsByTagName("p");
  for (i = 0; i < a.length; i++) {
    a[i].style.color = "green";
  }
  document.getElementById("div_9color").style.display = "none";
};
document.getElementById("color7").onclick = () => {
  let a = document.getElementsByTagName("p");
  for (i = 0; i < a.length; i++) {
    a[i].style.color = "lightskyblue";
  }
  document.getElementById("div_9color").style.display = "none";
};
document.getElementById("color8").onclick = () => {
  let a = document.getElementsByTagName("p");
  for (i = 0; i < a.length; i++) {
    a[i].style.color = "blue";
  }
  document.getElementById("div_9color").style.display = "none";
};
document.getElementById("color9").onclick = () => {
  let a = document.getElementsByTagName("p");
  for (i = 0; i < a.length; i++) {
    a[i].style.color = "gray";
  }
  document.getElementById("div_9color").style.display = "none";
};

// backgroundColor
document.getElementById("backgroundColor").onclick = () => {
  document.getElementById("div_9backgroundColor").style.display = "block";
  document.getElementById("div_9backgroundColor").style.border =
    "1px solid black";
};
let color = document.getElementsByClassName("div1");
for (i = 0; i < color.length; i++) {
  color[0].onclick = () => {
    document.getElementById("text1").style.backgroundColor = "red";
    document.getElementById("div_9backgroundColor").style.display = "none";
  };
  color[1].onclick = () => {
    document.getElementById("text1").style.backgroundColor = "yellow";
    document.getElementById("div_9backgroundColor").style.display = "none";
  };
  color[2].onclick = () => {
    document.getElementById("text1").style.backgroundColor = "orange";
    document.getElementById("div_9backgroundColor").style.display = "none";
  };
  color[3].onclick = () => {
    document.getElementById("text1").style.backgroundColor = "lightgreen";
    document.getElementById("div_9backgroundColor").style.display = "none";
  };
  color[4].onclick = () => {
    document.getElementById("text1").style.backgroundColor = "yellowgreen";
    document.getElementById("div_9backgroundColor").style.display = "none";
  };
  color[5].onclick = () => {
    document.getElementById("text1").style.backgroundColor = "green";
    document.getElementById("div_9backgroundColor").style.display = "none";
  };
  color[6].onclick = () => {
    document.getElementById("text1").style.backgroundColor = "lightskyblue";
    document.getElementById("div_9backgroundColor").style.display = "none";
  };
  color[7].onclick = () => {
    document.getElementById("text1").style.backgroundColor = "blue";
    document.getElementById("div_9backgroundColor").style.display = "none";
  };
  color[8].onclick = () => {
    document.getElementById("text1").style.backgroundColor = "gray";
    document.getElementById("div_9backgroundColor").style.display = "none";
  };
}

// Font Family
document.getElementById("classic").onclick = () => {
  let a = document.getElementsByTagName("p");
  for (i = 0; i < a.length; i++) {
    a[i].style.fontFamily = "Arial";
  }
};

document.getElementById("cursive").onclick = () => {
  let a = document.getElementsByTagName("p");
  for (i = 0; i < a.length; i++) {
    a[i].style.fontFamily = "Comic Sans MS";
  }
};

document.getElementById("fantasy").onclick = () => {
  let a = document.getElementsByTagName("p");
  for (i = 0; i < a.length; i++) {
    a[i].style.fontFamily = "Metal Mania";
  }
};

document.getElementById("monospace").onclick = () => {
  let a = document.getElementsByTagName("p");
  for (i = 0; i < a.length; i++) {
    a[i].style.fontFamily = "Courier New";
  }
};

document.getElementById("sans-serif").onclick = () => {
  let a = document.getElementsByTagName("p");
  for (i = 0; i < a.length; i++) {
    a[i].style.fontFamily = "Trebuchet MS";
  }
};

// Font Style
document.getElementById("checBold").onchange = () => {
  let a = document.getElementsByTagName("p");
  for (i = 0; i < a.length; i++) {
    a[i].style.fontWeight = "700";
  }
};

document.getElementById("checCurs").onchange = () => {
  let a = document.getElementsByTagName("p");
  for (i = 0; i < a.length; i++) {
    a[i].style.fontStyle = "italic";
  }
};

// Button Add table

document.getElementById("buttonAdd").onclick = () => {
  document.getElementById("divForAdd").style.display = "block";
  document.getElementById("text1").style.display = "none";
  document.getElementById("second").style.display = "none";
  document.getElementById("third").style.display = "none";
};

document.getElementById("add_table").onclick = () => {
  document.getElementById("clickOnAdd_table").style.display = "block";
  document.getElementById("clickOnAdd_list").style.display = "none";
};

function generate_table() {
  let body = document.getElementById("text1");
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
}

document.getElementById("buttonCreateTable").onclick = () => {
  document.getElementById("divForAdd").style.display = "none";
  document.getElementById("text1").style.display = "block";
  document.getElementById("second").style.display = "flex";
  document.getElementById("second").style.justifyContent = "center";
  document.getElementById("third").style.display = "block";
};

// button add list
document.getElementById("add_list").onclick = () => {
  document.getElementById("clickOnAdd_list").style.display = "block";
  document.getElementById("clickOnAdd_table").style.display = "none";
};

function generate_list() {
  let body1 = document.getElementById("text1");
  let ulList = document.createElement("ul");
  let countLi = document.getElementById("countLi").value;
  let marks = document.getElementById("marks").value;
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
}

document.getElementById("buttonCreateList").onclick = () => {
  document.getElementById("divForAdd").style.display = "none";
  document.getElementById("text1").style.display = "block";
  document.getElementById("second").style.display = "flex";
  document.getElementById("second").style.justifyContent = "center";
  document.getElementById("third").style.display = "block";
};

document.getElementById("buttonSave").onclick = () => {
  document.getElementById("text1").innerHTML = document.getElementById(
    "text"
  ).value;
  document.getElementById("text").style.display = "none";
  document.getElementById("buttonAddSave").style.display = "none";
  generate_table();
  generate_list();
};
