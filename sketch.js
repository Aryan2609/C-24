const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3=  new Box(700,240,70,70);
    box4=  new Box(920,240,70,70);
    ground = new Ground(600,height,1200,20);
    Pig1 =  new Pig(810,350);
    Pig2 =  new Pig(810,220);
    Bird =  new Bird(100,100);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    Pig1.display();
    Pig2.display();
    Bird.display();
}