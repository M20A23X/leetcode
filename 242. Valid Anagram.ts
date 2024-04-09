function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const count: { [k: string]: number } = {};
    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === undefined) count[s[i]] = 0;
        if (count[t[i]] === undefined) count[t[i]] = 0;
        count[s[i]]++;
        count[t[i]]--;
    }
    for (const key in count)
        if (!count[key]) delete count[key];
    return Object.keys(count).length === 0;
};