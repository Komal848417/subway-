var runner,runner_runing,edges;
var pathimage;
var path


function preload(){
  runner_runing = loadAnimation("runner-1.png","runner-1.png");
  runnerImg=loadImage("path.png");


}

function setup(){
  createCanvas(400,400);
  runner=createSprite(100,100);
  runner=createSprite(200,200,30,30);
  path.addImage(pathImg);
  path.velocityX=-2;
  path.scale=0.3
  runner.addAnimation("running",runner_runing);
  edges = createEdgeSprites();
  runner.scale = 0.5;
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
