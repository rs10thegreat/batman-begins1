const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var boy;
var lightning1,lightning2,lightning3,lightning4;

var drops =[];
var maxDrops=100;

function preload(){
    lightning1 = loadImage("1.png");

    lightning2 = loadImage("2.png");

    lightning3 = loadImage("3.png");

    lightning4 = loadImage("4.png");
}

function setup(){
createCanvas(400,600);

engine = Engine.create();
world = engine.world;

boy = new Umbrella(200,470); 

for(var i = 0;i<maxDrops;i++){
    drops.push(new Drop(random(0,400),random(0,400)));
}
}

function draw(){
    background(0);
    
    Engine.update(engine);

    for(var i = 0;i<drops.length;i++){
        drops[i].display();
        drops[i].update();
    }

    boy.display();

    spawnLightning();

    drawSprites();
}   

function spawnLightning(){
    if(frameCount%60===0){
        var lightning = createSprite(200,100,20,20);
        lightning.scale = 0.5

        var rand = Math.round(random(1,4));
        switch(rand){
            case 1:lightning.addImage(lightning1);
            break;
            case 2:lightning.addImage(lightning2);
            break;
            case 3:lightning.addImage(lightning3);
            break;
            case 4:lightning.addImage(lightning4);
            default:break;
        }
        lightning.lifetime = 20;
    }
}
