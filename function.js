function wellohorld(){
   return "Wello Horld";
   console.log("Wello Horld!");
}


function rand(num){
// this is a function 
// this is a function that returns a number between zero and one 
var randNum = Math.random()*num; //assign a random # to randNum

var result = Math.floor(randNum); // set randNum to non decimal
// var myName = "Nathan";
// var myPokemonRoster = ['fee','John'];



    return result ;

}
var myCoin = ['heads','tails'];
console.log(myCoin[rand(2)]);

var myDice = ['one','two','three','four',"five","six"];
console.log("You rolled a" + myDice[rand(6)]);
