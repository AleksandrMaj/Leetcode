function longestCommonPrefix(strs: string[]): string {
    let smallest = strs[0];
    for (let i: number = 1; i < strs.length; i++) 
        if (smallest > strs[i]) smallest = strs[i];

    for(let i = smallest.length; i > 0; i--) {
        const noMatch = strs.every((currentValue) => {
            return currentValue.slice(0,i) === smallest.slice(0,i)
        })

        if(noMatch) return smallest.slice(0,i);
    }
    return "";
};
