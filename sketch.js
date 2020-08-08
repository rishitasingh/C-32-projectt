const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;

function setup() {

  var canvas = createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;


  ground = new Ground (390, 250, 200, 10 );

  ground2 = new Ground (400, 390, 800, 20);

  rock = new Rock (200, 250, 50, 50);

  box8 = new Box(330, 235, 30, 40);
  box9 = new Box(360, 235, 30, 40);
  box10= new Box(390, 235, 30, 40);
  box11= new Box(420, 235, 30, 40);
  box12= new Box(450, 235, 30, 40);

  box13= new Box(360, 195, 30, 40);
  box14= new Box(390, 195, 30, 40);
  box15= new Box(420, 195, 30, 40);

  box16= new Box(390, 155, 30, 40 );

  slingshot = new Slingshot(rock.body,{x:100, y: 200});
  
}

function draw() {
  background(0); 
  
  Engine.update(engine);

  text("Score: " +score,600,40);

  ground.display();
  ground2.display();
  rock.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  slingshot.display();

  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();


  drawSprites();
}

function mouseReleased(){
  slingshot.fly();
}

function mouseDragged(){
  Matter.Body.setPosition(rock.body, {x: mouseX, y: mouseY});
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(rock.body);
  }
}