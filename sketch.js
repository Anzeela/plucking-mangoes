
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constrait=Matter.Constrait
var stones

function preload()
{
	treeimg=loadImage("images/tree.png")
	boyimg=loadImage("images/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground()
	stones=new Stone(100,460,23)
	mango1=new Mango(855,325,35)
	mango2=new Mango(600,290,35)
	mango3=new Mango(670,260,35)
	mango4=new Mango(700,200,36)
	mango5=new Mango(650,547,35)
	mango6=new Mango(645,312,37)
	mango7=new Mango(805,325,35)
	mango8=new Mango(855,305,34)
	mango9=new Mango(755,525,35)
	mango10=new Mango(666,303,37)


	tree=createSprite(775,360)
	tree.addImage(treeimg)
	tree.scale=0.42

	boy=createSprite(165,550)
	boy.addImage(boyimg)
	boy.scale=0.125

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill ("blue")
  textSize(18)

  detectCollision(stones,mango1)
  detectCollision(stones,mango2)
  detectCollision(stones,mango3)
  detectCollision(stones,mango4)
  detectCollision(stones,mango5)
  detectCollision(stones,mango6)
  detectCollision(stones,mango7)
  detectCollision(stones,mango8)
  detectCollision(stones,mango9)
  detectCollision(stones,mango10)

  drawSprites();
  stones.display()
  ground.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()

}
function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY})
}

function mouseRealeased(){
	attach.fly()
}

function detectCollision(lstones,lmango){
  if(lstones.body.position.x- lmango.body.position.x <lmango.diameter + lstones.diameter
  &&lmango.body.position.x - lstones.body.position.x <lmango.diameter + lstones.diameter
  &&lstones.body.position.y - lmango.body.position.y <lmango.diameter + lstones.diameter
  &&lmango.body.position.x - lstones.body.position.x <lmango.diameter + lstones.diameter ){
    Matter.Body.setStatic(lmango.body,false)
  }
 }

 function keyPressed(){
   if(keyCode===32){
     Matter.Body.setPosition(stones.body,{x:100,y:465})
     attach.Launch(stones.body)
   }
 }

  
  



