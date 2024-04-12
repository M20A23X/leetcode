function isPowerOfThree(n: number): boolean {
    if (n < 1) return false;
    const log = Math.log(n) / Math.log(3);
    return log.toFixed(10) === Math.trunc(log).toFixed(10);
};