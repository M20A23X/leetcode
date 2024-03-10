function getCommon(nums1: number[], nums2: number[]): number {
    // Set
    const set = new Set(nums1);
    for (const num of nums2) {
        if (set.has(num))
            return num;
    }
    return -1;

    // 2-pointer
    if (nums1[0] > nums2[nums2.length - 1])
        return -1;
    if (nums1[0] === nums2[nums2.length - 1])
        return nums1[0];

    let minCommon = -1;
    let first = 0;
    let second = 0;

    while (minCommon === -1 && first < nums1.length && second < nums2.length) {
        if (nums1[first] === nums2[second]) {
            minCommon = nums1[first];
            continue;
        }

        if (nums1[first] > nums2[second])
            second++;
        if (nums1[first] < nums2[second])
            first++;
    }

    return minCommon;
};
