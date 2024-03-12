function customSortString(order: string, s: string): string {
    // T: O(n), S: O(n)
    const charsCountMap: { [key: string]: number } = {};
    let result = '';
    s.split('').forEach(char => {
        if (!charsCountMap[char])
            charsCountMap[char] = 0
        charsCountMap[char]++;
    });
    for (let char of order) {
        if (s.indexOf(char) !== -1)
            result = result.concat(char.repeat(charsCountMap[char]));
        delete charsCountMap[char];
    }
    for (let char in charsCountMap)
        result = result.concat(char.repeat(charsCountMap[char]));

    return result;
};
