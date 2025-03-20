function verfiedBox (vector,title) {
    fill("white");
    rect(vector.x,vector.y,200,100);
    push();
    noStroke();
    textAlign(CENTER)
    fill(0);
    textSize(13);
    textWrap(WORD);
    text(`${title.toUpperCase()}`,vector.x,vector.y-40,200)
    pop();
};


function unVerifiedBox(vector,title) {
    fill("red");
    noStroke();
    rect(vector.x,vector.y,200,100);
    push();
    noStroke();
    textAlign(CENTER)
    fill(255);
    textSize(13);
    textWrap(WORD);
    text(`${title.toUpperCase()}`,vector.x,vector.y-40,200)
    pop();
};