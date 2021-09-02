var runner,runner_runing,edges;
var pathImg;
var path


function preload(){
  runner_runing = loadAnimation("runner-1.png","runner-1.png");
  pathImg=loadImage("path.png");


}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200,450,450)
  runner=createSprite(180,340,30,30);
  path.addImage(pathImg);
  path.scale=1.2
  runner.addAnimation("running",runner_runing);
  edges = createEdgeSprites();
  runner.scale = 0.08;
  runner.x = 50
 
}

function draw() {
  background("black");
  path.velocityY=4
  runner.x=World.mouseX
  console.log(runner.x);
  if(path.y > 400){
    path.y=height/2;
    }
    runner.collide(edges)
    drawSprites();
}
