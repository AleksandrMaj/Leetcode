function isValid(s: string): boolean {
    if(s.length % 2 !== 0) return false;

    let stack: string[] = [];

    const map = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if(char in map) {
           if (map[char] !== stack.pop()) {
                return false;
            }
            continue;
        }
        stack.push(char);
    }
    return stack.length === 0;
};