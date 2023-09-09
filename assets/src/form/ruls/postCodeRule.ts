export const postCodeRule = (elem: HTMLInputElement): boolean => {
    if (!elem) return false;
    if (!elem.value) return false;
    if (!elem.value.match(/^\d{7}$/)) return false;

    return true;
};
