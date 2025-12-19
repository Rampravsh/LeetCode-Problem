var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  // 'i' tracks the position of the last unique element
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    console.log("j", nums[j], "i", nums[i], "ith", i);
    // If the current element is different from the last unique element
    if (nums[j] !== nums[i]) {
      i++; // Move to the next available slot
      nums[i] = nums[j]; // Update the slot with the new unique value
    }
  }

  // The number of unique elements is the index + 1
  return i + 1;
};

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
