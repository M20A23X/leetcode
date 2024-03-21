function strStr(haystack: string, needle: string): number {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let j = 1;
            let k = i + 1;
            while (j < needle.length && haystack[k] === needle[j]) {
                k++;
                j++;
            }
            if (j === needle.length) return i;
        }
    }
    return -1;
};