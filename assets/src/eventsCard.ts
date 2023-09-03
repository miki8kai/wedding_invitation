import { addDelayIncrementAnimation, getCharElemList } from "./delayIncrementAnimation";

export const eventsCardTitleEnglish = (title: HTMLSpanElement) => {
    if (!title) return;
    if (!title.textContent) return;
    
    const charElemList = getCharElemList(title.textContent)
    title.textContent = '';
    addDelayIncrementAnimation(charElemList, title);
}

export const eventsCardTitleJapanese = (title: HTMLSpanElement) => {
    if (!title) return;
    if (!title.textContent) return;
    
    const charElemList = getCharElemList(title.textContent)
    title.textContent = '';
    addDelayIncrementAnimation(charElemList, title);
}