const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const countLetters = (arr) => {
    const obj = {};
    let arrString = arr.join("").split(" ").join("").toLowerCase();
    for (letter of arrString) {
      if (obj[letter]) {
        obj[letter] += 1;
      } else {
        obj[letter] = 1;
      }
    }
    // Extra: most occurrences
    let maxCount = Math.max(...Object.values(obj));
   
    obj.mostOccurrences = {};
    for (letter in obj) {
      if (obj[letter] === maxCount) {
        obj.mostOccurrences[letter] = maxCount;
      }
    }
    return obj;
  };
  
  console.log(countLetters(array));
 