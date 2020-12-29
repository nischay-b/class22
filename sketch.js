const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var ball
var ferrari_engine,rarthe,ground
function setup() {
  createCanvas(400,400);
  ferrari_engine=Engine.create()
  rarthe=ferrari_engine.world

  var tamato={
    isStatic: true
  }
ground=Bodies.rectangle(200,390,400,50,tamato)
World.add(rarthe,ground)
console.log(ground.position)

var germansheperd={
  restitution:1
}
ball=Bodies.circle(200,50,30,germansheperd)

World.add(rarthe,ball) 
}

function draw() {
  background("red");  
  Engine.update(ferrari_engine)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,50)
  }
  