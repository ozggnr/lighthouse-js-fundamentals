function judgeVegetable (veggies, metric) {
  let list = [];
  for (veg of veggies) {
      list.push(veg[metric]);
  }
  let max = Math.max(...list);
  for (veg of veggies) {
    if (max === veg[metric]) {
      return veg.submitter;
    }
  }
};
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));