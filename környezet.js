function menube() {
  document.getElementById("navidiv").style.right = "0%";
  document.getElementById("menugomb").onclick = menu;
};

function menu() {
  document.getElementById("navidiv").style.right = "-100%";
  document.getElementById("menugomb").onclick = menube;
};

function ki() {
  menu()
  elsoki();
  masodikki();
  harmadikki();
  negyedikki();
  otodikki();
  hatodikki();
  hetedikki();
  nyolcadikki();
}

function elsobe() {
  console.log("1");
  ki();
  menu();
  document.getElementById("elso").style.left = "0%";
  document.getElementById("szakmagomb").style.right = "2%";
};

function elsoki() {
  document.getElementById("elso").style.left = "-100%";
  document.getElementById("szakmagomb").style.right = "-20%";
}

function masodikbe() {
  console.log("2");
  ki();
  menu();
  document.getElementById("masodik").style.right = "0%";
  document.getElementById("szakmagomb").style.right = "2%";
};

function masodikki() {
  document.getElementById("masodik").style.right = "-100%";
  document.getElementById("szakmagomb").style.right = "-20%";
}

function harmadikbe() {
  console.log("3");
  ki();
  menu();
  document.getElementById("harmadik").style.left = "0%";
  document.getElementById("szakmagomb").style.right = "2%";
};

function harmadikki() {
  document.getElementById("harmadik").style.left = "-100%";
  document.getElementById("szakmagomb").style.right = "-20%";
}

function negyedikbe() {
  console.log("4");
  ki();
  menu();
  document.getElementById("negyedik").style.right = "0%";
  document.getElementById("szakmagomb").style.right = "2%";
};

function negyedikki() {
  document.getElementById("negyedik").style.right = "-100%";
  document.getElementById("szakmagomb").style.right = "-20%";
}

function otodikbe() {
  console.log("5");
  ki();
  menu();
  document.getElementById("otodik").style.left = "0%";
  document.getElementById("szakmagomb").style.right = "2%";
};

function otodikki() {
  document.getElementById("otodik").style.left = "-100%";
  document.getElementById("szakmagomb").style.right = "-20%";
}

function hatodikbe() {
  console.log("6");
  ki();
  menu();
  document.getElementById("hatodik").style.right = "0%";
  document.getElementById("szakmagomb").style.right = "2%";
};

function hatodikki() {
  document.getElementById("hatodik").style.right = "-100%";
  document.getElementById("szakmagomb").style.right = "-20%";
}

function hetedikbe() {
  console.log("7");
  ki();
  menu();
  document.getElementById("hetedik").style.left = "0%";
  document.getElementById("szakmagomb").style.right = "2%";
};

function hetedikki() {
  document.getElementById("hetedik").style.left = "-100%";
  document.getElementById("szakmagomb").style.right = "-20%";
}

function nyolcadikbe() {
  console.log("8");
  ki();
  menu();
  document.getElementById("nyolcadik").style.right = "0%";
  document.getElementById("szakmagomb").style.right = "2%";
}

function nyolcadikki() {
  document.getElementById("nyolcadik").style.right = "-100%"
  document.getElementById("szakmagomb").style.right = "-20%"
}

let pont = 0
let valasz

function teszt() {

  pont = 0

  valasz = ''

  if (k1.checked == true && k2.checked == false && k3.checked == true && k4.checked == false) {
      pont += 1
  }

  if (k5.checked == false && k6.checked == true && k7.checked == true) {
      pont += 1
  }

  if (k8.checked == false && k9.checked == true) {
      pont += 1
  }

  if (k10.checked == false && k11.checked == true) {
      pont += 1
  }

  if (k12.checked == false && k13.checked == true && k14.checked == false) {
      pont += 1
  }

  if (k15.checked == false && k16.checked == true) {
      pont += 1
  }

  if (k17.checked == false && k18.checked == false && k19.checked == true) {
      pont += 1
  }

  if (k20.checked == true && k21.checked == false && k22.checked == true && k23.checked == false) {
      pont += 1
  }

  if (k24.checked == true && k25.checked == false) {
      pont += 1
  }

  if (k26.checked == true && k27.checked == false && k28.checked == true && k29.checked == false) {
      pont += 1
  }


  console.log(
      k1.checked,
      k2.checked,
      k3.checked,
      k4.checked,
      k5.checked,
      k6.checked,
      k7.checked,
      k8.checked,
      k9.checked,
      k10.checked,
      k11.checked,
      k12.checked,
      k13.checked,
      k14.checked,
      k15.checked,
      k16.checked,
      k17.checked,
      k18.checked,
      k19.checked,
      k20.checked,
      k21.checked,
      k22.checked,
      k23.checked,
      k24.checked,
      k25.checked,
      k26.checked,
      k27.checked,
      k28.checked,
      k29.checked,)
  console.log(pont)

  if (pont <= 3) {
      valasz = 'Ez most nem sikerült! :('
  }
  else if (pont <= 5) {
      valasz = 'Figyelmesebben olvasd'
  }
  else if (pont <= 8) {
      valasz = 'Nem rossz de még van hova fejlődni!'
  }
  else if (pont <= 9) {
      valasz = 'Majdnem tökéletes!'
  }
  else if (pont == 10) {
      valasz = 'A megoldásod tökéletes! :)'
  }

  document.getElementById('pontok').innerHTML = 'Elért pontok 10/' + (pont) + "<br>" + (valasz)
  console.log(pont)

}