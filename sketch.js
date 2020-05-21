var gameState = "start"
var name = ""
var player;
var shop1;
var form;
var form2;
var ground;
var player;
var wall2;
var bot;

function setup(){
  canvas = createCanvas(displayWidth-100,displayHeight-100)
  ground = createSprite(displayWidth/2-100,displayHeight-130,displayWidth*5,20);
  player = createSprite(displayWidth/4-100,displayHeight-160,35,35);
 // console.log(displayWidth);
//  console.log(displayHeight);
  ground.visible = false;
  player.visible = false;
  form = new Form();
  form.display();
  wallgroup = new Group();
  bulletsgroup= new Group();
  bullets2group  = new Group();

  
}


 function draw(){
   background(255);
  ground.display();
  if(ground.x < displayWidth/2){
    ground.x = displayWidth/2-100
  }
  ground.velocityX = -6;
 
 player.velocityY = player.velocityY + 0.8;
 player.collide(ground);
 player.debug = true;
 player.collide(wallgroup)
 if(gameState === "play"){
  spwanWall();
  spwanbot();
 // console.log("cdcyid87hc78dbcuygf7e6fg")
  if(keyIsDown(UP_ARROW)){
    player.velocityY = -12
 }

 if(bulletsgroup.isTouching(player)){
  text("GAME OVER",displayWidth/2,displayHeight/2)
 gameState =  "end"

 }
 if(bullets2group.isTouching(player)){
  text("GAME OVER",displayWidth/2,displayHeight/2)
  gameState =  "end"
   }
 if(player.x < 0){
 text("GAME OVER",displayWidth/2,displayHeight/2)
 } 
 }
 if(gameState =  "end"){
  wall.velocityX = 0;
  ground.velocityX = 0;
  //bot.velocityX = 0;
  bulletsgroup.setVelocityXEach(0);
  bullets2group.setVelocityXEach(0);
  player.velocityY = 0;
 }
  


 drawSprites();
 }

function spwanWall(){
  console.log("ididnfiNDOJJCPNDC")
    if(frameCount%200 === 0  ){
      var wall = createSprite(displayWidth + 50 ,displayHeight-170,10,80);
    wall.velocityX = -6;
    wall.lifetime = 1000;
    wallgroup.add(wall);
    
    }
  }

function spwanbot(){
  if(frameCount%190 === 0  ){
    bot = createSprite(displayWidth + 50 ,displayHeight-170,50,50);
    bot.velocityX = -6;
    bot.lifetime = 1000;

    var bullet = createSprite(displayWidth + 30 ,displayHeight-170,10,10);
    bullet.velocityX = -6.5;
    bullet.lifetime = 1000;
    bulletsgroup.add(bullet)

    var bullet2 = createSprite(displayWidth + 10 ,displayHeight-170,10,10);
    bullet2.velocityX = -7;
    bullet2.lifetime = 1000;
    bullets2group.add(bullet2)
}

}
