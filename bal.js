class Bal {
    x;
    y;
    speedX;
    speedY;
    kleur;

    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
        this.kleur,speedX = 2;
        this.speedY = -3;
        this.kleur = color(0,255,0);
    }
    
    show() {
        fill(this.kleur);
        ellipse(this.x,this.y,69,69)
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.x <= 0) {
            this.speedX = this.speedX * -1;
        }

        if(this.y <= 0) {
            this.speedY = this.speedY * -1;
        }

        if(this.x >= 1211) {
            this.speedX = this.speedX * -1;
        }

        if(this.y >= 651) {
            this.speedY = this.speedY * -1;
        }
    }
}


