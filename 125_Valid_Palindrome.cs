using System.Text.RegularExpressions;

public class Solution {
    public bool IsPalindrome(string s) {
        if(s == "") return true;
        if(s.Length == 1) return true;
        
        s = Regex.Replace(s, "[^a-zA-Z0-9]", "");
        s = s.ToLower();

        for(int start = 0; start < s.Length/2; start++) {
            if(s[start] != s[s.Length - 1 - start]) return false;
        }

        return true;
    }
}
