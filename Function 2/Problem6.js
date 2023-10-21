// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";

function check(word){
    var bag = "";
  for(var a=0;a<word.length;a++){
    for(var b=0;b<uppercase.length;b++){
    if(word[a] === uppercase[b]){
      bag = bag + lowercase[b];
    }else if(word[a] === lowercase[b]){
      bag = bag + uppercase[b];
    }
  }
  }
  console.log(bag);
}

check("Test");


