var maxSubArray = function (nums) {
  // let n = nums.length
  // let largestSum = Number.MIN_SAFE_INTEGER
  // for (let i = 0; i < n; i++) {
  //     let subarraySum = 0
  //     for (let j = i; j < n; j++) {
  //         subarraySum += nums[j]
  //         if (subarraySum > largestSum) {
  //             largestSum = subarraySum
  //         }
  //     }
  // }
  // return largestSum
  // pahli bar jab kiye to code hi fat gya fir hum kadane's algorithm ke bare me padha fir fir se kosis ki
  // tab ye solve ho gya
  //yaha pe iski time complexity O(n) ho jata hai jabki pahle bale me O(n^2) tha
  let n = nums.length;
  let maxSum = nums[0];
  let sum = nums[0];
  for (let i = 1; i < n; i++) {
    if (sum >= 0) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
};
