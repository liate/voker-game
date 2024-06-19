let kolo1 = document.getElementById("circue1");
let kolo2 = document.getElementById("circue2");
let kolo3 = document.getElementById("circue3");

let spp = document.getElementById("sple-text");

let spel = document.getElementById("dayn");

let spells = [
  "cold snap",
  "ice wall",
  "ghost walk",
  "EMP",
  "tornado",
  "alacrity",
  "blast",
  "meteor",
  "forge spirit",
  "sun strike",
];
let da1 = "";
function random_spel() {
  let random = Math.floor(Math.random() * spells.length);
  da1 = spells[random];
  spp.textContent = da1;
  if (random === 0) {
    spel.src = "Cold_Snap_icon.webp";
  }
  if (random === 1) {
    spel.src = "wall.jpg";
  }
  if (random === 2) {
    spel.src = "ghost walk.jpg";
  }
  if (random === 3) {
    spel.src = "EMP.jpg";
  }
  if (random === 4) {
    spel.src = "tornado.jpg";
  }
  if (random === 5) {
    spel.src = "alacrity.jpg";
  }
  if (random === 6) {
    spel.src = "blast.jpg";
  }
  if (random === 7) {
    spel.src = "meteor.jpg";
  }
  if (random === 8) {
    spel.src = "forge spirit.jpg";
  }
  if (random === 9) {
    spel.src = "sun strike.jpg";
  }
}

let pp = 0;
let win_point = 0;
let st = document.querySelector(".stt");
let ez = document.getElementById("ez");
let mid = document.getElementById("mid");
let hard = document.getElementById("hard");
let inv1 = document.getElementById("inv");

ez.onclick = ezmode;
mid.onclick = midmode;
hard.onclick = hardmode;
inv1.onclick = infmode;

function ezmode() {
  pp = 5;
  st.style.display = "grid";
  ez.style.backgroundColor = "green";
  mid.style.backgroundColor = "white";
  hard.style.backgroundColor = "white";
  inv1.style.backgroundColor = "white";
}

function midmode() {
  pp = 10;
  st.style.display = "grid";
  ez.style.backgroundColor = "white";
  mid.style.backgroundColor = "green";
  hard.style.backgroundColor = "white";
  inv1.style.backgroundColor = "white";
}
function hardmode() {
  pp = 15;
  st.style.display = "grid";
  ez.style.backgroundColor = "white";
  mid.style.backgroundColor = "white";
  hard.style.backgroundColor = "green";
  inv1.style.backgroundColor = "white";
}
function infmode() {
  pp = 999999;
  st.style.display = "grid";
  ez.style.backgroundColor = "white";
  mid.style.backgroundColor = "white";
  hard.style.backgroundColor = "white";
  inv1.style.backgroundColor = "green";
}

let time = 0;
st.onclick = startgame;
let och = document.querySelector(".check");
let ooo = 0;

function up() {
  time++;
  console.log(time);
}
setInterval(up, 1000);
function startgame() {
  random_spel();
  time = 0;
  win_point = 0;
  ooo = 0;
  och.textContent = ooo + "/" + pp;
  set_time.textContent = "";
}

addEventListener("keydown", function (e) {
  if (e.code === "KeyQ") {
    quas();
  }
  if (e.code === "KeyW") {
    wex();
  }
  if (e.code === "KeyE") {
    exort();
  }

  if (e.code === "KeyR") {
    invoke();
  }
});
let inv = "";
let cust = "";

let set_time = document.querySelector(".sec");

let sp1 = document.getElementById("d1");
let sp2 = document.getElementById("f1");
let dima = 0;

