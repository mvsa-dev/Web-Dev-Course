function countSheep(sheep) {
  let count = 0;
  for (let i = 0; i < sheep.length; i++) {
    switch (sheep[i]) {
      case true:
        count++;
        break;
    }
  }
  return count;
}

console.log(
  countSheep([
    true,
    undefined,
    true,
    false,
    null,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
