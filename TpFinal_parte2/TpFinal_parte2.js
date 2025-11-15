//Oriana Moreira y Daniela Ramirez Cancillieri
//https://youtu.be/-XvP4fRR_A0
let imagenes = [];
let musiquita, sonidoDisparo, ganaste, perdiste;
let menu, juego;
function preload() {
  musiquita= loadSound ('Assets/musiquita.mp3');
  sonidoDisparo=loadSound ('Assets/disparo.mp3');
  ganaste=loadSound ('Assets/ganaste.mp3');
  perdiste=loadSound ('Assets/perdiste.mp3');
  for (let i = 1; i <= 14; i++) {
    imagenes[i - 1] = loadImage("Assets/" + i + ".png");}}

function setup() {
  createCanvas(640, 480);
  juego= new Juego();
  menu = new Menu();}

function draw() {
  juego.dibujo();}

function mousePressed() {
  juego.mouse();}

function keyPressed() {
  juego.key();}
