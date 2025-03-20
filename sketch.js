let API1 = false;
let API2 = false;
let API3 = false;
let API4 = false;
let API5 = false;
let mode = 0;
let articles = [];
let totalNumber;
let stats;
const flock = [];
const powerUps = [];
let player;
let alignSlider, cohesionSlider, seperationSlider;
function gotData(data) {
//console.log(data.articles);
 totalNumber = data.totalResults;
 stats = data.status;
 console.log(stats);
  for(let i = 66; i < data.articles.length; i++) {
   
   flock.push(new Boid(data.articles[i]));
   articles.push(data.articles[i]);
  }
  console.log(articles);
}


function setup() {
  
  setTimeout(loadAPI,2000);
  setTimeout(loadAPI2,3000);
  setTimeout(loadAPI3,6000);
  setTimeout(loadAPI4,6000);
  setTimeout(loadAPI5,6000);
  loadJSON(url,gotData);
  rectMode(CENTER)
  createCanvas(1028, 786);
  player  =  new Player(width/2,height/2);
  for(let i = 0; i < 9; i++) {
  powerUps.push(new PowerUP());
  }
}

function draw() {
  background(0);
 
  switch (mode) {
  case 0:
    push()
    drawFlock();
    pop();
    loadConsole();
   
    break;
  case 1:
    playerObject();
    drawFlock();
    powerUpsCall(powerUps);
    menu();
     break;
 };


  
}

