var removeElement = function (nums, val) {
  let n = nums.length;
  let k = 0;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    if (nums[left] === val && nums[right] !== val) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
    if (nums[left] !== val) {
      k++;
      left++;
    }
    if (nums[right] === val) {
      right--;
    }
  }
  return left;
};
