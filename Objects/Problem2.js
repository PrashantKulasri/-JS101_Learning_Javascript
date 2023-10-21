// ### **Problem-2 Grade Student Marks**

// - Given an object of student grades and their marks in the mentioned below format, print the highest scored student for each grade along with the total
// - Sample Input

// ```
// [
// 	{
// 		grade: "V",
// 		students: [
// 			{name: "Nrupul", marks: [10, 20, 30]},
// 			{name: "Prateek", marks: [20, 30, 40]}
// 		]
// 	},
// 	{
// 		grade: "VI",
// 		students: [
// 			{name: "Aman", marks: [10, 20, 30]},
// 			{name: "Albert", marks: [20, 30, 40]}
// 		]
// 	},
// 	{
// 		grade: "VII",
// 		students: [
// 			{name: "Yogesh", marks: [10, 20, 30]},
// 			{name: "Sandhya", marks: [20, 30, 40]}
// 		]
// 	}
// ]

// ```

// Sample Output

// V-Prateek-90
// VI-Albert-90
// VII-Sandhya-90


var data = [
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
];
  
for(var a=0;a<data.length;a++){
  var max = -Infinity;
  var bag;
  for(var b=0;b<(data[a]["students"].length);b++){
    var sum = 0;
    var bag;
    for(var c=0;c<(data[a]["students"][b]["marks"].length);c++){
      sum = sum + (data[a].students[b].marks[c]);
    }
    if(max<sum){
      max = sum;
      bag = (data[a]["students"][b]["name"])
    }
  }
  console.log(data[a].grade +"-"+ bag +"-"+ max);
}