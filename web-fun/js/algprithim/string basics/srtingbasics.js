// 1
function removeBlanks(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i];
    }
  }

  return result;
}

// 2
function getDigits(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== " ") {
      result += str[i];
    }
  }

  return Number(result);
}

// 3

function acronym(str) {
  let words = str.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i] !== "") {
      result += words[i][0].toUpperCase();
    }
  }

  return result;
}

// 4

function countNonSpaces(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      count++;
    }
  }

  return count;
}

// 5

function removeShorterStrings(arr, minLength) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= minLength) {
      result.push(arr[i]);
    }
  }

  return result;
}
