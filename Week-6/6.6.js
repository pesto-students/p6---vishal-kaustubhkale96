
function closeSumInt(nums, target) {
    nums.sort((c, b) => { return c - b })
    let diff = Infinity
    let result = 0
    for (let ind = 0; ind < nums.length; ind++) {
        let left = ind + 1
        let right = nums.length - 1
        while (left < right) {
            let summ = nums[ind] + nums[left] + nums[right]
            if (Math.abs(target - summ) < diff) {
                diff = Math.abs(target - summ)
                result = summ
            }
            if (summ < target) {
                left += 1
            }
            else {
                right -= 1
            }
        }

    }
    return result


};
arr1 = [-1, 2, 1, -4]; target1 = 1;
console.log(closeSumInt(arr1, target1))