// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

var word = ["MA", "SA", "I", "SCH", "OOL"];
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";

function check(array){
  var output = [];
  for(var a=0;a<array.length;a++){
    var ab = (array[a]);
    var bag = "";
    for(var b=0;b<ab.length;b++){
      for(var c=0;c<uppercase.length;c++){
        if(ab[b] === uppercase[c]){
          bag = bag + lowercase[c];
        }
      }
    }
    output.push(bag);
  }
  console.log(output);
}

check(word);