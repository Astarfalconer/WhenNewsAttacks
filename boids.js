class Boid {
    constructor(article) {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 4));
        this.acceleration = createVector();
        this.maxForce = 0.2;
        this.maxSpeed = 5;
        this.title = article.title;
        this.source =article.source.id;
    };

    edges(){
      if(this.position.x > width) {
        this.position.x = 0;
      } else if (this.position.x < 0) {
        this.position.x = width;
      } else if (this.position.y > height) {
        this.position.y = 0;
      } else if (this.position.y < 0) {
        this.position.y = height;
      }
    };
     
    align(boids) {
      let perception =25;
      let steering = createVector();
      let total = 0;
      for (let other of boids){
           let d = dist(this.position.x,
            this.position.y,
            other.position.x,
            other.position.y);
           
            if(other != this && d < perception) {
              steering.add(other.velocity)
              total++;
            };
      }
      if(total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
      };
       return steering;
    };


    cohesion(boids) {
      let perception = 25;
      let steering = createVector();
      let total = 0;
      for (let other of boids){
           let d = dist(this.position.x,
            this.position.y,
            other.position.x,
            other.position.y);
           
            if(other != this && d < perception) {
              steering.add(other.position)
              total++;
            };
      }
      if(total > 0) {
      steering.div(total);
      steering.sub(this.position);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
      };
       return steering;
    };

    seperation(boids) {
      let perception = 50;
      let steering = createVector();
      let total = 0;
      for (let other of boids){
           let d = dist(this.position.x,
            this.position.y,
            other.position.x,
            other.position.y);
           
            if(other != this && d < perception) {
              let diff = p5.Vector.sub(this.position,other.position)
              diff.div(d * d);
              steering.add(diff);
              total++;
            };
      }
      if(total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
      };
       return steering;
    };

    flock(boids){
       let allignment = this.align(boids);
       let cohesion = this.cohesion(boids);
       let seperation = this.seperation(boids);

      //seperation.mult(seperationSlider.value());
     // allignment.mult(alignSlider.value());
      //cohesion.mult(cohesionSlider.value());



       this.acceleration.add(seperation);
       this.acceleration.add(cohesion);
       this.acceleration.add(allignment);
    };
     update() {
       this.position.add(this.velocity);
       this.velocity.add(this.acceleration);
       this.velocity.limit(this.maxSpeed);
       this.acceleration.mult(0);
     };
       
     show() {
      push();
      strokeWeight(1);
      stroke(255);
      noFill();
      circle(this.position.x, this.position.y,10);
      pop();
     };


     plrRange() {
      let d;
      d = dist(this.position.x,this.position.y,player.posX,player.posY)
      if(d < 200 && d > 50) {
        if(this.source === null) {
          push()
          stroke(255);
          line(this.position.x,this.position.y,player.posX,player.posY)
          pop();
          fill('red');
          push()
          noStroke();
          rect(this.position.x,this.position.y,100,20)
          pop()
          stroke(0);
          fill(0);
          textAlign(CENTER);
          text("WARNING",this.position.x,this.position.y+5);
        } else {
          push()
          stroke(255)
          line(this.position.x,this.position.y,player.posX,player.posY)
          pop()
        fill(255);
        rect(this.position.x,this.position.y,100,20)
        stroke(0);
        fill(0);
        text("VERIFIED",this.position.x,this.position.y+5);
        }
        
      }
      if(d < 50) {
        if(this.source === null){
          unVerifiedBox(this.position,this.title);
          if(player.mentalHealth > 0) {
           player.mentalHealth += -1
           if(player.tolerence > 0) {
            player.tolerence += -0.5
           }
          }
        } else {
          verfiedBox(this.position,this.title);
          if(player.tolerence > 0) {
            player.tolerence --;
          } else {
            player.mentalHealth --;
          }
        }
  
      };
     };
};


function drawFlock() {
  for (let boid of flock) {
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
    boid.plrRange();
  }
}