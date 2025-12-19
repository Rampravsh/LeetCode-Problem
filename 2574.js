var leftRightDifference = function (nums) {
  let n = nums.length;
  let leftSum = new Array(n);
  let rightSum = new Array(n);
  let ans = new Array(n);

  for (let i = 0, j = n - 1; i < n; i++, j--) {
    if (i == 0) {
      leftSum[i] = nums[i];
      //   console.log("left0", leftSum);
    } else {
      leftSum[i] = nums[i] + leftSum[i - 1];
    }
    if (j == n - 1) {
      rightSum[j] = nums[j];
    } else {
      rightSum[j] = nums[j] + rightSum[j + 1];
    }
  }
  //cheack left sum and right sum aa raha hai ya nahi
  //   console.log(leftSum);
  //   console.log(rightSum);
  for (let i = 0; i < n; i++) {
    ans[i] = Math.abs(leftSum[i] - rightSum[i]);
  }
  return ans;
};

nums = [10, 4, 8, 3];

console.log(leftRightDifference(nums));
