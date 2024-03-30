function isPalindrome(s: string): boolean {
    const sClean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    for (let i = 0; i < (sClean.length - 1) / 2; i++)
        if (sClean[i] !== sClean[sClean.length - i - 1]) return false;
    return true
};