//Problem 2 : Given a character in lower case print the upper case character

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var character = "f";

for(var a=0;a<upper.length;a++){
  if(character === lower[a]){
    console.log(upper[a]);
  }
}