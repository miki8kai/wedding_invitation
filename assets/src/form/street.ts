
export const street = (street: HTMLInputElement, textContent: string) => {
    if (!street) return;
    if (!textContent) return;
    street.value = textContent;
}
