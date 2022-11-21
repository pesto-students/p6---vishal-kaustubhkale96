
function maxSubArray(nums) {
    let max = -Infinity
    let temp = 0
    for (let i = 0; i < nums.length; i++) {
        temp = Math.max(nums[i], nums[i] + temp)
        max = temp > max ? temp : max
    }
    return max
};
let arr = [1, 2, 3, 4];
// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
maxSubArray(arr);