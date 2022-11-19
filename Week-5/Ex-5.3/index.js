function hasDuplicate(arr) {

    let arrSet = new Set(arr);
    return arrSet.size !== arr.length;

}

console.log(hasDuplicate([1, 2, 1, 3, 4, 3, 5, 6, 5]));
console.log(hasDuplicate([1, 2, 3, 4, 5, 6, 7]));

function hasDuplicate1(nums) {
    return nums.some((e, i) => nums.indexOf(e) != i)
};
console.log(hasDuplicate1([1, 2, 1, 3, 4, 3, 5, 6, 5]))