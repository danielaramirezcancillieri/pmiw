//https://youtu.be/W5zG571iRAw
//para reiniciar, apretar cualquier tecla
function preload() {
  referencia = loadImage("Assets/flech.jpg");
}

let referencia;
let posX;
let mov;
let fondo;
let r;
let b;

function setup() {
createCanvas (800, 400);
r = color(255, 0, 0);
b = color(0, 0, 255);
fondo = color (163, 9, 211);
mov=0;
posX=420
}
function draw() {
  background (fondo);
  flechas1(420);
  flechas2(390);
  flechas3(408);
  flechas4(390);
  image(referencia, 0, 0);
  
  if (mouseX > 400 && mouseY< 53&&mouseX<800) {
    background (fondo);
    flechas1 (posX-mov);
    mov++;
    flechas2(390);
    flechas3(408);
    flechas4(390);
    image(referencia, 0, 0);}
    
    else if (mouseX>400 && mouseY>53&&mouseY<187&&mouseX<800) {
    background (fondo);
    flechas1 (420);
    flechas2(mov);
    mov++;
    flechas3(408);
    flechas4(390);
    image(referencia, 0, 0);}
    
  if (mov>400) {mov=0;}
  
   else if (mouseX>400&& mouseY>187&&mouseY<309&&mouseX<800) {
    background (fondo);
    flechas1 (420);
    flechas2(390);
    flechas3(posX-mov);
    mov++;
    flechas4(390);
    image(referencia, 0, 0);} 
  
  else if (mouseX>400&&mouseY>309&&mouseY<400&&mouseX<800) {
    background (fondo);
    flechas1 (420);
    flechas2(390);
    flechas3(408);
    flechas4(mov);
    mov++;
    image(referencia, 0, 0);}
  
if (mov>400) {
    mov= 0;}
    
if (mouseIsPressed) {
    fondo = cambiodefondo(r, b); }
  
if (keyIsPressed) {
    fondo = color (163, 9, 211);}
}
