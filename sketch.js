
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,Paper,d1,d2,d3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground=new Ground(400,680,900,10)
	Paper=new paper(200,590,5)
	d1=new dustbin(555,635,10,60)
	d2=new dustbin(645,635,10,60)
	d3=new dustbin(600,670,100,10)
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  Paper.display();
  d1.display();
  d2.display();
  d3.display();
  drawSprites();
 
}

function keyPressed() {

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(Paper.body,Paper.body.position, {x:3,y:-3})

	}


}

