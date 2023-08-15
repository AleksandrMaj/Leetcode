import java.io.*;
import java.util.*;

class Solution {

    public static Hashtable<Character, Integer> lib = new Hashtable<>();
        
        static {
            lib.put('I',1);
            lib.put('V',5);
            lib.put('X',10);
            lib.put('L',50);
            lib.put('C',100);
            lib.put('D',500);
            lib.put('M',1000);
        }
        
    public int romanToInt(String s) {

        int num = 0;
        int length = s.length();

        for(int i = 0; i < length; i++) {
            if(i != (length-1) && lib.get(s.charAt(i)) < lib.get(s.charAt(i+1))) {
                num -= lib.get(s.charAt(i));
                continue;
            }
            num += lib.get(s.charAt(i));
        }
        return num;
    }
}
