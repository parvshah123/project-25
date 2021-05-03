const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject = new Ground(600,590,1200,20);
	dustbinObj = new Dustbin(1000,570);
	paper = new Paper(130,180,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paper.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paper.body, paper.body.position, {x : 15, y : -20})
	}
}