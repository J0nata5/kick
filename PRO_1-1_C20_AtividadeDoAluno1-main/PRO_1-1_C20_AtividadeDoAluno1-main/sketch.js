const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;


function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 1.25
  
    ,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }

  

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  baller = Bodies.circle(100,10,20,ball_options);
  balle = Bodies.circle(100,10,20,ball_options);
  bal = Bodies.circle(100,10,20,ball_options);
  ban = Bodies.circle(100,10,20,ball_options);
  ba = Bodies.circle(100,10,20,ball_options);
  b = Bodies.circle(100,10,20,ball_options);
  er = Bodies.circle(100,10,20,ball_options);
  World.add(world,baller);
  World.add(world,balle);
  World.add(world,bal);
  World.add(world,ban);
  World.add(world,ba);
  World.add(world,b);
  World.add(world,er);









  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  wall1 = Bodies.rectangle(0,200,20,400,ground_options);
  World.add(world,wall1);
  wall2 = Bodies.rectangle(400,200,20,400,ground_options);
  World.add(world,wall2);
  wall3 = Bodies.rectangle(200,0,400,20,ground_options);
  World.add(world,wall3);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);
fill("orange")
 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);
 rect(wall1.position.x,wall1.position.y,20,400);
 rect(wall2.position.x,wall2.position.y,20,400);
 rect(wall3.position.x,wall3.position.y,400,20);
 ellipse(baller.position.x,baller.position.y,20);
 ellipse(balle.position.x,balle.position.y,20);
 ellipse(bal.position.x,bal.position.y,20);
 ellipse(ban.position.x,ban.position.y,20);
 ellipse(ba.position.x,ba.position.y,20);
 ellipse(b.position.x,b.position.y,20);
 ellipse(er.position.x,er.position.y,20);
}

