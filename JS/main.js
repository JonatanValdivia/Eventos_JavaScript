//variável de escopo global
var area = window.document.getElementById('area');
area.addEventListener('mouseenter', emCima);
area.addEventListener('click', clicar);
area.addEventListener('mouseout', sairDeCima);
area.addEventListener('mousedown', apertando);
area.addEventListener('dblclick', clicarDuasVezes);

//*******para dispositivos de toque*******
area.addEventListener("touchstart", toque, false);
area.addEventListener('touchmove', move, false);

function move(){
  area.style.backgroundColor = 'red';
  area.innerHTML = 'Está se movendo em cima de mim';
}
function toque(){
  area.innerHTML = 'Você clicou em mim! (touch)'
  area.style.backgroundColor = 'pink';
}

function clicarDuasVezes(){
  area.innerHTML = 'Você clicou duas vezes!';
  area.style.backgroundColor = 'blue';
  area.style.color = 'white';
}
function clicar(){
  area.innerHTML = 'Você clicou em mim! (Agora click e segure!)';
  area.style.backgroundColor = 'yellow';
  area.style.color = 'black';
 
}

function emCima(){
  var area = window.document.getElementById('area');
  area.innerHTML = 'Sai de cima de mim!';
  area.style.backgroundColor = 'red';
  area.style.color = 'white';
}

function sairDeCima(){
  var area = window.document.getElementById('area');
  area.innerText = 'Agora dê um click em mim';
  area.style.backgroundColor = 'green';
  
}

function apertando(){
  var area = window.document.getElementById('area');
  area.innerHTML = 'É muita pressão! (Click duas vezes)';
  area.style.backgroundColor = 'black';
  area.style.color = 'white';
}