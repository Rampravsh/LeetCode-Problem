// Given an integer array nums, find a subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Note that the product of an array with a single element is the value of that element.

// var maxProduct = function (nums) {
//     let largest = 0
//     let product = 1
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             i++
//             product = nums[i]
//         } else {
//             if (product < 0) {
//                 product = nums[i]
//             } else {
//                 product *= nums[i]
//             }
//         }
//         if (product > largest) {
//             largest = product
//         }
//     }
//     return largest
// };

var maxProduct = function (nums) {
  let largest = nums[0];

  let maxProd = nums[0];
  let minProd = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];

    // negative aaya to roles swap
    if (curr < 0) {
      [maxProd, minProd] = [minProd, maxProd];
    }

    maxProd = Math.max(curr, maxProd * curr);
    minProd = Math.min(curr, minProd * curr);

    largest = Math.max(largest, maxProd);
  }

  return largest;
};
// product may be negative so we need to keep track of both max and min products
