
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
  world = engine.world;
  
  paper1 = new paper(200,575);
var dsideright = createSprite(1025,550,20,70);
var dsidecenter = createSprite(955,575,120,20);
var dsideleft = createSprite(885,550,20,70);



	//Create the Bodies Here.
 
 ground1 = new ground(600,595,1200,20);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
 
 paper1.display();
 ground1.display();
 drawSprites();
}

function keyPressed() {
 if(keyCode === UP_ARROW) {
   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-15});
 }
}



