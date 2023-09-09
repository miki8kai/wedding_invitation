import * as bodyScrollLock from 'body-scroll-lock';
import { RESULT_DISPLAY } from '.';

const formReset = () => {
    const form = <HTMLFormElement>document.getElementById('js-form');
    if (!form) return;
    form.reset();
};

export const resultCloseButton = (lineList: HTMLUListElement, result: HTMLDialogElement) => {
    if (!lineList) return;
    if (!result) return;
    lineList.addEventListener('click', () => {
        result.classList.remove(RESULT_DISPLAY);
        const enableBodyScroll = bodyScrollLock.enableBodyScroll;
        enableBodyScroll(result);

        formReset();
    });
};
