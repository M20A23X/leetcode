function hammingWeight(n: number): number {
    let num = n;
    let weight = 0;
    while (num) {
        if (num & 1) weight++;
        num >>>= 1;
    }
    return weight;
};