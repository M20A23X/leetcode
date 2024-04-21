const INT_MIN = -(2 ** 31);
const INT_MAX = 2 ** 31 - 1;
function myAtoi(s) {
    const matchResult = s.match(/^\s*(-|\+)?([0-9]+)/);
	if (!matchResult) return 0;
    const resultNum = Number((matchResult[1] ?? '') + matchResult[2]);
    if (isNaN(resultNum))
        return matchResult[1] === '-' ? INT_MIN : INT_MAX;
    return resultNum;
};

console.log(myAtoi("w"), INT_MIN.toString());