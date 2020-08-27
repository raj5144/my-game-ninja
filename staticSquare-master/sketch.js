var canvas, backgroundImage;

//var gameState = 0;
//var playerCount;
//var allPlayers;
//var distance = 0;
//var database;

var form, player,skeleton1
var game,playerattack;

var playerimg,backgroundimg,skeleton1img,groundimg,playerrunning;

function preload(){
  playerimg=loadImage("images/PicsArt_08-25-11.41.36.png")
  //playerrunning=loadImage("images/New project 8 [03")
  backgroundimg=loadImage("images/middlewallupdated.png")
  skeleton1img=loadImage("images/PicsArt_08-25-10.15.33.png")
  groundimg=loadImage("images/dungeon-preview_gif-animated.gif")
  playerattack=loadImage("images/ninja_attack.png")
}

function setup(){

  canvas = createCanvas(displayWidth , displayHeight);
  

 // database = firebase.database();
   game = new Game();  
 // game.getState();
 
}


function draw(){

    game.play();

 // if(gameState === 1){
   // clear();
   // game.play();
 // }
}



