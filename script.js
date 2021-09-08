/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */



var circleY = [85,276,438,543,676];
var circleX = [548,845,435,679,1000];

var bouncePointX = [0,0,0,0,0];
var bouncePointY = [0,0,0,0,0];

var circleWidth = [30,50,60,80,90];
var circleHeight = [30,50,60,80,90];

var speedX = [3,5,6,8,2];
var speedY = [3,5,6,8,2];

function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
  // Kleur de achtergrond blauw, zodat je het kunt zien
  
}

// bereken het punt waarop de zijkant van de cirkels zal zitten
function bouncePoint() {
  for(x = 0;x < 5; x++){
  bouncePointX[x] = 1280 - circleWidth[x];
  print(bouncePointX);
  bouncePointY[x] = 720 - circleHeight[x];
  }
}

// update de breedte en lengte van de cirkels
function circleWidthHeightUpdate() {
    for(i = 0; i < 5;i++) {
    if (circleWidth[i] < 91) { 
      for(x = 0; x < 5; x++) {
        circleWidth[x] = circleWidth[x] + 3;
      }
    }

    if(circleWidth[i] > 19) { 
      for(x = 0; x < 5; x++){
        circleWidth[x] = circleWidth[x] - 3;
      }
    }

    if (circleHeight[i] < 91) { 
      for(x = 0; x < 5; x++) {
        circleHeight[x] = circleHeight[x] + 3;
      }
    }

    if(circleHeight[i] > 19) { 
      for(x = 0; x < 5; x++){
        circleHeight[x] = circleHeight[x] - 3;
      }
    }
  }
}

// update de positie van de cirkel
function updateCircle() {
  for(i = 0;i < 5;i++){
    circleX[i] = circleX[i] + speedX[i];
    circleY[i] = circleY[i] + speedY[i];
  }

  
}

// run alle functies
function updateVariables() {
  circleWidthHeightUpdate(); // werkt niet
  drawCircles();
  bouncePoint();
  bounceUpLeft();
  //bounceDownRight(); // werkt niet
  updateCircle();
  print("kaas");
  
}

// wanneer moeten de ballen omhoog of naar linksgaan
function bounceUpLeft() {
  for(i = 0;i < 5;i++){
    if(circleY[i] >= bouncePointY[i]) {
      speedY[i] = speedY[i] * -1;
    }

    if(circleX[i] >= bouncePointX[i]) {
      speedX[i] = speedX[i] * -1;
    }
  }
}

// wanneer moeten de ballen omlaag of naar rechts
function bounceDownRight() {
  for(i = 0;i < 5;i++){
    if(circleY[i] = 0) {
      speedY[i] = speedY[i] * -1;
    }

    if(circleX[i] = 0) {
      speedX[i] = speedX[i] * -1;
      print('ja')
    }
  }
}

// teken de cirkels
function drawCircles() {
  fill(0,0,0);
  //ellipse(circleX[0],circleY[0],circleWidth[0],circleHeight[0]);
  //ellipse(circleX[1],circleY[1],circleWidth[1],circleHeight[1]);
  //ellipse(circleX[2],circleY[2],circleWidth[2],circleHeight[2]);
  //ellipse(circleX[3],circleY[3],circleWidth[3],circleHeight[3]);
  ellipse(circleX[4],circleY[4],circleWidth[4],circleHeight[4]);

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