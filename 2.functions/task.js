/// Задание 1
function getArrayParams(arr) {

  let min = Infinity;
  let max = -Infinity;
  let sum = arr.reduce(function(result, elem) {
    return result + elem;
  }, 0);
  let avg = sum / arr.length;
  
  for (let i = 0; i < arr.length; i += 1) {

    if (arr[i] > max) {
      max = arr[i];
    } 

    if (arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];

  }

  avg = +avg.toFixed(2);
  
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  arr.reduce(function(result, elem) {
    return sum = result + elem;
  }, 0)

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i += 1) {
    let sum = func(arrOfArr[i]);
    if (sum > max) {
      max = sum;
    }

  }
  
  return max;
}
//console.log(makeWork([[3,7,2], [2,5,8]], worker));

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

function makeWork(arrOfArr, worker2) {
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i += 1) {
    let result = worker2(arrOfArr[i]);
    if (result > max) {
      max = result;
    }

  }
  
  return max;
}
console.log(makeWork([[3,7,2], [2,5,8]], worker2));