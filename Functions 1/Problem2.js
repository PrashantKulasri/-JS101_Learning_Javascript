//Problem 2: Use the above function to print the Primes from 2 to a given limit

function checkprime(limit){
    for(var a=2;a<=limit;a++){
    count = 0;
    for(var b=1;b<=limit;b++){
      if(a%b === 0){
        count++;
      }else{
        continue;
      }
    }
    if(count === 2){
      console.log(a,"is a Prime Number");
    }else{
      continue;
    }
  }
  }
  
  checkprime(20);