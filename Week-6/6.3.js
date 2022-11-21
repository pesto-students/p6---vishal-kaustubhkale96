
function sort(arr) {
    for (let i = 0; i < arr.length; i++) {

        //Go through the elements behind i
        for (let j = i - 1; j > -1; j--) {

            //value comparison using ascending order
            if (arr[j + 1] < arr[j]) {

                //swap
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    };
    return arr;
}
console.log(sort([0, 1, 2, 1, 0, 2]));