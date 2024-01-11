/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const clearSpace = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        result += str[i];
      }
    }
    return result.toLowerCase();
  };

  const cleanStr1 = clearSpace(str1);
  const cleanStr2 = clearSpace(str2);

  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
