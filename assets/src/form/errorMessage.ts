export const errorMessage = (parentElem: HTMLLIElement, text: string) => {
    if (!parentElem) return;
    if (text == null || text == '') return;
    if (parentElem.querySelector('.error-text')) return;

    const spanErrorElem = document.createElement('span');
    spanErrorElem.classList.add('error-text');
    spanErrorElem.textContent = text;

    parentElem.append(spanErrorElem);
};

export const removeErrorMessage = (parentElem: HTMLLIElement) => {
    if (!parentElem) return;
    const errorElem = <HTMLSpanElement>parentElem.querySelector('.error-text');
    if (errorElem) errorElem.remove();
};
