/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function(s) {
//     let left =0
//     let right =s.length-1
//     while(left <right){
//         [s[left],s[right]]=[s[right],s[left]]
//         left ++
//         right--
//     }
//     return s
// };

// Recursive Approach mujhe nahi pta ki ye kitna sahi hia per jo v
// hai yahi hai abhi tak jo sikha bo hai uper bala two pointer approch
//hai aur niche wala recursive approach hai

var reverseString = function (s, left, right) {
  left = left || 0;
  right = right || s.length - 1;
  if (left >= right) {
    return s;
  }
  if (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
  }
  return reverseString(s, left + 1, right - 1);
};
let s = ["h", "e", "l", "l", "o"];
console.log(reverseString(s));
