// - Given an input of products in the below format (Name Quantity Price)
// - Input

// ```
// ["Rice", "Dal", "Salt"]
// [2, 3, 1]
// [60, 50, 20]

// ```

// - Create an object with the key `data` which is an array of objects with the format `{name: "Rice", quantity: 2, price: 60}`
// - The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
// - Sample output for the above case `290`

var product = ["Rice", "Dal", "Salt"];
var quantity = [2, 3, 1];
var price = [60, 50, 20];

var data = [];


for(var i = 0; i < product.length; i++){
  var obj = {};
  obj.name = product[i];
  obj.quantity = quantity[i];
  obj.price = price[i];
  data.push(obj);
}

var total = 0;
for(var j = 0; j < data.length; j++){
  total = total + (data[j].quantity * data[j].price);
}
console.log(total);