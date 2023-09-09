export const matchRelationshipRule = (elem: HTMLInputElement): boolean => {
    if (!elem) return false;
    if (!elem.value) return false;
    if (!elem.value.match(/room|bride|both/)) return false;

    return true;
};
