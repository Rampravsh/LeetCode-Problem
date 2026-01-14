// var lengthOfLongestSubstring = function (s) {
//   let mString = new Set();
//   for (let i = 0; i < s.length; i++) {
//     if (mString.values(0) === mString.has(s[i])) {
//       mString.delete(s[i]);
//       mString.add(s[i]);
//     } else {
//       mString.add(s[i]);
//     }
//   }
//   return mString;
// };

// var lengthOfLongestSubstring = function (s) {
//   let mString = new Set();
//   let start = 0;
//   let end = 1;
//   while (end < s.length) {
//     if (s[start] === s[end]) {
//       start++;
//       end++;
//     } else {
//       end++;
//     }
//   }
//   for (let i = start; i < end; i++) {
//     mString.add(s[i]);
//   }
//   console.log(mString);
//   return mString.size;
// };
// let s = "pwwkew";
// console.log(lengthOfLongestSubstring(s));

// aaj hai fir se try karte hai with hast table kyuki pichle 2 bar se nahi hua hai 26/12/2025 aaj ka date
// kyuki hamne hash ke bare me padha hai thora thora to dekte hai
// var lengthOfLongestSubstring = function (s) {
//   let mString = new Set();
//   let longStringLength = 0;
//   let count = 0;
//   let start = 0;
//   let end = 0;
//   for (let i = start; i < s.length; i++) {
//     if (mString.has(s[end])) {
//       mString.clear();
//       mString.add(s[end]);
//       start = end;
//       end++;
//       longStringLength = Math.max(longStringLength, count);
//       count = 1;
//     } else {
//       mString.add(s[i]);
//       end++;
//       count++;
//       longStringLength = Math.max(longStringLength, count);
//     }
//   }
//   return longStringLength;
// };
// let s = "pwwkew";
// console.log(lengthOfLongestSubstring(s));

//  Ab ek baar fir se try karte hai 26/12/2025 uper wale code me hum do point use kar rahe the jo ki sahi nahi tha
// hum ek hi pointer use karenge aur set ka use karenge
// var lengthOfLongestSubstring = function (s) {
//   let mString = new Set();
//   let longStringLength = 0;
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (mString.has(s[i])) {
//       mString.clear();
//       mString.add(s[i]);
//       longStringLength = Math.max(longStringLength, count);
//       count = 1;
//     } else {
//       mString.add(s[i]);
//       count++;
//       longStringLength = Math.max(longStringLength, count);
//     }
//   }
//   return longStringLength;
// };
// let s = "pwwkew";
// console.log(lengthOfLongestSubstring(s));


