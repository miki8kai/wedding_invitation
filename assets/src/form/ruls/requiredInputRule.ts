
export const requiredInputRule = (elem: HTMLInputElement): boolean => {
    if (!elem) return false;
    if (elem == null) return false;
    if (elem == undefined) return false;
    if (elem.value == '') return false;
    if (elem.value.length <= 0) return false;

    return true;
}

export const requiredSelectRule = (elem: HTMLSelectElement): boolean => {
    if (!elem) return false;
    if (elem == null) return false;
    if (elem == undefined) return false;
    if (elem.selectedIndex < 0) return false;
    if (!elem.options[elem.selectedIndex].value) return false;
    if (elem.options[elem.selectedIndex].value == '') return false;

    return true;
}