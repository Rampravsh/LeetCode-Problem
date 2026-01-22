/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let n = nums.length
    if(n==1||n==0){
        return nums
    }
    if (k >= n) {
        k = k % n
    }
    if (k == 0) {
        return nums
    }
    let s = nums.splice(-k)
    nums.unshift(...s)
};