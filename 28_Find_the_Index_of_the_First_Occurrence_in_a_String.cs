public class Solution {
    public int StrStr(string haystack, string needle) {
        int haystackLength = haystack.Length;
        int needleLength = needle.Length;

        if (haystackLength < needleLength) return -1;
        if(haystackLength == 0 || needleLength == 0) return -1;

        for(int i = 0; i <= haystackLength - needleLength; i++) {
            bool mismatch = false;

            for(int j = 0; j < needleLength; j++) {
                if(haystack[i + j] != needle[j]) {
                    mismatch = true;
                    break;
                }
            }

            if(!mismatch) {
                return i;
            }
        }

        return -1;
    }
}