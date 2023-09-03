import { addDelayIncrementAnimation, getCharElemList } from "./delayIncrementAnimation";

export const placeAddress = (placeAddress: HTMLPreElement) => {
    if (!placeAddress) return;
    if (!placeAddress.textContent) return;

    const charElemList = getCharElemList(placeAddress.textContent)
    placeAddress.textContent = '';
    addDelayIncrementAnimation(charElemList, placeAddress);
}