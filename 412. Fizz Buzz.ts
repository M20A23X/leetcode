function fizzBuzz(n: number): string[] {
    const answer: string[] = new Array(n);
    for (let i = 1; i <= n; i++) {
        if (!(i % 3) && !(i % 5)) answer[i - 1] = "FizzBuzz";
        else if (!(i % 3)) answer[i - 1] = "Fizz";
        else if (!(i % 5)) answer[i - 1] = "Buzz";
        else answer[i - 1] = i.toString();
    }
    return answer;
};