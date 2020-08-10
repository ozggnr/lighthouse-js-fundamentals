const range = function (start, end, step) {
  let new_array = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    new_array = [];
  }
  else {
    for (let i = start; i <= end; i = i + step){
      new_array.push(i);
    }
  }
  return new_array;
};



console.log(range(0, 8, 2));
console.log(range(30, 10, 2));
console.log(range());
console.log(range(3,20,-2));
console.log(range(10, 30, 5));
console.log(range(-9, 3, 3));


