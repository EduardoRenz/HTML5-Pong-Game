var ball = function(startX, startY){
  this.posX = startX;
  this.posY = startY;
  this.velocityX = 10;
  this.velocityY = 0;
  this.width = 10;
  this.height = 10;
  this.color = 'blue';
  this.drawBall = function(){
    canvasContext.fillStyle = this.color;
    canvasContext.beginPath();
    canvasContext.arc(this.posX, this.posY,this.width, 0,Math.PI*2,true);
    canvasContext.fill();
    //canvasContext.fillRect(this.posX, this.posY,this.width, this.height);
  };

  // Faz o movimento da bola
  this.move = function(){
    this.posX += this.velocityX;
    this.posY += this.velocityY;
    if(this.hitBorders().hitLeft || this.hitBorders().hitRight ){
      this.velocityX *= -1;
    }
    if(this.hitBorders().hitTop || this.hitBorders().HitBottom){
      this.velocityY *= -1;
    }
  }
  // Colidiu com as paredes?
  this.hitBorders = function(){
    var hitLeft = (this.posX <= (0 )) ? true : false;
    var hitRight = (this.posX >= (canvas.width - this.width )) ? true : false;
    var HitBottom = (this.posY >= (canvas.height - this.height )) ? true : false;
    var hitTop = (this.posY <= 0 ) ? true : false;
    return{
      hitLeft,
      hitRight,
      HitBottom,
      hitTop
    };
  }
  this.hitObject = function(obj){
    var hit = (((this.posX == obj.posX + obj.width) || (this.posX == obj.posX )) && ((this.posY >= obj.posY) && (this.posY <= obj.posY + obj.height) ))  ? true : false;
    if(hit){
      console.log('Colidiu com ' + obj.name);
            ball.changeTrajectory(obj);
    }
    return hit;
  }

  //Mudar a trajetoria da bola
  this.changeTrajectory = function(obj){
    var objCenter = obj.posY + (obj.height /2);
    var hitDelta = 0;
    if(this.posY > objCenter){
      console.log('MArio que o centro');
      hitDelta = this.posY - objCenter  ;
    }
    else if(this.posY < objCenter){
      console.log('Menor que o centro');
      hitDelta =  this.posY - objCenter ;
    }
    else {
      this.velocityY = 0;
    }
    this.velocityY = hitDelta/2;
    console.log( "Centro o Objeto:" + objCenter + " Posicao atual da bola:" + this.posY + " Hit Delta:" + hitDelta);
  }

  //Redefine posicao da bola
  this.resetPos = function (startX,startY) {
    this.posX = startX;
    this.posY = startY;
  }
}
