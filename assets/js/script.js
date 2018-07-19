var c = document.getElementById('canvas');
var ctx = c.getContext('2d');

//Tête
ctx.beginPath();
ctx.arc(200,100,40,0,Math.PI*2);
ctx.fillStyle = '#976F0F';
ctx.fill();
//oeil gauche
ctx.beginPath();
ctx.arc(180,90,7,0,Math.PI*2);
ctx.fillStyle = '#fff';
ctx.fill();
//oeil droit
ctx.beginPath();
ctx.arc(220,90,7,0,Math.PI*2);
ctx.fillStyle = '#fff';
ctx.fill();
//sourcil gauche
ctx.beginPath();
ctx.moveTo(174,78);
ctx.quadraticCurveTo(180,72,185,78);
ctx.lineWidth="2";
ctx.strokeStyle = '#fff';
ctx.stroke();
//sourcil droit
ctx.beginPath();
ctx.moveTo(214,78);
ctx.quadraticCurveTo(220,72,225,78);
ctx.lineWidth="2";
ctx.strokeStyle = '#fff';
ctx.stroke();
//Bouche haut
ctx.beginPath();
ctx.moveTo(182,110);
ctx.quadraticCurveTo(200,120,220,110);
ctx.lineWidth="2";
ctx.strokeStyle = '#C33F07';
ctx.stroke();
//Bouche bas
ctx.beginPath();
ctx.moveTo(182,110);
ctx.quadraticCurveTo(200,130,220,110);
ctx.lineWidth="2";
ctx.strokeStyle = '#C33F07';
ctx.stroke();
//Les bras
ctx.beginPath();
ctx.moveTo(100,150);
ctx.rect(100,130,200,30);
ctx.fillStyle = '#976F0F';
ctx.fill();
//Le corps et jambes
ctx.beginPath();
ctx.moveTo(155,150);
ctx.rect(160,160,80,170);
ctx.fillStyle = '#976F0F';
ctx.fill();
//Bouton haut
ctx.beginPath();
ctx.arc(200,175,7,0,Math.PI*2);
ctx.fillStyle = '#7A2976';
ctx.fill();
//Bouton bas
ctx.beginPath();
ctx.arc(200,205,7,0,Math.PI*2);
ctx.fillStyle = '#7A2976';
ctx.fill();
//Les jambes
ctx.beginPath();
ctx.moveTo(200,300);
ctx.rect(190,290,20,40);
ctx.fillStyle = '#ffffff';
ctx.fill();
//Coube quadratic jambes
ctx.beginPath();
ctx.moveTo(190,295);
ctx.quadraticCurveTo(189,282,211,289);
ctx.fillStyle = '#FFFFFF';
ctx.fill();
//Pieds gauche
ctx.beginPath();
ctx.moveTo(160,330);
ctx.quadraticCurveTo(175,350,190,330);
ctx.fillStyle = '#976F0F';
ctx.fill();
//Pieds droit
ctx.beginPath();
ctx.moveTo(211,330);
ctx.quadraticCurveTo(225,350,240,330);
ctx.fillStyle = '#976F0F';
ctx.fill();
//Main gauche
ctx.beginPath();
ctx.moveTo(100,160);
ctx.quadraticCurveTo(80,145,100,130);
ctx.fillStyle = '#976F0F';
ctx.fill();
//Main droite
ctx.beginPath();
ctx.moveTo(300,160);
ctx.quadraticCurveTo(320,145,300,130);
ctx.fillStyle = '#976F0F';
ctx.fill();
