function longestCommonPrefix(strs: string[]): string {
    const commonPrefix = strs.reduce((commonPrefix, str) => {
        if (str.startsWith(commonPrefix))
            return commonPrefix;
        else {
            let prefix = commonPrefix;
            while (prefix.length) {
                prefix = prefix.slice(0, -1);
                if (str.startsWith(prefix))
                    return prefix;
            }
        }
    }, strs[0]);
    return commonPrefix;
};
