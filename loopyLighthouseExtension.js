function loopyLighthouse(range,multiples,words) {
  let list = [];
  const [start,end] = range;
  const [x,y] = multiples;
  const [word1,word2] = words;
  for (let i = start; i <= end; i++) {
    if (i % x === 0 && i % y === 0) {
      console.log(word1 + word2);
    } 
    else if (i % x === 0) {
      console.log(word1);
    } 
    else if (i % y === 0) {
      console.log(word2);
    } 
    else{
      console.log(i);
    }
  }
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));
