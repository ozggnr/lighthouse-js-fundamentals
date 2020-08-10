const lastIndexOf = function (value,item) {
  if ( value.length === 0) {
    return -1;
  } 
  else {
    for (let i = value.length - 1; i >= 0; i--) {
      if (value[i] === item) {
        return i;
      }
    }
  }
  return -1;
};

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

