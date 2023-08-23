function numberOfSteps(num: number): number {
    let steps: number = 0;

    for(let i: number = num; i > 0;) {
        i = i % 2 == 0 ? i / 2 : i - 1;
        steps++;
    }
    return steps;
};
