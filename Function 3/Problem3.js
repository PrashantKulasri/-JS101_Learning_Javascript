//Write a custom function that has the same behavior of inbuilt Array Slice Function

function cut(arr,start,end){
    var result = [];
    for(var a=start;a<end;a++){
      result.push(arr[a]);
    }
    console.log(result);
  }
  
  var name = ["ant", "bison", "camel", "duck", "elephant"];
  
  cut(name,2,4);