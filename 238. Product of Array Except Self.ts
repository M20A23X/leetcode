function productExceptSelf(nums: number[]): number[] {
    const answer: number[] = [];
    let mult = 1;
    for (let i = 0; i < nums.length; i++) {
        answer[i] = mult;
        mult *= nums[i];
    }
    mult = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        answer[j] *= mult;
        mult *= nums[j];
    }
    return answer;
};