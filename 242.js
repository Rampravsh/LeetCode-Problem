// var isAnagram = function (s, t) {
//   let sSum = new Array(128).fill(0);
//   let tSum = new Array(128).fill(0);
//   if (s.length !== t.length) {
//     return false;
//   }
//   for (let i = 0; i < s.length; i++) {
//     let sCode = s.charCodeAt(i);
//     let tCode = t.charCodeAt(i);
//     sSum[sCode] += 1;
//     tSum[tCode] += 1;
//   }

//   if (sSum == tSum) {    //ye line kaam nahi karega kyuki hum do array ko compare nahi kar sakte aese
//     return true;
//   }
//   return false;
// };

var isAnagram = function (s, t) {
  let sSum = new Array(128).fill(0);
  let tSum = new Array(128).fill(0);
  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    let sCode = s.charCodeAt(i);
    let tCode = t.charCodeAt(i);
    sSum[sCode] += 1;
    tSum[tCode] += 1;
  }
  for (let i = 0; i < sSum.length; i++) {
    if (sSum[i] !== tSum[i]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("aacc", "ccac"));
console.log(isAnagram("ram", "mar"));
