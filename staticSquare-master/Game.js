class Game {
  constructor(){

  }
    play(){
    background("white");
  // camera.position.x = displayWidth/2;
   //camera.position.y = player.y;
   player = createSprite(200,200);
   player.addImage("PLAYER",playerimg)
   player.scale = 0.4;
   skeleton1= createSprite(900,210);
   skeleton1.addImage("ENEMY",skeleton1img)
   skeleton1.scale = 0.17;
  
  if(keyIsDown(UP_ARROW)){
   player.y -= 10
  }
  if(keyIsDown(DOWN_ARROW)){
    player.y += 10
   }
   if(keyIsDown(RIGHT_ARROW)){
    player.x += 10
    //player.addImage("RUNNING",playerrunning)
   }
   if(keyIsDown(LEFT_ARROW)){
    player.x -= 10
   }

   //if(keyIsDown(RIGHT_ARROW)){
   // player.x -= 2
    //player.changeImage =("ATTACK"){
    //player.changeAnimation("ATTACK",playerattack);
    //};
    //}
   }
  

   //if(player.x === 500 && player.y === 500  ){
   // background(groundimg);
   //}

   background(backgroundimg)
   //image(backgroundimg,0,-displayHeight*1,displayWidth,displayHeight*1)
   drawSprites(){

   }
  }
