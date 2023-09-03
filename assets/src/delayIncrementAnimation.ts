import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const getCharElemList = (textContents: string): HTMLSpanElement[] => {
    if (!textContents) throw Error("引数が正しくありません");
    if (textContents.length <= 0) throw Error("引数が正しくありません");

    const charList = textContents.split('');
    return charList.map(char => {
        const span = <HTMLSpanElement>document.createElement('span');
        span.textContent = char
        return span
    });
}

export const addDelayIncrementAnimation = (charElems: HTMLSpanElement[], parentElem: HTMLElement, top: number = 80) => {
    if (!charElems) throw Error("引数が正しくありません");
    if (charElems.length <= 0) throw Error("引数が正しくありません");
    if (!parentElem) throw Error("引数が正しくありません");

    gsap.registerPlugin(ScrollTrigger);
    charElems.forEach((elem, idx)=> {
        const delayIncrement = idx;
        parentElem.appendChild(elem);
        gsap.from(elem, {
            opacity: 0,
            duration: 0.5,
            delay: delayIncrement * 0.05,
            scrollTrigger: {
                // markers: true,
                trigger: elem,
                start: `top ${top}%`,
            }
        });
    });
}