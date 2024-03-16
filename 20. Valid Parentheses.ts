type valueOf<T> = T[keyof T];

const bracketMap = {
    ')': '(',
    '}': '{',
    ']': '['
} as const;

function isValid(s: string): boolean {
    const stack: string[] = [];
    for (const char of s) {
        if (Object.values(bracketMap).includes(char as valueOf<typeof bracketMap>))
            stack.push(char);
        else if (stack[stack.length - 1] === bracketMap[char])
            stack.pop();
        else return false;
    }
    return stack.length === 0;
}; 