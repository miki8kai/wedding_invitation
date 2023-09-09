export const validateInputPostCode = (text: string): boolean => {
    if (!text) return false;
    if (text.length != 7) return false;
    if (!/^[0-9]+$/.test(text)) return false;
    return true;
};
