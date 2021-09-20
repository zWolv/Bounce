class Poolbal extends Bal {
    nummer;

    constructor(_x, _y, _speedX, _speedY, _nummer) {
        super(_x, _y, _speedX, _speedY);
        this.nummer = _nummer;
    }


    show() {
        fill(0,0,0);
        ellipse(this.x, this.y, 100, 100);
        fill(255,255,255);
        ellipse(this.x, this.y, 40, 40);
        textSize(25);
        fill(0,0,0);
        text("8",this.x-6,this.y+6);
    }
}