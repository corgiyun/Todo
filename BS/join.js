let a = [1, 2, 3];
a.join = a.shift;
console.log(a);
// console.log(a == 1 && a == 2 && a == 3);