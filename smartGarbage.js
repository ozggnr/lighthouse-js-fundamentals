function smartGarbage (trash, bins) {
  let garbage = {
    waste: bins.waste,
    recycling: bins.recycling,
    compost: bins.compost
  };
  if (trash === Object.keys(bins)[0]) {
    garbage.waste += 1;
  }
  else if (trash === Object.keys(bins)[1]) {
    garbage.recycling += 1;
  }
  else if (trash === Object.keys(bins)[2]) {
    garbage.compost += 1;
  }
  return garbage;
}
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));