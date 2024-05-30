function setup() {
  createCanvas(800,800);
  pincelada = new pincelada();

}


function draw() {
  pincelada.dibujar();
}

function mousePressed(){
  push();
  colorMode( HSB );
  color unColor = color(int( random(255)) , 255 , 255 );
  pop();
  pincelada.actualizar(mouseX , mouseY, unColor );
}
