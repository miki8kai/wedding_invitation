export const maxStringLengthRule = (elem: HTMLInputElement, limit: number): boolean => {
    if (!elem) return false;
    if (!elem.value) return false;
    if (elem.value.length > limit) return false;

    return true;
};
