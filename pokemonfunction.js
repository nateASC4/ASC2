function randLetter(num){
var randNum =Math.floor(Math.random()*num);
var result = Math.floor(randNum);
return result;
}
var vocab = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

console.log(vocab[randLetter(25)]);