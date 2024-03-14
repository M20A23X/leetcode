function pivotInteger(n: number): number {
    // My solution
    if (n === 1) return 1;
    let l = Math.floor(n / 2);
    let r = n;
    let x = Math.floor((l + r) / 2);
    while (l + 1 < r) {
        let sumLeft = 0;
        let sumRight = 0;
        for (let i = 1; i < x; i++)
            sumLeft += i;
        for (let j = x + 1; j <= n; j++)
            sumRight += j;
        if (sumLeft === sumRight)
            return x;
        else if (sumLeft < sumRight)
            l = Math.floor((r + l) / 2);
        else
            r = Math.floor((r + l) / 2);
        x = Math.floor((l + r) / 2);
    }
    return -1;

    // T: O(1), S: O(1)
    // const x = Math.sqrt(n * (n + 1) / 2);
    // if (x % 1 !== 0)
    //     return -1;
    // else
    //     return Math.floor(x);


    // Binary search 
    // T: O(n), S: O(1)
    // let left = 1;
    // let right = n;
    // const totalSum = Math.floor(n * (n + 1) / 2);

    // while (left < right) {
    //     const mid = Math.floor((left + right) / 2);
    //     if (mid * mid - totalSum < 0)
    //         left = mid + 1;
    //     else
    //         right = mid;
    // }

    // if (left * left - totalSum === 0)
    //     return left;
    // else
    //     return -1;
};
