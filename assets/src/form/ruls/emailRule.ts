export const emailRule = (elem: HTMLInputElement): boolean => {
    if (!elem) return false;
    if (!elem.value) return false;
    if (!elem.value.match(/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/)) return false;

    return true;
};
