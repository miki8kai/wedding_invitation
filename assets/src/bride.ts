import { addDelayIncrementAnimation, getCharElemList } from './delayIncrementAnimation';

export const brideEnglish = (bride: HTMLSpanElement) => {
    if (!bride) return;
    if (!bride.textContent) return;

    const charElemList = getCharElemList(bride.textContent);
    bride.textContent = '';
    addDelayIncrementAnimation(charElemList, bride, 60);
};

export const brideJapanese = (bride: HTMLSpanElement) => {
    if (!bride) return;
    if (!bride.textContent) return;

    const charElemList = getCharElemList(bride.textContent);
    bride.textContent = '';
    addDelayIncrementAnimation(charElemList, bride, 65);
};
