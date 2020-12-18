var particles = [];
var divisions = [];
var pinko = [];

var divisionHeight = 300;

for(var i = 0; i<=width, i = i+80;){
  divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
}

for(var j = 40; j<=width; j=j+50){
  pinkos.push(new Pinko(j, 75));
}

for(var j = 15; j<=width-10; j=j+50){
  pinkos.push(new Pinko(j, 175));
}

if(frameCount%90===0){
  particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
}

for(var j=0, j<particles.length; j++){
  particles[j].display;
}
for(var k=0, k <divisions.length; k++){
  divisions[k].display;
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  text("Score : " +score, 750, 40);
  drawSprites();
}