// Problem-2
// Write code to find the absolute difference of two numbers

// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14

function difference(number1,number2){
    var substraction = number1 - number2;
    if(substraction < 0){
      return (-substraction);
    }else{
      return substraction;
    }
  }
  console.log(difference(12,32));