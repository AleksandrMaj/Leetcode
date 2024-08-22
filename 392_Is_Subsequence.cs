public class Solution {
    public bool IsSubsequence(string s, string t) {
        if(s.Equals(t)) return true;
        if(s.Length == 0) return true;
        if(t.Length == 0) return false;

        int j = 0;

        for(int i=0;i<t.Length;i++) {
            if(t[i].Equals(s[j])) {
                j++;
                if(j == s.Length) return true;
            }
        }

        return j == s.Length;
    }
}
