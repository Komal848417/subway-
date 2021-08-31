var runner,runner_runing,edges;
var pathImg;
var path


function preload(){
  runner_runing = loadAnimation("runner-1.png","runner-1.png");
  pathImg=loadImage("path.png");


}

function setup(){
  createCanvas(400,400);
  runner=createSprite(20,20,400,400);
  path=createSprite(200,200,450,450)
  path.addImage(pathImg);
  runner.velocityX=-2;
  path.scale=0.1
  runner.addAnimation("running",runner_runing);
  edges = createEdgeSprites();
  runner.scale = 0.1;
  runner.x = 50
 
}

function draw() {
  background("black");
  console.log(runner.x);
  if(path.x < 0){
    path.y=path.width/2;
    }
    runner.velocityY = runner.velocityY + 0.5;
    runner.collide(runner)
    drawSprites();
}
