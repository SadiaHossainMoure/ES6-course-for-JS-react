var numbers = [1, 2, 3];

var newNumbers = [...numbers, 4, 5, 6];

console.log(newNumbers);

output; [ 1, 2, 3, 4, 5, 6 ]

var numbers = [1, 2, 3];
var a = [numbers]; //exact copy of numbers
numbers.push(4);
console.log(a);


