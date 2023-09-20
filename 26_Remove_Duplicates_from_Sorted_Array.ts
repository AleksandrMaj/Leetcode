function removeDuplicates(nums: number[]): number {
    let pointer1 = 0;
    let length = nums.length;

    for (let pointer2 = 0; pointer2 < length; pointer2++) {
        if (nums[pointer1] < nums[pointer2]) {
            pointer1 += 1;
            nums[pointer1] = nums[pointer2];
        }
    }

    return pointer1 + 1;
};