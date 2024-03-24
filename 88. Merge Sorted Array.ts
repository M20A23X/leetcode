function twoSum(nums: number[], target: number): number[] {
    // Hash map
    let hashMap = [];
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (hashMap[complement]?.length) return [hashMap[complement], i];
        hashMap[nums[i]] = [i]
    }

    // 2-pointer
    // let sortedNums = [...nums].sort((a, b) => a - b);
    // let leftIndex = 0;
    // let rightIndex = nums.length - 1;

    // while (leftIndex < rightIndex) {
    //     let sum = sortedNums[leftIndex] + sortedNums[rightIndex];
    //     if (sum === target) return [nums.indexOf(sortedNums[leftIndex]), nums.lastIndexOf(sortedNums[rightIndex])];
    //     else if (sum < target) leftIndex++;
    //     else rightIndex--;
    // }

    // Brute force
    // for (let firstIndex = 0; firstIndex < nums.length - 1; firstIndex++)
    //     for (let secondIndex = firstIndex + 1; secondIndex < nums.length; secondIndex++)
    //         if (nums[firstIndex] + nums[secondIndex] === target)
    //             return [firstIndex, secondIndex];
};
