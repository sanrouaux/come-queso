//Variables globales------------------------------------------------------------

let raton = document.getElementById('mouse');
let sonido = document.getElementById('musica');
let queso = document.getElementById('cheese');

let posicionEjeVertical = 80;
let posicionEjeHorizontal = 100;

let posicionRatoneraUno;
let posicionRatoneraDos;
let posicionRatoneraTres;
let posicionRatoneraCuatro;
let posicionRatoneraCinco;
let posicionRatoneraSeis;
let posicionRatoneraSiete;
let posicionRatoneraOcho;

let nivel = 1;


//Funciones que ubican las ratoneras en lugares al azar-------------------------

/*
function generaNumero(min, max) {
  let num = Math.floor(Math.random() * (max-min) + min);
  return num;
}

function ubicaRatonera(id, minY, maxY, minX, maxX) {
  let ratonera = document.getElementById(id);
  let ejeY = generaNumero(minY, maxY);
  ratonera.style.bottom = `${ejeY}px`;
  let ejeX = generaNumero(minX, maxX);
  ratonera.style.left = `${ejeX}px`;
  return [ejeY, ejeX];
}
*/

//Ubica ratoneras según coordenadas--------------------------------------------

function ubicaRatonera(id, ejeY, ejeX) {
  let ratonera = document.getElementById(id);
  ratonera.style.bottom = `${ejeY}px`;
  ratonera.style.left = `${ejeX}px`;
  return [ejeY, ejeX];
}


//Funciones del juego-----------------------------------------------------------

function mueveRaton(event){

  let tecla = event.code;

  switch (tecla) {

    case 'ArrowUp':
    if (posicionEjeVertical < 540) {
      posicionEjeVertical += 20;
      raton.src = "./Images/mouseUp.png"
      raton.style.bottom = posicionEjeVertical + "px";
    }
    break;

    case 'ArrowDown':
    if (posicionEjeVertical > 0) {
      posicionEjeVertical -= 20;
      raton.src = "./Images/mouseDown.png"
      raton.style.bottom = posicionEjeVertical + "px";
    }
    break;

    case 'ArrowRight':
    if (posicionEjeHorizontal < 1250) {
      posicionEjeHorizontal += 20;
      raton.src = "./Images/mouseRight.png"
      raton.style.left = posicionEjeHorizontal + "px";
    }
    break;

    case 'ArrowLeft':
    if (posicionEjeHorizontal > 10) {
      posicionEjeHorizontal -= 20;
      raton.src = "./Images/mouseLeft.png"
      raton.style.left = posicionEjeHorizontal + "px";
    }
  }
  indagaDesenlace();
}



function indagaDesenlace() {

  if (posicionEjeVertical >= 350 && posicionEjeVertical <= 550 && posicionEjeHorizontal >= 1000
      && posicionEjeHorizontal <= 1200) {
        ganar();
  }
  if (posicionEjeVertical >= (posicionRatoneraUno[0] - 100) && posicionEjeVertical <= (posicionRatoneraUno[0] + 100)
  && posicionEjeHorizontal >= (posicionRatoneraUno[1] - 100) && posicionEjeHorizontal <= (posicionRatoneraUno[1] + 100)) {
        perder('ratonera1');
  }
  if (posicionEjeVertical >= (posicionRatoneraDos[0] - 100) && posicionEjeVertical <= (posicionRatoneraDos[0] + 100)
  && posicionEjeHorizontal >= (posicionRatoneraDos[1] - 100) && posicionEjeHorizontal <= (posicionRatoneraDos[1] + 100)) {
        perder('ratonera2');
  }
  if (posicionEjeVertical >= (posicionRatoneraTres[0] - 100) && posicionEjeVertical <= (posicionRatoneraTres[0] + 100)
  && posicionEjeHorizontal >= (posicionRatoneraTres[1] - 100) && posicionEjeHorizontal <= (posicionRatoneraTres[1] + 100)) {
        perder('ratonera3');
  }
  if (posicionEjeVertical >= (posicionRatoneraCuatro[0] - 100) && posicionEjeVertical <= (posicionRatoneraCuatro[0] + 100)
  && posicionEjeHorizontal >= (posicionRatoneraCuatro[1] - 100) && posicionEjeHorizontal <= (posicionRatoneraCuatro[1] + 100)) {
        perder('ratonera4');
  }
  if (nivel >= 2 && posicionEjeVertical >= (posicionRatoneraCinco[0] - 100) && posicionEjeVertical <= (posicionRatoneraCinco[0] + 100)
  && posicionEjeHorizontal >= (posicionRatoneraCinco[1] - 100) && posicionEjeHorizontal <= (posicionRatoneraCinco[1] + 100)) {
        perder('ratonera5');
  }
  if (nivel >= 3 && posicionEjeVertical >= (posicionRatoneraSeis[0] - 100) && posicionEjeVertical <= (posicionRatoneraSeis[0] + 100)
  && posicionEjeHorizontal >= (posicionRatoneraSeis[1] - 100) && posicionEjeHorizontal <= (posicionRatoneraSeis[1] + 100)) {
        perder('ratonera6');
  }
  if (nivel >= 4 && posicionEjeVertical >= (posicionRatoneraSiete[0] - 100) && posicionEjeVertical <= (posicionRatoneraSiete[0] + 100)
  && posicionEjeHorizontal >= (posicionRatoneraSiete[1] - 100) && posicionEjeHorizontal <= (posicionRatoneraSiete[1] + 100)) {
        perder('ratonera7');
  }
  if (nivel >= 5 && posicionEjeVertical >= (posicionRatoneraOcho[0] - 100) && posicionEjeVertical <= (posicionRatoneraOcho[0] + 100)
  && posicionEjeHorizontal >= (posicionRatoneraOcho[1] - 100) && posicionEjeHorizontal <= (posicionRatoneraOcho[1] + 100)) {
        perder('ratonera8');
  }
}


