const Engine = Matter.Engine;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const World = Matter.World;

var lightning;
var lightningANM;
var rain = [];
var umbrella;



function preload(){
  lightningANM = loadAnimation("1.png","2.png","3.png","4.png");  
  walkingANM = loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png","walking_4.png","walking_3.png","walking_2.png","walking_1.png");
}

function setup(){
  createCanvas(displayWidth - 10,displayHeight - 100);  

engine = Engine.create();
world = engine.world;    

 
lightning = createSprite(displayWidth/2,displayHeight/2 - 300);    
lightning.addAnimation("moving",lightningANM); 
lightning.scale = 0.5;
man = createSprite(displayWidth/2,displayHeight/2 + displayHeight/5);
man.addAnimation("moving",walkingANM);
man.scale = 0.3;


 
Engine.run(engine);
}

function draw(){
background(0);
Engine.update(engine);
drawSprites();   

if(frameCount % 10 === 0){
rain.push(new droplet(random(displayWidth/2 + 500,displayWidth/2 - 500),0));
}

console.log(displayWidth,displayHeight);

for(var n = 0;n < rain.length;n++){
rain[n].display();
rain[n].reposition();
}

umbrella = new Umbrella();



}