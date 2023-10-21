//Write a custom function that has the same behavior of inbuilt String Substring Function

function apart(word,start,end){
    var bag = "";
    for(var a=start;a<end;a++){
      bag = bag + (word[a]);
    }
    console.log(bag);
  }
  
  var name = "nitin";
  
  apart(name,1,4);