function ganar(){
  sonido.src = "./Sounds/mastica.mp3";
  document.removeEventListener('keydown', mueveRaton);
  comeQueso();

  setTimeout(function(){
    nivel += 1;
    if(nivel <= 5) {
      despliegaCartelPasoNivel();
      setTimeout(function(){
        proximoNivel();
      }, 2500);
    } else {
      despliegaCartelVictoria();
      mostrarBotones();
    }

  }, 2500);
}


function perder(id){

  sonido.src = "./Sounds/golpe.mp3";
  document.removeEventListener('keydown', mueveRaton);
  let ratonera = document.getElementById(id);
  ratonera.src = "./Images/ratoneraMuerte.png";
  ratonera.style.width = "150px";
  ratonera.style.height = "150px";

  let nodoPadre = raton.parentNode;
  nodoPadre.removeChild(raton);

  setTimeout(function(){
    despliegaCartelDerrota();
    mostrarBotones();
  }, 1000);
}



//Generación de gráficos--------------------------------------------------------

function despliegaPortada() {
  let portada = document.createElement('img');
  portada.class = "cartel";
  portada.id = "portada";
  portada.src = "./Images/portada.png";
  document.body.appendChild(portada);
}


function quitaPortada() {
  document.body.removeChild(portada);
}


function comeQueso() {
  queso.src = "./Images/cheese1.png";

  setTimeout(function(){
    queso.src = "./Images/cheese2.png";
    setTimeout(function(){
      queso.src = "./Images/cheese3.png";
      setTimeout(function(){
        queso.src = "./Images/cheese4.png";
        setTimeout(function(){
          queso.src = "./Images/cheese5.png";
        }, 500);
      }, 500);
    }, 500);
  }, 500);
}


function despliegaCartelPasoNivel() {
  let cartelPasoNivel = document.createElement('img');
  cartelPasoNivel.class = "cartel";
  cartelPasoNivel.id = "pasoNivel";
  cartelPasoNivel.src = "./Images/cierrePasoNivel.png";
  document.body.appendChild(cartelPasoNivel);
}

function quitaCartelPasoNivel() {
  let cartelPasoNivel = document.getElementById('pasoNivel');
  document.body.removeChild(cartelPasoNivel);
}


function despliegaCartelDerrota() {
  let cartelDerrota = document.createElement('img');
  cartelDerrota.class = "cartel";
  cartelDerrota.id = "derrota";
  cartelDerrota.src = "./Images/cierreDerrota.png";
  document.body.appendChild(cartelDerrota);
}


function despliegaCartelVictoria() {
  let cartelVictoria = document.createElement('img');
  cartelVictoria.class = "cartel";
  cartelVictoria.id = "victoria";
  cartelVictoria.src = "./Images/cierreVictoria.png";
  document.body.appendChild(cartelVictoria);
}


function mostrarBotones() {
  let botonJugar = document.createElement('a');
  botonJugar.href = "./index.html";
  botonJugar.innerHTML = '<img src="./Images/volverAJugar.png" id = "botonJugar" />';
  document.body.appendChild(botonJugar);

  let botonSalir = document.createElement('a');
  botonSalir.href = "./Creditos/index.html";
  botonSalir.innerHTML = '<img src="./Images/salir.png" id = "botonSalir" />';
  document.body.appendChild(botonSalir);
}


