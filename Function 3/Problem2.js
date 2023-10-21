//Write a custom function that has the same behavior of inbuilt Array Last Index Of Function

function findindex(arr,find){
    for(var a=0;a<arr.length;a++){
      if(arr[a] === find){
        console.log(a);
      }
    }
  }
  
  var name = ["cat","tiger","lion","dog"];
  findindex(name,"lion");