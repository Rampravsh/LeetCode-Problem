// var findMaxAverage = function (nums, k) {
//   let n = nums.length;
//   let maximum = Number.MIN_SAFE_INTEGER;
//   for (let i = 0; i <= n - k; i++) {
//     let sumOfSubarray = 0;
//     for (let j = i; j < i + k; j++) {
//       sumOfSubarray += nums[j];
//     }
//     if (sumOfSubarray > maximum) {
//       maximum = sumOfSubarray;
//     }
//   }
//   return maximum / k;
// };
// let nums = [1, 12, -5, -6, 50, 3];
// let k = 4;
// console.log(findMaxAverage(nums, k));

// next bala solution sliding window technique use karta hai

var findMaxAverage = function (nums, k) {
  let n = nums.length;
  let wSum = 0;
  let mSum;
  for (let i = 0; i < k; i++) {
    wSum += nums[i];
  }
  mSum = wSum;
  if (k === n) {
    return wSum / k;
  }
  for (let i = k; i < n; i++) {
    wSum = wSum + nums[i] - nums[i - k];
    mSum = Math.max(wSum, mSum);
  }
  return mSum / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 3));
