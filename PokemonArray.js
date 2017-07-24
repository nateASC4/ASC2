var myPokemonRoster = ["Arceus",'Zekrom',"Garchomp","Darkrai","Giratina"];
var firstToFight = myPokemonRoster[0];
var secondToFight = myPokemonRoster[1];
var victorRoster = ["Vrceus",'Vekrom',"Varchomp","Varkrai","Viratina"];

function printRoster(array){
    for (var i=0 ; i<array.length; i++){
    console.log(array[i]);
    }
}
//arceus, zekrom, garchomp, darkrai, giratina
printRoster(myPokemonRoster);

//
//arceus, zekrom, garchomp, darkrai
printRoster(myPokemonRoster);
printRoster(victorRoster);
victorRoster.pop();
printRoster(victorRoster);
myPokemonRoster.push("Pikachu","Kingler");
printRoster(myPokemonRoster);
var RosterSize = myPokemonRoster.length;
console.log(RosterSize);