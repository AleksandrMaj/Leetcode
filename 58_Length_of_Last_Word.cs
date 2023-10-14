public class Solution {
    public int LengthOfLastWord(string s) {
        s = s.Trim();
        return s.Substring(s.LastIndexOf(" ") + 1).Length;
    }
}