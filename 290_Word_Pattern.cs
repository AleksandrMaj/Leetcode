public class Solution {
    public bool WordPattern(string pattern, string s) {
        Dictionary<char,string> dic = new Dictionary<char,string>();
        Dictionary<string,char> rev = new Dictionary<string,char>();
    	string[] split = s.Split(" ");

        if(pattern.Length != split.Length) return false;

        for(int i = 0; i < pattern.Length; i++) {
            if(dic.ContainsKey(pattern[i]) && dic[pattern[i]] != split[i]) return false;
            if(rev.ContainsKey(split[i]) && rev[split[i]] != pattern[i]) return false;
            dic.TryAdd(pattern[i], split[i]);
            rev.TryAdd(split[i], pattern[i]);
        }
        return true;
    }
}
