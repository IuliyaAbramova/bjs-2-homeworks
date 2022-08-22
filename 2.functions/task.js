/// Задание 1
function getArrayParams(arr) {

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  
  for (let i = 0; i < arr.length; i += 1) {

    if (arr[i] > max) {
      max = arr[i];
    } 

    if (arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];

  }

  let avg = sum / arr.length;
  avg = +avg.toFixed(2);
  
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i += 1) {

    let result = func(arrOfArr[i]);
    if (result > max) {
      max = result;
    }

  }
  
  return max;
}
console.log(makeWork([[3,7,2], [2,5,10]], worker));

// Задание 3
function worker2(arr) {

  let min = Infinity;
  let max = -Infinity;
  let difference;

  for (let i = 0; i < arr.length; i += 1) {

    if (arr[i] > max) {
      max = arr[i];

    } else if (arr[i] < min) {
      min = arr[i];
    }
    
  }

  return difference = max - min;
  
} 