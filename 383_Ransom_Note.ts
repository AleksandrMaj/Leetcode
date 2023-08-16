function canConstruct(ransomNote: string, magazine: string): boolean {
    if(ransomNote.length > magazine.length) return false;
    
    let mag: string[] = [...magazine];

    for(let i = 0; i < ransomNote.length; i++) {
        const letter = ransomNote.charAt(i);

        if(!mag.includes(letter)) {
            return false;
        }
        delete mag[mag.indexOf(letter)];
    }
    return true;
};
