export const isEqual = (val1: any, val2: any): boolean => {
    return JSON.stringify(val1) === JSON.stringify(val2);
};
