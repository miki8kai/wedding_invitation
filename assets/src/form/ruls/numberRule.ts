export const numberRule = (elem: HTMLInputElement): boolean => {
    if (!elem) return false;
    if (!elem.value) return false;
    if (!elem.value.match(/^[0-9]+$/)) return false;

    return true;
};
