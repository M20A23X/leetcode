function firstUniqChar(s: string): number {
    const seen: { [k: string]: number } = {};
    for (let i = 0; i < s.length; i++) {
        if (seen[s[i]] > -1) seen[s[i]] = -1;
        else if (seen[s[i]] !== -1) seen[s[i]] = i;
    }
    for (const key in seen)
        if (seen[key] > -1) return seen[key];
    return -1;
};