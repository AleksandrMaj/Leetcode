public class Solution {
    public int RemoveElement(int[] nums, int val) {
        int firstIndex = 0;

        for(int i = 0; i < nums.Length; i++) {
            int num = nums[i];
            if(num == val) continue;
            nums[firstIndex] = num;
            firstIndex++;
        }
        
        return firstIndex;
    }
}