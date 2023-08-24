function maximumWealth(accounts: number[][]): any {
    return Math.max(...accounts.map(currentAccount => {
        return currentAccount.reduce((total, currentValue) => {
            return total += currentValue;
        })
    }));
};
