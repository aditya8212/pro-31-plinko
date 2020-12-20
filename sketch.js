const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var gru;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight =300;

function preload(){
  bace = loadImage("iba.jpg")

}

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  gru = new Ground(240,795,480,10);
  
  for( var k = 0; k <=6; k = k+1){
        divisions[k]=new DIVISION(80*k,700,10,divisionHeight)

    }

    for(var i = 50;i<=440;i=i+50 ){
      plinkos.push(new PLINKO(i,200))
    }

    for(var i = 75;i<=440;i=i+50 ){
      plinkos.push(new PLINKO(i,250))
    }

    for(var i = 50;i<=440;i=i+50 ){
      plinkos.push(new PLINKO(i,300))
    }

    for(var i = 75;i<=440;i=i+50 ){
      plinkos.push(new PLINKO(i,350))
    }


    
}

function draw() {
  background(bace);
  Engine.update(engine);

  for(var k = 0; k < divisions.length;k++){

    divisions[k].display();
  }

  for(var g = 0; g < plinkos.length;g++){
    plinkos[g].display();
  }

  if(frameCount%60 === 0){

    particles.push(new PARTICLE(random(210,270),0))

  }

  for(var j = 0; j < particles.length;j++){

    particles[j].display();
  }

  
  gru.display();

}

