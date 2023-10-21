// Problem 1: Create a function to check if a number is Prime or Not

function checkprime(number){
    var count = 0;
    for(var a=1;a<=number;a++){
      if(number%a === 0){
        count++
      }
    }
    if(count == 2){
      return number;
    }
    else{
      return false;
    }
  }
  
  var number = 23;
  console.log(checkprime(number),"is Prime Number");