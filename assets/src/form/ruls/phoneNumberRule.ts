
export const phoneNumberRule = (elem: HTMLInputElement): boolean => {
    if (!elem) return false;
    if (!elem.value) return false;
    if (!elem.value.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/)) return false;

    return true;
}