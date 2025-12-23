// var isPalindrome = function (s) {
//     s = s.toLowerCase()
//     let simpeS = ''
//     let afterReverseS = ''
//     for (let i = 0; i < s.length; i++) {
//         let ch = s.charCodeAt(i)
//         if (ch >= 97 && ch <= 122) {
//             simpeS = simpeS + s[i]
//             afterReverseS = s[i] + afterReverseS
//         }
//     }
//     if (simpeS == afterReverseS) {
//         return true
//     } else {
//         return false
//     }
// };
// console.log(isPalindrome('0P'))

// uper bale me bhot mistek hai bc##
// after chatgpt chatgpt se bat karne ke bad kuch samajh aaya hai ab me use hi
// try karne bala hu bo bina dekhe hai na kitna bda bat
// esme hum two pointer approach ka use karne bale hai

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1; // length -1 islia kyu ki string ki indexing  se suru hota hai
  while (left < right) {
    while (left < right && !isValidChar(s[left])) {
      left++;
    }
    while (left < right && !isValidChar(s[right])) {
      right--;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function isValidChar(ch) {
  const code = ch.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
  );
}

console.log(
  isPalindrome("MADAM")
);
