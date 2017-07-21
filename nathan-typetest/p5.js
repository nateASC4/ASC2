function setup(){
    createCanvas(900, 900)
    background(212, 155, 63)

}
var myWords ="";
function keyTyped(){
    myWords = myWords + key;
}
function draw() {
  fill(159,29,53);
  textFont("GEORGIA");
  textSize(100);
  text("Please answer the question below.", 100, 300, 200, 500);
  text(myWords, 50, 50);
  
}
    
       