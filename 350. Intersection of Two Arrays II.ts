function intersect(nums1: number[], nums2: number[]): number[] {
    const seen: { [key: number]: number } = {};
    const result = [];
    for (const num of nums1) {
        if (!seen[num]) seen[num] = 0;
        seen[num]++;
    }
    for (const num of nums2) {
        if (seen[num]) {
            result.push(num);
            seen[num]--;
        }
    }
    return result;

};