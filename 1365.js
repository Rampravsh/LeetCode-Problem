var smallerNumbersThanCurrent = function (nums) {
  let n = nums.length;
  let res = new Array(n);
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      if (nums[j] < nums[i]) {
        sum++;
      }
    }
    res[i] = sum;
  }
  return res;
};

nums = [6, 5, 4, 8];

console.log(smallerNumbersThanCurrent(nums));
