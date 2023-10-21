//Problem 5 : Given an array of string count the overall total number of characters

var sum = 0;

var arr = ["Hello","Bye","Why","know"];
for(var a=0;a<arr.length;a++){
  sum = sum + (arr[a].length)
}
console.log(sum);