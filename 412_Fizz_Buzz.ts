function fizzBuzz(n: number): string[] {
    let answer: string[] = [];
    
    for(let i = 1;i<=n;i++) {
        const item = i % 15 == 0? "FizzBuzz" : i % 3 == 0 ? "Fizz" : i % 5 == 0?     "Buzz" : i.toString();
        answer.push(item);
    }

    return answer
};
