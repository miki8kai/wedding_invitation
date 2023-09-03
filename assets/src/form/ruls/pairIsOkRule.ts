

export const pairIsOkRule = (pair: HTMLLIElement): boolean => {
    if (!pair) return false;
    const isOk = pair.dataset.isOk;
    if (!isOk) return false;
    if (isOk === 'false') return false;

    return true;
}

export const addOk = (pair: HTMLLIElement) => {
    if (!pair) throw Error("引数が正しくありません");
    pair.dataset.isOk = 'true';
}

export const addError = (pair: HTMLLIElement) => {
    if (!pair) throw Error("引数が正しくありません");
    pair.dataset.isOk = 'false'
}