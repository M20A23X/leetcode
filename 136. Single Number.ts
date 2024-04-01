function singleNumber(nums: number[]): number {
    return nums.reduce((prev, curr) => curr ^ prev, 0);
};