function invoke() {
  dima++;
  if (inv === "qqq") {
    cust = "cold snap";
    if (dima % 2 === 0) {
      sp2.style.backgroundImage = "url(Cold_Snap_icon.webp)";
    } else {
      sp1.style.backgroundImage = "url(Cold_Snap_icon.webp)";
    }
  }
  if (inv === "www") {
    cust = "EMP";
    if (dima % 2 === 0) {
      sp2.style.backgroundImage = "url(EMP.jpg)";
    } else {
      sp1.style.backgroundImage = "url(EMP.jpg)";
    }
  }
  if (inv === "eee") {
    cust = "sun strike";
    if (dima % 2 === 0) {
      sp2.style.backgroundImage = "url(Sun_Strike_icon.webp)";
    }
    sp1.style.backgroundImage = "url(Sun_Strike_icon.webp)";
  }
  if (inv === "qqe" || inv === "qeq" || inv === "eqq") {
    cust = "ice wall";
    if (dima % 2 === 0) {
      sp2.style.backgroundImage = "url(wall.jpg)";
    } else {
      sp1.style.backgroundImage = "url(wall.jpg)";
    }
  }
  if (inv === "qqw" || inv === "qwq" || inv === "wqq") {
    cust = "ghost walk";
    if (dima % 2 === 0) {
      sp2.style.backgroundImage = "url(ghost_walk.jpg)";
    } else {
      sp1.style.backgroundImage = "url(ghost_walk.jpg)";
    }
  }
  if (inv === "wwe" || inv === "eww" || inv === "wew") {
    cust = "alacrity";
    if (dima % 2 === 0) {
      sp2.style.backgroundImage = "url(alacrity.jpg)";
    } else {
      sp1.style.backgroundImage = "url(alacrity.jpg)";
    }
  }
  if (inv === "wqw" || inv === "qww" || inv === "wwq") {
    cust = "tornado";
    if (dima % 2 === 0) {
      sp2.style.backgroundImage = "url(tornado.jpg)";
    } else {
      sp1.style.backgroundImage = "url(tornado.jpg)";
    }
  }
  if (inv === "eew" || inv === "wee" || inv === "ewe") {
    cust = "meteor";
    if (dima % 2 === 0) {
      sp2.style.backgroundImage = "url(meteor.jpg)";
    } else {
      sp1.style.backgroundImage = "url(meteor.jpg)";
    }
  }
  if (inv === "eeq" || inv === "qee" || inv === "eqe") {
    cust = "forge spirit";
    if (dima % 2 === 0) {
      sp2.style.backgroundImage = "url(invoker-forge-spirit.webp)";
    } else {
      sp1.style.backgroundImage = "url(invoker-forge-spirit.webp)";
    }
  }
  if (
    inv === "qwe" ||
    inv === "wqe" ||
    inv === "eqw" ||
    inv === "weq" ||
    inv === "qew" ||
    inv === "ewq"
  ) {
    cust = "blast";
    if (dima % 2 === 0) {
      sp2.style.backgroundImage = "url(blast.jpg)";
    } else {
      sp1.style.backgroundImage = "url(blast.jpg)";
    }
  }

  console.log(cust);
  console.log(inv);
  if (cust === da1) {
    random_spel();
    win_point++;
    console.log(win_point);
    ooo++;
    och.textContent = ooo + "/" + pp;
  }

  if (win_point === pp) {
    set_time.textContent = time + "s";
    spp.textContent = "";
    spel.src = "";
  }
}

let count = 0;

function quas() {
  count++;
  if (count > 3) {
    count = 1;
  }
  if (inv.length >= 3) {
    inv = "";
  }
  inv += "q";
  if (count === 2) {
    kolo2.classList.remove("exort1");
    kolo2.classList.remove("wex1");
    kolo2.classList.add("quas1");
  } else if (count % 3 === 0) {
    kolo3.classList.remove("exort1");
    kolo3.classList.remove("wex1");
    kolo3.classList.add("quas1");
  } else {
    kolo1.classList.remove("exort1");
    kolo1.classList.remove("wex1");
    kolo1.classList.add("quas1");
  }
}

function wex() {
  count++;
  if (count > 3) {
    count = 1;
  }
  if (inv.length >= 3) {
    inv = "";
  }
  inv += "w";

  if (count === 2) {
    kolo2.classList.remove("exort1");
    kolo2.classList.remove("quas1");
    kolo2.classList.add("wex1");
  } else if (count === 3) {
    kolo3.classList.remove("exort1");
    kolo3.classList.remove("quas1");
    kolo3.classList.add("wex1");
  } else {
    kolo1.classList.remove("exort1");
    kolo1.classList.remove("quas1");
    kolo1.classList.add("wex1");
  }
}

function exort() {
  count++;
  if (count > 3) {
    count = 1;
  }

  if (inv.length >= 3) {
    inv = "";
  }
  inv += "e";

  if (count === 2) {
    kolo2.classList.remove("wex1");
    kolo2.classList.remove("quas1");
    kolo2.classList.add("exort1");
  } else if (count === 3) {
    kolo3.classList.remove("wex1");
    kolo3.classList.remove("quas1");
    kolo3.classList.add("exort1");
  } else if (count === 1) {
    kolo1.classList.remove("wex1");
    kolo1.classList.remove("quas1");
    kolo1.classList.add("exort1");
  }
}
