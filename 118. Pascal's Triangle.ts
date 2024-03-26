function generate(numRows: number): number[][] {
    const result: number[][] = [[1]];
    for (let i = 1; i < numRows; i++) {
        const row: number[] = [1];
        for (let j = i - 1; j > 0; j--)
            row.push(result[i - 1][j - 1] + result[i - 1][j]);
        row.push(1);
        result.push(row);
    }
    return result;
};