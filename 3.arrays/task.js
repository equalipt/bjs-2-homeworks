// task 1

function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, idx) => arr2[i] === item);
}

// task 2

function advancedFilter(arr) {
  return arr.filter(item => item > 0).filter(item => item % 3 == 0).map(item => item * 10);
}