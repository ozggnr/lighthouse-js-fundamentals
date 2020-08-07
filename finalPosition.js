const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
function finalPosition(moves){
  let list = [0, 0];
  for (let move of moves) {
    let x = list[0];
    let y = list[1];
    if (move === 'north') {
      list = [x, y + 1];
    } 
    else if (move === 'south') {
      list = [x, y - 1];
    } 
    else if (move === 'west') {
      list = [x - 1, y];
    } 
    else {
      list = [x + 1, y];
    }
  }
  return list;
}
console.log(finalPosition(moves));