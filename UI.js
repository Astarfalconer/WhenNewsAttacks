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

     if (API5 == true && stats == "ok"){
        text("Press Enter To Continue",width/2,height/3-105);
        if(keyIsDown(ENTER)) {
            mode = mode + 1;
        };

        } else if( stats == "undefined") {
          push()
          textSize(42)
          text("Well that wasn't supposed to happen...", width/2,height/3)
          textSize(20);
          textWrap(CHAR);
          text("To trouble shoot this issue there are two options:",width/2,height/3 + 100)
          text("The first may be due to news.org's change in buisness plan not allowing their API to be used online without upgrading to their buisness subscription. The solution here is for you to run this code on a local server. download said code here:",width/2,height/3 + 200,700)
          text("https://github.com/Astarfalconer/WhenNewsAttacks",width/2,height/3 + 300,600)
          text("The other is a simple fix to the API query for date, the solution is to change the date to one that is less then a month old",width/2,height/3 + 360,700)
          pop()
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