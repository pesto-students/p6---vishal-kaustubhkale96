let prices = [7, 1, 5, 3, 6, 4];

function returnProfit(prices) {
    profit = 0;
    for (let i = prices.length - 1; i >= 0; i--) {

        //Go through the elements behind it
        for (let j = i - 1; j > -1; j--) {
            if (prices[i] - prices[j] > profit) {
                profit = prices[i] - prices[j]
            }
        }
    };
    return profit
}

console.log(returnProfit(prices));