function gaming(){
  draw();
  ia.goToObj(ball);
  //Se tocar no chao, evita que a ia passe do canvas
  if(ia.touches().touchBottom){
    ia.posY = (canvas.height - ia.height);
  }
  if(ia.touches().touchTop){
    ia.posY = 0;
  }

  if(ball.hitObject(pl) || ball.hitObject(ia)){
    ball.velocityX *= -1;
  }
  if(ball.hitBorders().hitLeft){
    ball.resetPos(canvas.width/2,canvas.height/2);
  }
}

//Desenha tudo
function draw(){
  //Area do canvas colorizado
  canvasContext.fillStyle = 'black';
  canvasContext.fillRect(0,0,canvas.width, canvas.height);
  ball.drawBall();
  ball.move();
  // Soma os scores
  if(ball.hitBorders().hitLeft){
    ia.score += 1;
    message = "IA Ganhou!";
    ball.posY = 0
    ball.posX = 0
    //isGaming = false;
  }
  else if (ball.hitBorders().hitRight){
    pl.score += 1;
    message = "Você Ganhou!";
    ball.posY = 0
    ball.posX = 0
    //isGaming = false;
  }
  //Desenha os objetos
  pl.drawPlayer();
  ia.drawPlayer();
  //Mostrar os Scores
  canvasContext.fillStyle = "white";
  canvasContext.fillText( pl.name + " :" + pl.score,10,10);
  canvasContext.fillText( ia.name + " :" + ia.score,canvas.width - 30,10);
}