//Arranque----------------------------------------------------------------------

function arranque() {
  posicionRatoneraUno = ubicaRatonera('ratonera1', 400, 300);
  posicionRatoneraDos = ubicaRatonera('ratonera2', 207, 578);
  posicionRatoneraTres = ubicaRatonera('ratonera3', 345, 453);
  posicionRatoneraCuatro = ubicaRatonera('ratonera4', 324, 987);
  despliegaPortada();
  setTimeout(function(){
    quitaPortada();
    document.addEventListener('keydown', mueveRaton);
  }, 2500);
}


function nivelDos() {
  posicionRatoneraUno = ubicaRatonera('ratonera1', 150, 315);
  posicionRatoneraDos = ubicaRatonera('ratonera2', 325, 730);
  posicionRatoneraTres =  ubicaRatonera('ratonera3', 550, 225);
  posicionRatoneraCuatro = ubicaRatonera('ratonera4', 225, 1150);

  let nuevaRatonera = document.createElement('img');
  nuevaRatonera.src = "./Images/ratonera.png";
  nuevaRatonera.class = "ratonera";
  nuevaRatonera.id = "ratonera5";
  document.body.appendChild(nuevaRatonera);
  posicionRatoneraCinco = ubicaRatonera('ratonera5', 300, 550);
}


function nivelTres() {
  posicionRatoneraUno = ubicaRatonera('ratonera1', 225,550);
  posicionRatoneraDos = ubicaRatonera('ratonera2', 425, 650);
  posicionRatoneraTres =  ubicaRatonera('ratonera3', 123, 730);
  posicionRatoneraCuatro = ubicaRatonera('ratonera4', 300, 1150);
  posicionRatoneraCinco = ubicaRatonera('ratonera5', 550, 950);

  let nuevaRatonera = document.createElement('img');
  nuevaRatonera.src = "./Images/ratonera.png";
  nuevaRatonera.class = "ratonera";
  nuevaRatonera.id = "ratonera6";
  document.body.appendChild(nuevaRatonera);
  posicionRatoneraSeis = ubicaRatonera('ratonera6', 50, 450);
}


function nivelCuatro() {

  posicionRatoneraUno = ubicaRatonera('ratonera1', 300, 315);
  posicionRatoneraDos = ubicaRatonera('ratonera2', 140, 730);
  posicionRatoneraTres =  ubicaRatonera('ratonera3', 415, 530);
  posicionRatoneraCuatro = ubicaRatonera('ratonera4', 370, 650);
  posicionRatoneraCinco = ubicaRatonera('ratonera5', 0, 550);
  posicionRatoneraSeis = ubicaRatonera('ratonera6', 300,1050);

  let nuevaRatonera = document.createElement('img');
  nuevaRatonera.src = "./Images/ratonera.png";
  nuevaRatonera.class = "ratonera";
  nuevaRatonera.id = "ratonera7";
  document.body.appendChild(nuevaRatonera);
  posicionRatoneraSiete = ubicaRatonera('ratonera7', 550, 750);
}

function nivelCinco() {

  posicionRatoneraUno = ubicaRatonera('ratonera1', 250, 315);
  posicionRatoneraDos = ubicaRatonera('ratonera2', 105, 430);
  posicionRatoneraTres =  ubicaRatonera('ratonera3', 400, 600);
  posicionRatoneraCuatro = ubicaRatonera('ratonera4', 70, 650);
  posicionRatoneraCinco = ubicaRatonera('ratonera5', 400, 750);
  posicionRatoneraSeis = ubicaRatonera('ratonera6', 500,900);
  posicionRatoneraSiete = ubicaRatonera('ratonera7', 300, 1150);

  let nuevaRatonera = document.createElement('img');
  nuevaRatonera.src = "./Images/ratonera.png";
  nuevaRatonera.class = "ratonera";
  nuevaRatonera.id = "ratonera8";
  document.body.appendChild(nuevaRatonera);
  posicionRatoneraOcho = ubicaRatonera('ratonera8', 300, 850);
}


function proximoNivel() {

  quitaCartelPasoNivel();
  raton.style.bottom = "80px";
  raton.style.left = "100px";
  posicionEjeVertical = 80;
  posicionEjeHorizontal = 100;
  queso.src = "./Images/cheese.png";
  sonido.src = "./Sounds/musica.mp3";
  document.addEventListener('keydown', mueveRaton);


  switch(nivel) {

    case 2:
    nivelDos();
    break;

    case 3:
    nivelTres();
    break;

    case 4:
    nivelCuatro();
    break;

    case 5:
    nivelCinco();
    break;

    case 6:

  }
}

arranque();
