
function spiralOrder(matrix) {
    let startCol = 0, startRow = 0, endCol = matrix[0].length, endRow = matrix.length
    console.log(startCol, startRow, endCol, endRow)
    let result = [];
    while (startCol < endCol && startRow < endRow) {
        //Starting from 1st row
        for (let i = startCol; i < endCol; i++) {
            result.push(matrix[startRow][i])
        }
        startRow++

        // Adding last col
        for (let i = startRow; i < endRow; i++) {

            result.push(matrix[i][endCol - 1])
        }
        endCol--

        // Adding last row
        for (let i = endCol - 1; i > startCol - 1; i--) {
            result.push(matrix[endRow - 1][i])
        }
        endRow--

        // Adding first col
        for (let i = endRow; i > startRow; i--) {
            result.push(matrix[i - 1][startCol])
        }
        startCol++

        if (!(startCol < endCol && startRow < endRow)) {
            break
        }

    }
    return result

};

let matrix1 = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]
console.log(spiralOrder(matrix1))

// let matrix2 = [[1, 2, 3, 4],
// [5, 6, 7, 8],
// [9, 10, 11, 12]]
// console.log(spiralOrder(matrix2))

// let matrix3 = [[1, 2, 3, 4],
// [5, 6, 7, 8],
// [9, 10, 11, 12],
// [13, 14, 15, 16]]
// console.log(spiralOrder(matrix3))