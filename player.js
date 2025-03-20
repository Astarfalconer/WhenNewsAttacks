class Player {
    constructor (x,y) {
        this.posX = x;
        this.posY = y;
        this.speed = 2;
        this.tolerence = 514;
        this.mentalHealth = 700;
    }

    playerMove() {
        
            if (keyIsDown(UP_ARROW)) {
                this.posY = this.posY - this.speed;
            } else if (keyIsDown(DOWN_ARROW)) {
                this.posY = this.posY + this.speed;
            } if (keyIsDown(LEFT_ARROW)) {
                this.posX = this.posX - this.speed;
            } else if (keyIsDown(RIGHT_ARROW)) {
                this.posX = this.posX + this.speed;
            }
        }



        tolerenceBar() {
           tolerence(this.tolerence);
        }

        mentalHealthBar(){
            if(this.mentalHealth < 700 && this.mentalHealth > 0) {
            this.mentalHealth =  this.mentalHealth + 0.2;
            } else if(this.mentalHealth < 1) {
            this.mentalHealth = this.mentalHealth;
            }
            mentalHealth(this.mentalHealth);
        }

        gameOver() {
            if(this.mentalHealth < 1){
                this.speed = 0;
                stroke(255);
                push();
                textAlign(CENTER);
                textSize(100)
                text("GAME-OVER",width/2,height/2)
                pop();
            }
        }

        show(){
            fill("red");
            circle(this.posX,this.posY, 10);
           };
    };


   

function playerObject(){
    player.show();
    player.playerMove();
    player.tolerenceBar();
    player.mentalHealthBar();
    player.gameOver();
}