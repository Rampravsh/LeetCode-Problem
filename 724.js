// var pivotIndex = function (nums) {
//   let n = nums.length;
//   let prefixSum = new Array(n);
//   let suffixSum = new Array(n);

//   for (let i = 0, j = n - 1; i < n; i++, j--) {
//     if (i === 0) {
//       prefixSum[i] = nums[i];
//     } else {
//       prefixSum[i] = nums[i] + prefixSum[i - 1];
//     }

//     if (j === n - 1) {
//       suffixSum[j] = nums[j];
//     } else {
//       suffixSum[j] = nums[j] + suffixSum[j + 1];
//     }
//   }
//   console.log(prefixSum);
//   console.log(suffixSum);
//   let left = 0;
//   let right = prefixSum.length - 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (prefixSum[left] === suffixSum[right]) {
//       return left + 1;
//     }
//     if (prefixSum[left] < suffixSum[right]) {
//       //   console.log("first", left);
//       left++;
//     } else {
//       //   console.log("second", right);
//       right--;
//     }
//   }
// };

// let nums = [1, 2, 3];

// console.log(pivotIndex(nums));
var pivotIndex = function (nums) {
  let n = nums.length;
  let prefixSum = new Array(n);
  let suffixSum = new Array(n);

  for (let i = 0, j = n - 1; i < n; i++, j--) {
    if (i === 0) {
      prefixSum[i] = nums[i];
    } else {
      prefixSum[i] = nums[i] + prefixSum[i - 1];
    }

    if (j === n - 1) {
      suffixSum[j] = nums[j];
    } else {
      suffixSum[j] = nums[j] + suffixSum[j + 1];
    }
  }
  console.log(prefixSum);
  console.log(suffixSum);

  for (let i = 0; i < nums.length; i++) {
    if (prefixSum[i] === suffixSum[i]) {
      return i;
    }
  }
  return -1;
};

let nums = [1, 7, 3, 6, 5, 6];

console.log(pivotIndex(nums));
