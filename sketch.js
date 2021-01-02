
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
}

function setup() 
{
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,700,2000,50)
	//Dustbin1= new Dustbin(600,680,200,20);
	//Dustbin2=new Dustbin(500,615,20,150);
	Dustbin3=new Dustbin(1000,400,250,300);
	paper= new Paper (100,400,70);

	
	Engine.run(engine); 

	

}
function draw() 
{
  rectMode(CENTER);
  background("white");
  
 


 ground.display();
 //Dustbin1.display();
 //Dustbin2.display();
 Dustbin3.display();
 paper.display();
}

function keyPressed()
{
	if(keyCode === UP_ARROW) 
	{
   Matter.Body.applyForce(paper.body,paper.body.position,{x:500,y:-500});

	}

	if(keyCode === DOWN_ARROW) 
	{
   Matter.Body.applyForce(paper.body,paper.body.position,{x:-500,y:500});

	}
}

