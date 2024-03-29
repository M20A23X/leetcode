function majorityElement(nums: number[]): number {
    const count: { [k: number]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        if (!count[nums[i]]) count[nums[i]] = 0;
        count[nums[i]]++;
    }
    for (const key in count)
        if (count[key] > nums.length / 2) return parseInt(key);
};