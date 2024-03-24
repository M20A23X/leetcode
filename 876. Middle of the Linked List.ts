/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const temp: number[] = [...nums1];
    let i = 0, j = 0;
    for (let k = 0; k < m + n; k++) {
        nums1[k] = i < m && temp[i] <= nums2[j] ? temp[i] : (nums2[j] ?? temp[i]);
        if (i < m) {
            if (temp[i] <= nums2[j] || j >= n)
                i++;
            else
                j++;
        }
        else
            j++;
    }
};