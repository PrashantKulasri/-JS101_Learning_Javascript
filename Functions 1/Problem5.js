//Problem 5: Write a function to replace spaces in a given string with - .

function replace(sentence){
    var bag = "";
    for(var a=0;a<sentence.length;a++){
      if(sentence[a] === " "){
        bag = bag + "-";
      }else{
        bag = bag + sentence[a];
      }
    }
    console.log(bag);
  }
  
  replace("hello how are you")