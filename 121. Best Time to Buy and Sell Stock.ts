function maxProfit(prices: number[]): number {
    let min = prices[0];
    let maxDiff = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min)
            min = prices[i];
        else if (prices[i] - min > maxDiff)
            maxDiff = prices[i] - min;
    }
    return maxDiff;
};