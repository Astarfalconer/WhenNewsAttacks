class PowerUP {
    constructor () {
        this.position = createVector(random(width), random(height));
        this.TargetPosition = createVector(random(width), random(height));
        this.restoration = 6;  
    }


    

    show() {
        push();
        noStroke();
        fill(255);
        translate(this.position.x,this.position.y);
        rotate(45)
        rect(0,0,10);
        pop();
    }
    collision (arr) {
        let d = dist(this.position.x,this.position.y,player.posX,player.posY)
    if(d < 30) {
        if(player.tolerence > 514) {
            this.restoration = 0;
            this.position = this.position;
        }
        if(player.tolerence < 514 ) {
        player.tolerence = player.tolerence + this.restoration;
        arr.splice(this,1)
        arr.push(new PowerUP);
       // this.position = this.TargetPosition;
        }
        }
    }
}
/*
function collision(arr) {
    for (let item of arr) {
    let d = dist(item.position.x,item.position.y,player.posX,player.posY)
    if(d < 30) {
        if(player.tolerence = 514) {
            item.restoration = 0;
        }
        if(player.tolerence < 514 ) {
        player.tolerence = player.tolerence + item.restoration;
        //arr.splice(this,1)
        //arr.push(new PowerUP);
        item.position = item.TargetPosition;
        }
        }
  }
    };
  
  */

function powerUpsCall() {
    for( let pickUp of powerUps) {
        pickUp.show();
        pickUp.collision(powerUps);
      }
    //collision(arr);
}

