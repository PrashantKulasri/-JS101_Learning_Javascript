// ## **Problem-1 User Age Filter**

// - Given a list of user data with name and age, create a list of key-value pairs from the input
// - From the generated data, print the users whose age is more than 30
// - Sample Input

// ```
// ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
// [32, 30, 26, 28, 44]

// ```

// - Sample Data Stored `[]` - List `{}` - Key-Value Pairs

// ```
// [
// 	{name: "Nrupul", age: 32},
// 	{name: "Prateek" , age: 30},
// 	{name: "Aman" , age: 26},
// 	{name: "Albert" , age: 28},
// 	{name: "Yogesh" , age: 44},
// ]

// ```

// - Sample Output

// `Nrupul Yogesh`




var naam = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
var umar = [32, 30, 26, 28, 44];

var uttar = [];

for(var a=0;a<naam.length;a++){
  var obj = {};

  obj.Name = naam[a];
  obj.Age = umar[a];

  uttar.push(obj);
}

var bag = "";
for(var a=0;a<uttar.length;a++){
  if(uttar[a].Age > 30){
    bag = bag + (uttar[a].Name) + " ";
  }
}
console.log(bag);