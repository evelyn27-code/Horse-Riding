var PLAY = 1;
var END = 0;
var gameState = 1;

var racetrack;
var racetrackImage;
var horse;
var horseImage;
var hurdles,hurdlegroup;
var hurdlesImage;
var ground;
var gameover,gameoverImage;
var tryagain,tryagainImage;
var water;
var water1;
var water2;
var bar,barImage;
var score = 0;
function preload(){

 racetrackImage = loadImage("park.jpg"); 
 horseImage = loadImage("horse rider3.jpg");
  hurdleImage = loadImage("hurdle2.png");
   gameoverImage = loadImage("gameover2.jpg");               
   //tryagainImage =  loadImage("try again.gif"); 
  barImage = loadImage("jump.jpg")
  //water1= loadImage("water.jpg");
  //water2= loadImage("water2.jpg");
  water1= loadImage("water.png");
  water2= loadImage("puddle water.jpg");
}



function setup() {
  createCanvas(displayWidth,displayHeight)
  
ground= createSprite(camera.position.x-400,680,400,5);
//ground.shapeColor = "green";


 racetrack= createSprite(displayWidth/2,displayHeight/2+100,400,400);
racetrack.addImage(racetrackImage);
racetrack.scale = 2;
// racetrack.velocityX = -2;
  
  
 horse = createSprite(camera.position.x-600,640,20,20);
horse.addImage(horseImage);
horse.scale = 01;
 
hurdlegroup = new Group()
 watergroup = new Group()
  bargroup = new Group()
   
}


function draw() {
 background(200)  
 horse.x = camera.position.x-600;
 ground.x = camera.position.x-600
 score = score + Math.round(getFrameRate()/60);
 if(camera.position.x = camera.position.x+10)
  
  if(gameState === PLAY){
    
   if(keyDown("space")&& horse.y >  563){
 horse.velocityY = -20;
 

     
   }
    
 console.log(horse.y);
   
     if (racetrack.x <camera.position.x-300 ){
      racetrack.x =camera.position.x;
    }
    
  
  spawnHurdles()
  spawntriplebar()  
   
  spawnwater()    
    if(hurdlegroup.isTouching(horse)){
  gameState = END; 
 }
 if(bargroup.isTouching(horse)){
  gameState = END; 
 }
  if(watergroup.isTouching(horse)){
  gameState = END; 
 }  
   }  
    
  
  
 
  horse.velocityY =  horse.velocityY + 0.8 
 horse.collide(ground);

  

  if(gameState === END){
   score = 0;
   camera.position.x = 0;
     //if(keyDown("R")){
  //  gameState = PLAY;
     //  score = 0;
 // } 
   
    
    
  gameover= createSprite(camera.position.x,displayHeight/2,400,400);
gameover.addImage(gameoverImage);
gameover.scale = 2.4;
 gameover.depth = horse.depth+1;
 gameover.depth = racetrack.depth+1;
  
//tryagain = createSprite(40,389,400,400);
//tryagain.addImage(tryagainImage);
//tryagain.scale = 0.1;
// tryagain.depth = gameover.depth+1;   
    
    
   
 // hurdles.velocityX = 0;
 // racetrack.velocityX = 0; 
  //  bargroup.velocityX = 0;
   // watergroup.velocityX = 0;
  }
     
drawSprites()
  
  stroke("black");
   textSize(20)
   fill("black") 
  
  text("Space = Jump",camera.position.x-680,190)
    text("Score: "+ score,camera.position.x-500,190);
   textSize(17)
 
}

function spawnHurdles(){
if(frameCount % 170 === 0) {  
  
hurdles = createSprite(camera.position.x+600,640,20,20);
hurdles.addImage(hurdleImage);
hurdles.scale = 0.25; 
hurdles.depth = racetrack.depth+1;
 //hurdles.velocityX = -5; 
  
   hurdlegroup.add(hurdles)
  hurdles.lifetime = 1200;
} 
 
}
function spawnwater(){
if(frameCount % 480 === 0) {  
  
water = createSprite(camera.position.x+600,640,20,20);

water.scale = 0.3; 
water.depth = racetrack.depth+1;
//water.velocityX = -5; 
  water.addImage(water1);
  
// var rand = Math.round(random(1,6)); 
 //switch(rand) {
   // case 1: water.addImage(water1);
        //      break;
      //case 2: water.addImage(water2);
         //     break;
     
     // default: break;
   // } 
  watergroup.add(water)
 water.lifetime = 1200;
} 
 
}
function spawntriplebar(){
if(frameCount % 810 === 0) {  
  
bar = createSprite(camera.position.x+600,640,20,20);
bar.addImage(barImage);
bar.scale = 0.23; 
bar.depth = racetrack.depth+1;
//bar.velocityX = -7;
  
  
 var rand = Math.round(random(1,6));  
  
bar.setCollider("rectangle",0,0,bar.width,bar.height);  
   bargroup.add(bar)
 bar.lifetime = 1200;
} 
 
}