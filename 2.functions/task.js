// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
    }

    if (max < arr[i]) {
      max = arr[i];
    }

    sum += arr[i];
    avg = sum / arr.length;
  }
  
  
  return { min: min, max: max, avg: +avg.toFixed(2) };
}

// Задание 2

function worker(arr) {
  let sum = 0;

  for (let item of arr) {
    sum += item;
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let item of arrOfArr) {
    const worker = func(item);

    if (worker > max) {
      max = worker;
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  let dif = 0;

  for (let item of arr) {
    if (item > max) {
      max = item;
    }
    if (item < min) {
      min = item;
    }
  }

  return dif = (max - min);
}