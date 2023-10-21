//Problem 4: Write a function to check if the char is a small case or not.

function checksmallcase(character){
    var smallcase = "abcdefghijklmnopqrstuvwxyz";
    var count = 0;
    for(var a=0;a<26;a++){
      if(smallcase[a] === character){
        count++;
      }else{
        continue;
      }
    }
    if(count === 1){
      console.log(character,"is a small case");
    }else{
      console.log(character,"is a upper case");
    }
  }
  
  checksmallcase("b");
  
  
  