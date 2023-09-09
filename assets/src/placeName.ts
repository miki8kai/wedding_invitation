import { addDelayIncrementAnimation, getCharElemList } from './delayIncrementAnimation';

export const placeName = (placeName: HTMLHeadElement) => {
    if (!placeName) return;
    if (!placeName.textContent) return;

    const charElemList = getCharElemList(placeName.textContent);
    placeName.textContent = '';
    addDelayIncrementAnimation(charElemList, placeName);
};
