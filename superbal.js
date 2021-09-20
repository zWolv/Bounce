class Superbal extends Bal{
    kleurR;
    kleurG;
    kleurB;

  constructor(_x, _y, _speedX, _speedY, _kleurR, _kleurG, _kleurB) {
    super(_x, _y, _speedX, _speedY);
    this.kleurB = _kleurB;
    this.kleurG = _kleurG;
    this.kleurR = _kleurR;
  }


  // toont de bal
  show() {
    fill(this.kleurR,this.kleurG,this.kleurB);
    //fill(0,255,0);
    ellipse(this.x, this.y, 50, 50);
  }

}
