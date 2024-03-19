function mySqrt(x: number): number {
    for (let i = 0; i <= x; i++) {
        if (i * i <= x && x < (i + 1) * (i + 1))
            return i;
    }
};