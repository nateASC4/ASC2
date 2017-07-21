var x = 20;
var y = 650;
function setup(){
    createCanvas(windowWidth,windowHeight);
}
function draw(){
    clear();
    background(10,10,10);
    if(keyIsDown(LEFT_ARROW)){
        x-=5;
    }
    if(keyIsDown(RIGHT_ARROW)){
        x+=5;
    }
    rect(x,y,100,20);
    fill(12,200,12);
    for( var a = 25; a < windowWidth/2; a=a+ 25){
        for(var b = 25; b < windowHeight/4; b=b+45){
            push();
            translate(a,b);
            drawCircle();
            pop();
        }       
    }
    function drawCircle(){
        ellipse(10, 10, 20, 20,20,20)
    }
    console.log(x);
    if (x > windowWidth - 100){
        x = windowWidth -100;
    }   
    if (x < 0){
        x = 10;
    }
    for( var c = 75; c < windowWidth/2; c=c+150){
        for(var d = 300; d < windowHeight/2; d=d+100){
            push();
            translate(c-120,d+250);
            drawRectangle();
            pop();
        }       
    }
    function drawRectangle(){
        fill("gold")
        rect(70,25,70,25)
    }
}