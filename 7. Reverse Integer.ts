const MIN_INT = -(2 ** 31);
const MAX_INT = 2 ** 31 - 1;
function reverse(x: number): number {
    let temp = x;
    let pow = -1;
    let result = 0;
    while (temp) {
        pow++;
        temp = Math.trunc(temp / 10);
    }
    while (x) {
        const dig = x % 10;
        result += dig * 10 ** pow;
        x = Math.trunc(x / 10);
        pow--;
    }
    return result < MIN_INT || MAX_INT < result ? 0 : result;
};