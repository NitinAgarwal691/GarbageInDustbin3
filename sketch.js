const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground1,dustbin1,dustbin2,dustbin3;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    
  
	ball=new Paper(200,450,15);
	ground1=new Ground();
	
    dustbin1=new Dustbin(1300,665,170,20);
    dustbin2=new Dustbin(1205,615,20,120);
    dustbin3=new Dustbin(1395,615,20,120);

}


function draw() {
  background("grey");
  Engine.update(engine);
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ball.display();
}

function keyPressed () {
if(keyCode===UP_ARROW) {
Matter.Body.applyForce(ball.body,ball.body.position,{x:51,y:-51});
}
}

