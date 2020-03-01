var player = function(x=10,y=10,w=10,h=110,color='green',name="PLayer"){
  this.name = name;
  this.posX = x;
  this.posY = y;
  this.velocity = 20;
  this.width = w;
  this.height = h;
  this.color = color;
  this.score = 0;
  //Desenha o jogador e aplica suas coordenadas
  this.drawPlayer = function(){
    //O jogador
    canvasContext.fillStyle = this.color;
    canvasContext.fillRect(this.posX, this.posY,this.width, this.height);
  };
  //Calcula se ele bate nas bordas
  this.touches = function(){
    var touchTop = (this.posY  < 0) ? true : false;
    var touchBottom = ((this.posY + this.height) > canvas.height) ? true : false;
    return {
      touchBottom,
      touchTop
    };
  }

  this.goToObj = function(obj){
    var go =   obj.posY >=  this.posY + (this.height/2)   ?  this.velocity : -this.velocity;
    this.posY += go;
  }

}
