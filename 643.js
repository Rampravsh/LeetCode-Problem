var findMaxAverage = function (nums, k) {
  let n = nums.length;
  let maximum = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i <= n - k; i++) {
    let sumOfSubarray = 0;
    for (let j = i; j < i + k; j++) {
      sumOfSubarray += nums[j];
    }
    if (sumOfSubarray > maximum) {
      maximum = sumOfSubarray;
    }
  }
  return maximum / k;
};
let nums = [1, 12, -5, -6, 50, 3];
let k = 4;
console.log(findMaxAverage(nums, k));
