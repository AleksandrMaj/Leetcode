//Solution 1
public class Solution {
    public bool IsIsomorphic(string s, string t) {
        if(s.Length != t.Length) return false;

        Dictionary<char, char> dic = new Dictionary<char, char>();
        Dictionary<char, char> dicRev = new Dictionary<char, char>();

        StringBuilder sb = new StringBuilder();
        for(int i=0; i < s.Length; i++) {
            if(dicRev.ContainsKey(t[i]) && dicRev[t[i]] != s[i]) return false;
            dic.TryAdd(s[i],t[i]);
            dicRev.TryAdd(t[i],s[i]);
            sb.Append(dic[s[i]]);
        }

        return sb.ToString().Equals(t);
    }
}

//Solution 2
public class Solution {
    public bool IsIsomorphic(string s, string t) {
        if(s.Length != t.Length) return false;

        Dictionary<char, char> dic = new Dictionary<char, char>();
        Dictionary<char, char> dicRev = new Dictionary<char, char>();

        for(int i=0; i < s.Length; i++) {
            if(dic.ContainsKey(s[i]) && dic[s[i]] != t[i] || dicRev.ContainsKey(t[i]) && dicRev[t[i]] != s[i]) 
                return false;
            
            dic.TryAdd(s[i],t[i]);
            dicRev.TryAdd(t[i],s[i]);
        }

        return true;
    }
}
