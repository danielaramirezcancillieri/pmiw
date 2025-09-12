function flechas1(i){
fill (207, 255, 0);
stroke (207, 255, 0);
for (;i< 4000;i +=80){
rect (i-12, 30, 40, 15);
triangle (i, 20, i, 55, i-30,36);}}

function flechas2 (i){
for (; i< 4000;i +=80){
for (let b= 112; b<200; b+=60){
rect (i, b-10, 40, 15);
triangle (i+28, b-20, i+28, b+15, i+58,b-3);}}}

function flechas3 (i){
for (; i< 4000;i +=80){
for (let b= 235; b<300; b+=60){
rect (i, b-10, 40, 15);
triangle (i+12, b-20, i+12, b+15, i-18,b-3);}}}

function flechas4 (i){
for (; i< 8000;i +=80){
rect (i, 355, 40, 15);
triangle (i+28, 382, i+28, 339, i+58,362);}}

function cambiodefondo(c1, c2) {
let fondorandom = lerpColor(c1, c2, random(1));
return fondorandom;}
