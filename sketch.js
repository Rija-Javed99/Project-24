const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    
    //create given particles
    
    
 
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

  //display given particles
    
    
}
