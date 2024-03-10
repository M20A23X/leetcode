function maxFrequencyElements(nums: number[]): number {
    let maxsCount = 0;
    let max = 0;
    let frequencies = [];
    for (let n of nums) {
        if (!frequencies[n]) frequencies[n] = 0;
        frequencies[n]++;
        if (frequencies[n] > max) {
            max = frequencies[n];
            maxsCount = 0;
        }
        if (frequencies[n] === max) maxsCount++;
    }
    return maxsCount * max;
};

