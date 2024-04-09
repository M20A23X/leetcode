function missingNumber(nums: number[]): number {
    let max = 0;
    let sum = 0;
    for (const n of nums) {
        if (n > max) max = n;
        sum += n;
    }
    if (max === nums.length - 1) return max + 1;
    return 0.5 * (max + 1) * (max) - sum;
};