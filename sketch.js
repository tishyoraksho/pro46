var bg;
var chicken;
var invisibleGround,corn,corn_img,cornGroup;
var score=0;
function preload()  {
  bg_img= loadImage("assets/bg.jpg");
  bg1_img=loadImage("assets/bg1.jpg");
  chickenimg=loadAnimation("assets/chick1.png","assets/chick2.png","assets/chick3.png");
  corn_img=loadImage("assets/corn.png");


}

function setup() {
  createCanvas(1050,500);
   bg=createSprite(400, 200, 800, 400);
   bg.addImage(bg1_img);

   chicken=createSprite(100,height-100,50,150);
   chicken.addAnimation("running",chickenimg);
   chicken.scale=1.2
  invisibleGround=createSprite(width/2,height-50,width,20);
  cornGroup=new Group();

}

function draw() {
  background("green"); 
  if(keyDown(UP_ARROW)){
    chicken.velocityY=-8
  }
  chicken.velocityY=chicken.velocityY+0.5;
  chicken.collide(invisibleGround)
  chicken.overlap(cornGroup,function(collector,collected){
    collected.remove();
    score=score+5;
  })
  drawSprites();
  spawncorns();
  textSize(20);
  fill('black');
text("Score:"+score,width-100,50)
}
function spawncorns() {
  if(frameCount%60 === 0) {
    corn=createSprite(  width+50,random(100,height-50),50,50);
    corn.addImage(corn_img);
    corn.velocityX=-4;
    corn.scale=0.15;
    cornGroup.add(corn)
  }
}