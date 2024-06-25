function longestPalindrome(s: string): string {
    const grow = (i: number, j: number): string => {
        while (i >= 0 && j < s.length && s[i] === s[j]) {
            i--;
            j++;
        }
        return s.slice(i + 1, j);
    }

    let result = '';
    for (let i = 0; i < s.length; i++) {
        const odd: string = grow(i, i);
        if (odd.length > result.length) {
            result = odd;
        }
        const even: string = grow(i, i + 1);
        if (even.length > result.length) {
            result = even;
        }
    }

    return result;
};