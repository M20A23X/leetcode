const CharDict: string[] = ['a', 'd', 'g', 'j', 'm', 'p', 't', 'w', String.fromCharCode('z'.charCodeAt(0) + 1)];
const getCharCode = (digit: number) => CharDict[digit - 2].charCodeAt(0);
const generateChars = (digit: number): string[] => {
    const charCode: number = getCharCode(digit);
    const charsCount: number = getCharCode(digit + 1) - charCode;
    return Array.from(Array<string>(charsCount)).map((_, index: number) => String.fromCharCode(charCode + index));
}

const intersect = (chars1: string[], chars2: string[]): string[] => {
    const result: string[] = [];

    if (chars1.length === 0) return chars2;
    if (chars2.length === 0) return chars1;

    for (let i = 0; i < chars1.length; i++)
        for (let j = 0; j < chars2.length; j++)
            result.push(chars1[i] + chars2[j]);
    return result;
}

function letterCombinations(digits: string): string[] {
    let result: string[] = [];
    for (let i = 0; i < digits.length; i++) {
        const digit: number = parseInt(digits[i]);
        result = intersect(result, generateChars(digit));
    }
    return result;
}
