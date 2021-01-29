var backG , backGImg;
var cat, catFImg, catLImg, catAni;
var rat, ratFImg, ratLImg, ratAni;

function preload() {
    //load the images here
backGImg = loadImage("images/garden.png");

catFImg  = loadAnimation("images/cat1.png");
catLImg  = loadAnimation("images/cat4.png");
catAni   = loadAnimation("images/cat2.png","images/cat3.png");

ratFImg  = loadAnimation("images/mouse1.png");
ratLImg  = loadAnimation("images/mouse4.png");
ratAni   = loadAnimation("images/mouse2.png", "images/mouse4.png" )

}

function setup(){
    createCanvas(900,657);
    //create tom and jerry sprites here
    cat = createSprite(700, 530);
    cat.addAnimation("catFimg",catFImg);
    cat.scale = 0.15;

    rat = createSprite(200, 535);
    rat.addAnimation("ratFimg",ratFImg);
    rat.scale = 0.11;
}

function draw() {

    background(backGImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - rat.x < (cat.width - rat.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catLimg", catLImg);
        cat.changeAnimation("catLimg");

        rat.addAnimation("ratLimg", ratLImg);
        rat.changeAnimation("ratLimg");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
     if(keyCode === LEFT_ARROW){
         cat.velocityX = -5;
         cat.addAnimation("catRunning",catAni);
         cat.changeAnimation("catRunning");
         cat.scale=.19;

         rat.addAnimation("ratRunning",ratAni);
         rat.changeAnimation("ratRunning");
     }

}
