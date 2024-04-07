function containsDuplicate(nums: number[]): boolean {
    const seen: { [k: number]: boolean } = {};
    for (const num of nums) {
        if (seen[num]) return true;
        seen[num] = true;
    }
    return false;
};