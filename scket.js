//posição inicial
var x =100;
var y = 300;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //personagem
  circle(x,y,50);
  
  
  //subindo
  
  //se o teclado estiver pressionado e a posição em y do personagem for maior de 100
  if(keyIsPressed && y>100){
    //se a tecla seta pra cima for pressionada
    if (keyCode === UP_ARROW) {
      //subindo
        y = y - 10; //diminue y de 10 em 10
    }
  }
  
  //descendo
  
  //se a posição do personagem for menor que 100 e o teclado não estiver pressionado
  if(y<300 && !keyIsPressed){
    y = y + 5; //aumenta y de 1 em 1
  }
  
    
}
