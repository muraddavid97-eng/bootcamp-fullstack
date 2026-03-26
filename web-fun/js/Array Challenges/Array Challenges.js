// 1
function alwaysHungry(arr) {
  var found = false;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "food") {
      console.log("yummy");
      found = true;
    }
  }

  if (found === false) {
    console.log("I'm hungry");
  }
}

// 2
function highPass(arr, cutoff) {
  var filteredArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > cutoff) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
}
// 3
function betterThanAverage(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  var avg = sum / arr.length;

  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > avg) {
      count++;
    }
  }

  return count;
}
// 4
function reverse(arr) {
  var left = 0;
  var right = arr.length - 1;

  while (left < right) {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr;
}
// 5
function fibonacciArray(n) {
  var fibArr = [0, 1];

  for (var i = 2; i < n; i++) {
    fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
  }

  return fibArr;
}
