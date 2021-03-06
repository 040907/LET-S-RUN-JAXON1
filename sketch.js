var path,boy,left,right,pathimg,boyimg,i;



function preload(){
  //pre-load images
  pathimg=loadImage("path.png");
  boyimg=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathimg);
  path.velocityY=4;
  path.scale=1.2;

  boy=createSprite(180,340,30,30);
  boy.scale=0.08;
  boy.addAnimation("Running",boyimg);

  left=createSprite(0,0,100,800);
  left.visible=false;
  right=createSprite(410,0,100,800);
  right.visible=false;
}

function draw() {
  background(0);
  path.velocityY=4;
  boy.x=World.mouseX;
  edges=createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(left);
  boy.collide(right);
  if(path.y>400){
    path.y=height/2;
  }
  drawSprites();
}
