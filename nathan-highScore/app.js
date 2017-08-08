var score = 0;

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
    return "The result is a tie!";
}
if(choice1 === "rock") {
    if(choice2 === "scissors") {
        return "rock wins";
    } else {
        return "paper wins";
    }
}
if(choice1 === "paper") {
    if(choice2 === "rock") {
        return "paper wins";
    } else {
        if(choice2 === "scissors") {
            return "scissors wins";
    }
}
if(choice1 === "scissors") {
    if(choice2 === "rock") {
        return "rock wins";
    } else {
        if(choice2 === "paper") {
            return "scissors wins";
        }
    }
}
}
};

var result = compare(userChoice, computerChoice);

$("body").append("<h2>" + "Your Choice: " + userChoice + " , "+"   Your opponent's Choice: " + computerChoice + "</h2>");

if( result=="scissors wins" && userChoice =="scissors"){
    score++;
    $("body").append("<img src'assets/yourscissors.gif'><h2>You Win!,  Score: "+score+"</h2>");
    
}
else if( result =="paper wins" && userChoice =="paper"){
    score++;
    $("body").append("<h2>You Win!  Score:"+score+"</h2>");
}
else if(result =="rock wins" && userChoice =="rock"){
    score++;
    $("body").append("<h2>You Win!  Score:"+score+"</h2>");
}
else if(result=="scissors wins" && computerChoice =="scissors" && userChoice!="scissors"){
    $("body").append("<h2>You Lose! Score: "+score+"</h2>");
}
else if(result=="paper wins" && computerChoice =="paper" && userChoice!="paper"){
    $("body").append("<h2>You Lose! Score: "+score+"</h2>");
}
else if( result =="rock wins" && computerChoice =="rock" && userChoice!="rock"){
    $("body").append("<h2>You Lose! Score: "+score+"</h2>");
}
else {
    $("body").append("<h2>Its a tie! Score: "+score+"</h2>");
}
document.getElementById("reset").onclick = function() {
   document.getElementById(score).innerHTML = "";
};
