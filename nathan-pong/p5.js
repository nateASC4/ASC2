function setup(){
    createCanvas(600,600);
    background(10);
    fill(204, 100, 158, 300);
    stroke( 105, 40, 210);
};
var randomNum = "";
var x = 50
var y = 50
var vx = 20
var vy = 5
var e;
var ry = 0;

function collisionDetection(ax,ay,aw,ah,bx,by,bw,bh){
    return (ax<bx+bw && ay<by+bh&& by<ay+ah && bx<aw+ax);
}

// function draw(){
//     setup();
//     /*
//     Hi Nathan
//     It's Mohammed.
//     Use W and S to move the rectangle.
//     This works rather than W & S because
//     as draw() is being called it's always checking if W(87) or S(83) is pressed.
//     */
//     if(keyIsDown(87)){
//         ry-= 3;
//     }
//     if(keyIsDown(83)){
//         ry+=3;
//     }
//     if(x>=600-20){
//         vx = -vx;
//     }else if (x<= 0+20){
//         vx = -vx;
//     }
//     x = x +vx;
//     ellipse(x, y, 60, 60)
//     if(y>=600-40){
//         vy = -vy
//     }else if (y<=0 +10){
//         vy= -vy;
//     }
//     y = y + vy
//     fill("red")
//     rect(0,ry,10,75 )  
   
//     }
 
// function collisionDetection