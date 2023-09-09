export const locality = (locality: HTMLInputElement, textContent: string) => {
    if (!locality) return;
    if (!textContent) return;
    locality.value = textContent;
};
