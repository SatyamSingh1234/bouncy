var canvas;
var music;
var surface1,surface2,surface3,surface4;
var ball;

function preload(){
   music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);

    //create 4 different surfaces
surface1=createSprite(50,350,90,20);
surface1.shapeColor="blue";
surface2=createSprite(150,350,90,20);
surface2.shapeColor="red";
surface3=createSprite(250,350,90,20);
surface3.shapeColor="yellow";
surface4=createSprite(350,350,90,20);
surface4.shapeColor="green";

ball =createSprite(150,320,30,30);
ball.scale=0.4;
ball.shapeColor="";


    //create box sprite and give velocity


}

function draw() {
    background(rgb(169,169,169));
    
    createEdgeSprites();
  ball.collide(surface1);
ball.collide(surface2);
ball.collide(surface3);
ball.collide(surface4);
    
if(ball.isTouching(surface1)||(ball.isTouching(surface2)
||(ball.isTouching(surface3)||(ball.isTouching(surface4))))){
    ball.shapecolor="blue"
    music.play();
    ball.velocity=5;
}
 ball.velocityX=3;
 ball.velocityY=2;
    //add condition to check if box touching surface and make it box
    drawSprites();
}
