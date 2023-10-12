public class Solution {
    public int MajorityElement(int[] nums) {
        int appearanceToReach = nums.Length / 2;
        int mostFound = nums[0];
        int amountOfAppearances = 1;
        Dictionary<int, int> cache = new Dictionary<int, int>();

        foreach(int num in nums) {
            if(!cache.ContainsKey(num)) {
                cache.Add(num,1);
                continue;
            }

            cache[num] += 1;

            if(cache[num] >= appearanceToReach && cache[num] >= amountOfAppearances) {
                mostFound = num;
                amountOfAppearances = cache[num];
            }
        }
        return mostFound;
    }
}
