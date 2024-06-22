function threeSum(nums: number[]): number[][] {
    nums.sort((b, a) => b - a);
    const map: { [K: string]: boolean } = {};

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left: number = i + 1;
        let right: number = nums.length - 1;
        while (left < right) {
            const sum: number = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                const result: string = JSON.stringify([nums[i], nums[left], nums[right]]);
                if (!(result in map)) map[result] = true;
                left++;
            } else if (sum < 0)
                left++;
            else
                right--;
        }

    }

    return Object.keys(map).map(item => JSON.parse(item));
}

const nums: number[] = [0, 0, 0];
console.log(threeSum(nums));