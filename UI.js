function mentalHealth(stat) {
var barWidth = map(stat,0,700,0,514);
noFill();
stroke(255);
text("mental"+" "+ "health",width/5,height/12);
rect(width/4,height/20,width/2,10);
fill(255);
rect(width/4,height/10,barWidth,8);
if(stat > 700) {
    stat = 700;
}
stat = stat + 0.006
};


function tolerence(stat) {
    noFill();
    stroke(255);
    text("Tolerence-meter",width/5,height/26);
    rect(width/4,height/20,width/2,10);
    fill(255);
    rect(width/4,height/20,stat,8);
    if(stat > 514) {
        stat = 514;
       
    }
    
};

function loadAPI() {
    API1 = true;
  }
  
  function loadAPI2() {
    API2 = true;
  }
  
  
  function loadAPI3() {
    API3 = true;
  }
  
  function loadAPI4() {
    API4 = true;
  }

  function loadAPI5() {
    API5 = true;
  }


   function  loadConsole() {
    textAlign(CENTER);
     fill(255)
     //text("LOADING API RESULTS",width/2,height);
     push()
     stroke(255)
     fill(0);
     rect(width/2,height/2,width/2 + width/4)
     pop()
     if(API1 == true){
     text(`///API STATUS: ${stats}///`, width/2,height/3 -90)
     } else {
       
     }
     if(API2 == true){
    text(`///Total Results:${totalNumber} ///`,width/2,height/3-70)  
     } else {
       
     }
     if(API3 == false){
       text("...loading...",width/2,height/3-30)
     } else {
       
     }
     if (API4 == true){
     generateList();
     }

     if (API5 == true){
        text("Press Enter To Continue",width/2,height/3-105);
        if(keyIsDown(ENTER)) {
            mode = mode + 1;
        };

        }
      text("///Loading Results///",width/2,height/3 -50);
      push()
      textSize(42)
      stroke(255)
      text("WHEN NEWS ATTACKS.exe",width/2,height/3-120);
      pop()
   } 


   function generateList () {
    for(let i = 0; i < articles.length; i++) {
      setTimeout(listItem(articles[i],i),200000);
    }
  }
  
  function listItem(article,i) {
    push();
    textSize(10)
    text(`///Title: ${article.title} Source: ${article.source.id} Date: ${article.date}///`,width/2,height/3 + (12 * i),);
    pop();
  }
 
  function menu() {
    if(keyIsDown(77)) {
        mode = mode -1;
        player.tolerence = 514;
        player.mentalHealth=700;
    }
  }