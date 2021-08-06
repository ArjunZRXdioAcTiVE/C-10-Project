// Sprite variables declarations:
var ship1, ship2, ship3;

var shipMoving_1;
var shipMoving_2;

var sea;
var sea_IMG;

function preload(){
// Load Image:
sea_IMG = loadImage ("sea.png");

// ShipAnimation:
shipMoving_1 = loadAnimation ("ship-1.png");
shipMoving_2 = loadAnimation ("ship-2.png");
}

function setup(){
  createCanvas(1000,600);

  sea = createSprite (500, 300);
  sea.addImage (sea_IMG);
  
  sea.scale = 0.4;
  sea.velocityX = 2;

  ship1 = createSprite (400, 400);
  ship1.scale  = 0.5;
  ship1.addAnimation ("ship1Moving", shipMoving_1)

  ship2 = createSprite (730, 400);  
  ship2.scale = 0.6;
  ship2.addAnimation ("ship2Moving", shipMoving_2);

  ship3 = createSprite (130, 450);
  ship3.scale = 0.4;
  ship3.addAnimation ("ship3Moving", shipMoving_1);
}

function draw() {
  if (sea.x > 1830){
    sea.x = sea.width / -5.21;
  }
  
  drawSprites ();
}