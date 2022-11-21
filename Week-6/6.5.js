
function pairDiff(arr, n) {
    // Init positions of two elements
    let i = 0;
    let j = 1;

    // Search for a pair
    while (i < arr.length && j < arr.length) {
        if (i != j && arr[j] - arr[i] == n) {
            console.log("Pair Found:", arr[i], ",", arr[j]);
            return 1;
        } else if (arr[j] - arr[i] < n)
            j++;
        else
            i++;
    }

    // console.log("No such pair");
    return 0;
}

console.log(pairDiff([-10, 20], 30))