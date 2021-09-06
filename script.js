/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */

var x = 1;
var y = 1;
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  
}

function bounce() {
  if(y > 0) {
    y += 1;
  }

  i//f(y = 720 - 80) {
  //  y -= 1;
  //}

  if(x > 0) {
    x += 1;
  }

  //if(x = 1280 - 80) {
  //  x -= 1;
  //}
}

/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  background('blue');
  // stel vulkleur in
  fill(0, 0, 0);
  
  bounce();
  // teken een cirkel
  ellipse(x,y,80,80);
}