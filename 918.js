var maxSubarraySumCircular = function (nums) {
  let n = nums.length;
  let circularArray = new Array(2 * n - 1);
  for (let i = 0; i < 2 * n - 1; i++) {
    if (i < n) {
      circularArray[i] = nums[i];
    }
    if (i >= n) {
      circularArray[i] = nums[i % n];
    }
  }
  console.log(circularArray);
  let maxSum = circularArray[0];
  let sum = circularArray[0];
  for (let i = 1; i < 2 * n; i++) {
    if (sum >= 0) {
      sum += circularArray[i];
    } else {
      sum = circularArray[i];
    }
    if (sum > maxSum) {
      maxSum = sum;
    }
    // if (i === n - 1) {
    //   sum = circularArray[i];
    // }
  }
  return maxSum;
};

nums = [5, -3, 5];
console.log(maxSubarraySumCircular(nums));
