
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Paper1,ground1,base,left,right
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
Paper1=new paper(200,170,20,30)
ground1=new Ground(400,500,800,20)
base=new Box (500,480,100,20)
left=new Box(440,430,20,100);
right=new Box(560,430,20,100);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  drawSprites();
 Paper1.display();
 ground1.display();
 base.display();
 left.display();
 right.display();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:20,y:-20})
	}
}


