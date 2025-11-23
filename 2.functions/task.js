// Задача №1________________________________________________

function getArrayParams(...arr) {

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (value > max) {
      max = value;
    }

    if (value < min) {
      min = value;
    }

    sum += value;
  }

  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задача №2________________________________________________

function summElementsWorker(...arr) {

  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let value of arr) {
    sum += value;
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {

  if (arr.length === 0) {
    return 0;
  }

  let min = Infinity;
  let max = -Infinity;

  for (let value of arr) {
    if (value < min) {
    min = value;
    }

    if (value > max) {
      max = value;
    }
  }

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let value of arr) {
    if (value % 2 === 0) {
      sumEvenElement += value;
    } else {
      sumOddElement += value;
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let value of arr) {
    if (value % 2 === 0) {
      sumEvenElement += value;
      countEvenElement++;
    }
  }

  if (countEvenElement === 0) return 0;

  return sumEvenElement / countEvenElement;
}


// Задача №3________________________________________________

function makeWork (arrOfArr, func) {

  let maxWorkerResult = -Infinity; 

  for (let arr of arrOfArr) {
    const result = func(...arr); 
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
