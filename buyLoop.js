
var prompt = require('prompt-sync')();
// 
// get input from the user. 
// s
var n = prompt(' How many more times? ');
var bank = 500; // start player with 1,000
// var myMoney = prompt('How much money do I have');
console.log(" You have $500 "); // tell the player
var inventory = [' high rule sword'," potion",' shield',' bow'];
console.log(' high rule sword'," potion",' shield',' bow')

while(bank > 75)
{ var answer = prompt(' What do you want to buy? ');
  
    if(answer == "shield")
    {
        bank = bank - 200;
        console.log(" you have " + bank + " left");
    }

    else if(answer == "high rule sword" ){
        bank = bank - 220;
        console.log(" you have " + bank + " left ");
    }

    else if (answer == "potion"){
        bank = bank - 100;
        console.log(" you have " + bank + " left " )
    }

    else if (answer == "bow"){
        bank = bank - 75;
        console.log(" you have " + bank + " left ")
    }

    else {
        console.log( "Thats not an option" )

    } 
        
}
// else if( bank < 75) 
//     console.log(" Is that all ");
//     console.log(" You broke,cuz ");
//     console.log(" Thanks for the mulla, take care ")}







// var money = 1000;
// var items = [];
// while(bank>99){
//  console.log("You have $"+ money + "left. Sword = $500, Potion= 100");  
//  var answer = prompt("which item do you want to buy"); 
//  if (answer == "exit") {
//      break;
//  }
// if(answer == "high rule sword "){
//     money = money- 500;
//     items.push("Potion");
//     console.log("You bought a Potion")
// l}ese{
//     console.log("")
//     console.log("You broke,cuz");
// console.log("Thanks for the mulla, take care")
// }}



// for (var x = 0; x <inventory.length; x++){
//     var answer = prompt("Would you like to buy a" + inventory[x])

//     if (answer === "yes");
//     bank = bank