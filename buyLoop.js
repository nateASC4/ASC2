
var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
var n = prompt('How many more times? ');
var bank = 1000; // start player with 1,000
// var myMoney = prompt('How much money do I have');
console.log("if you have 1,000"); // tell the player
var myMoney = prompt('What else do you want to buy');
var inventory = ['high rule sword',"potion",'shield','bow'];
//prompt the user if they want ot buy an item
var answer = prompt("would you like to buy an item" + inventory[0]);
if(answer === "yes" ){
    bank = bank - 100;
    console.log("you have" + bank + "left");
}
for (var x = 0; x <inventory.length; x++){
    var answer = prompt("Would you like to buy a" + inventory[x])

    if (answer === "yes");
    bank = bank
};
var promptSynce = require('prompt-sync');
var money = 1000;
var items = [];
while(bank>99){
 console.log("You have $"+ money + "left. Sword = $500, Potion= 100");  
 var answer = promptySync("which item do you want to buy"); 
if(answer == "high rule sword "){
    money = money- 500;
    items.push("Potion");
    console.log("You bought a Potion")
}else{
    console.log("")
    console.log("You broke,cuz");
console.log("Thanks for the mulla, take care")
}}
