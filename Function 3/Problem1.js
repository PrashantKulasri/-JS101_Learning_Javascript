//Problem 1. Write a custom function that has the same behavior of inbuilt Array Join

function stick(arr){
    var bag = "";
    for(var a=0;a<arr.length;a++){
      bag = bag + arr[a];
    }
    console.log(bag);
  }
  
  stick(["hello","how","are","you"]);