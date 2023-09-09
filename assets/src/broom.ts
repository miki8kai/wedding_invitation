import { addDelayIncrementAnimation, getCharElemList } from './delayIncrementAnimation';

export const broomEnglish = (broom: HTMLSpanElement) => {
    if (!broom) return;
    if (!broom.textContent) return;

    const charElemList = getCharElemList(broom.textContent);
    broom.textContent = '';
    addDelayIncrementAnimation(charElemList, broom, 60);
};

export const broomJapanese = (broom: HTMLSpanElement) => {
    if (!broom) return;
    if (!broom.textContent) return;

    const charElemList = getCharElemList(broom.textContent);
    broom.textContent = '';
    addDelayIncrementAnimation(charElemList, broom, 65);
};
