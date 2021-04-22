const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer , plane;
var rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
   
    goat1 = new Goat(240 , 550 , 50 , 80);
    goat2 = new Goat(1000 , 550 , 40 , 20);
 
   // rubber = new Rubber(530 , 550 , 10 , 10);

    copper = new Copper(550 , 550 , 20 , 50);

    chromium = new Chromium(780 , 550 , 60 , 60);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    goat1.display();
    goat2.display();
    copper.display();
    chromium.display();
   // rubber.display();
    

    
 
}