/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < (nums.length - i - 1); j++) {
            if (!nums[j] && nums[j + 1]) {
                const temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp
            }
        }
    }

    // 2-pointer
    let writePointer = 0;
    for (let readPointer = 0; readPointer < nums.length; readPointer++) {
        const val = nums[readPointer];
        nums[readPointer] = 0;
        if (val !== 0) {
            nums[writePointer] = val;
            writePointer++;
        }
    }
};