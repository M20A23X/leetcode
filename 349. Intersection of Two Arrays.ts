function intersection(nums1: number[], nums2: number[]): number[] {
    // My solution
    // T: O(n+m); S: O(n+m)
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const result = [];
    for (const num of set2)
        if (set1.has(num)) result.push(num);
    return result;


    // One Dictionary
    // T: (A) O(n+m), (W) O(n×m); S: O(n)

    // const seen: { [key: number]: boolean } = {};
    // const result = [];
    // for (const num of nums1)
    //     seen[num] = true;
    // for (const num of nums2) {
    //     if (seen[num]) {
    //         result.push(num);
    //         seen[num] = false;
    //     }
    // }
    // return result;


    // 2-pointers
    // T: O(nlogn+mlogm), S: O(n+m)

    // nums1.sort();
    // nums2.sort();
    // let pointer1 = 0;
    // let pointer2 = 0;

    // const intersection = new Set<number>();
    // while (pointer1 < nums1.length && pointer2 < nums2.length) {
    //     if (nums1[pointer1] === nums2[pointer2]) {
    //         intersection.add(nums1[pointer1]);
    //         pointer1++;
    //         pointer2++;
    //     } else if (nums1[pointer1] < nums2[pointer2])
    //         pointer1++;
    //     else
    //         pointer2++;
    // }
    // return Array.from(intersection);
};
