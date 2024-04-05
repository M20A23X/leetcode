function isHappy(n: number): boolean {
    const seen = new Set();
    let num = n;
    while (true) {
        let sum = 0
        for (let d of num.toString())
            sum += Number(d) ** 2;
        if (sum === 1)
            return true;
        if (seen.has(sum))
            return false;
        seen.add(sum);
        num = sum;
    }
};