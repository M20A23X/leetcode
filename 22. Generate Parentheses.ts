function generateParenthesis(n: number): string[] {
    const combos: string[] = []
    const data = [{ open: 0, close: 0, str: "" }]

    while (data.length) {
        let { open, close, str } = data.pop();

        if (str.length === n * 2)
            combos.push(str);
        if (open > close)
            data.push({ open, close: close + 1, str: str + ')' });
        if (open < n)
            data.push({ open: open + 1, close, str: str + '(' });
    }

    return combos;
};
