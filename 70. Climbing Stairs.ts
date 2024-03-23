function climbStairs(n: number): number {
    let prev = 1;
    let prev2 = 1;
    for (let i = 2; i <= n; i++) {
        const current = prev + prev2;
        prev2 = prev;
        prev = current;
    }
    return prev;
}; 
