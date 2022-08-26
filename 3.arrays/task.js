function compareArrays(arr1, arr2) {
  let result;

  return arr1.length === arr2.length && arr1.every((currentElement, index) => currentElement === arr2[index]);
 
}

/*function advancedFilter(arr) {

  let resultArr = arr.filter(number => number > 0).filter(number % 3 === 0).map(number => number * 10); 

  return resultArr; // array
}*/

function advancedFilter(arr) {

  return arr.filter(number => number > 0 && number % 3 === 0).map(number => number * 10);
}

