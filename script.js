/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */



var circleY = [85,276,438,543,676];
var circleX = [548,845,435,679,1000];

var bouncePointXRight = [0,0,0,0,0];
var bouncePointYUp = [0,0,0,0,0];
var bouncePointXLeft = [0,0,0,0,0];
var bouncePointYDown = [0,0,0,0,0];

var circleWidth = [40,50,80,70,90];
var circleHeight = [40,50,80,70,90];

var speedX = [3,5,6,8,4];
var speedY = [3,5,6,8,4];

function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
  // Kleur de achtergrond blauw, zodat je het kunt zien
  
}

// bereken het punt waarop de zijkant van de cirkels zal zitten
function bouncePoint() {
  for(x = 0;x < 5; x++){
  bouncePointXRight[x] = 1280 - (circleWidth[x] / 2);
  bouncePointYUp[x] = 720 - (circleHeight[x] / 2);
  bouncePointYDown[x] = 0 + (circleHeight[x] / 2);
  bouncePointXLeft[x] = 0 + (circleWidth[x] / 2);
  }
}

// update de positie van de cirkel
function updateCircle() {
  for(i = 0;i < 5;i++){
    circleX[i] = circleX[i] + speedX[i];
    circleY[i] = circleY[i] + speedY[i];
  }

  
}



// wanneer moeten de ballen omhoog of naar linksgaan
function bounceUpLeft() {
  for(i = 0;i < 5;i++){
    if(circleY[i] >= bouncePointYUp[i]) {
      speedY[i] = speedY[i] * -1;
    }

    if(circleX[i] >= bouncePointXRight[i]) {
      speedX[i] = speedX[i] * -1;
    }
  }
}

// wanneer moeten de ballen omlaag of naar rechts
function bounceDownRight() {
  for(i = 0;i < 5;i++){
    if(circleY[i] < bouncePointYDown[i]) {
      speedY[i] = speedY[i] * -1;
      print("ja");
    }

    if(circleX[i] < bouncePointXLeft[i]) {
      speedX[i] = speedX[i] * -1;
    }
  }
}

// teken de cirkels
function drawCircles() {
  fill(255,0,255);
  ellipse(circleX[0],circleY[0],circleWidth[0],circleHeight[0]);
  fill(60,136,120);
  ellipse(circleX[1],circleY[1],circleWidth[1],circleHeight[1]);
  fill(38,120,93);
  ellipse(circleX[2],circleY[2],circleWidth[2],circleHeight[2]);
  fill(0,255,0);
  ellipse(circleX[3],circleY[3],circleWidth[3],circleHeight[3]);
  fill(253,8,38);
  ellipse(circleX[4],circleY[4],circleWidth[4],circleHeight[4]);

}

// run alle functies
function updateVariables() {
  drawCircles();
  bouncePoint();
  bounceUpLeft();
  bounceDownRight(); // werkt niet -- cirkels bouncen niet
  updateCircle();
}
/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  background('blue');
  
  // update alles
  updateVariables();
}