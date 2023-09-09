export const kanaInputRule = (elem: HTMLInputElement): boolean => {
    if (!elem) return false;
    if (!elem.value) return false;
    if (!elem.value.match(/^[ァ-ンー ]+$/)) return false;

    return true;
};
