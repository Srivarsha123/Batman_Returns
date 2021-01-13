const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var bgImg, umbrella, bat, batimg;
var engine, world, bg;
var drops = [];
var maxDrops=1000, man, manimg;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
    bgImg = loadImage("images/bg.png");
    batimg = loadImage("images/bat.png");
    manimg = loadAnimation("images/Walking Frame/walking_1.png", "images/Walking Frame/walking_2.png", "images/Walking Frame/walking_3.png", "images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png", "images/Walking Frame/walking_6.png", "images/Walking Frame/walking_7.png", "images/Walking Frame/walking_8.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(windowWidth,windowHeight);
    umbrella = new Umbrella(windowWidth/2,windowHeight-displayWidth/5);
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,windowWidth), random(0,windowHeight)));
        }

    }
   man = createSprite(windowWidth/2,windowHeight-displayWidth/7);
   man.addAnimation("man",manimg);
   man.scale = 0.65;

   bg = createSprite(windowWidth/2,windowHeight/2, windowWidth,windowHeight);
   bg.addImage(bgImg);
   bg.velocityX = -5;
   bg.scale = 4.25
    
}

function draw(){
    Engine.update(engine);
    background(0); 
    var rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunder = createSprite(random(windowWidth/2, windowWidth-windowWidth/8), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(1, 2)
    }
    else if(frameCount>=80){
      thunder.destroy();
    }
    if(frameCount%180 === 0){
         bat = createSprite(windowWidth, random(100,300), 10, 10);
         bat.addImage(batimg);
         bat.scale = 0.25;
         bat.velocityX = -25;
    }

    if (bg.x < 0){
      bg.x = bg.width;
    }
    bg.depth = 0;
    drawSprites();
    umbrella.display();
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].position()
        
    }

}   