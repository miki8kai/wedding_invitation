import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const eventsCardTitle = (title: HTMLSpanElement) => {
    if (!title) return;
    if (!title.textContent) return;
    
    const charList = title.textContent.split('')
    const charElemList = charList.map(char => {
        const span = document.createElement('span');
        span.textContent = char
        return span
    });
    title.textContent = '';

    gsap.registerPlugin(ScrollTrigger);
    charElemList.forEach((elem, idx)=> {
        const delayIncrement = idx;
        title.appendChild(elem);
        gsap.from(elem, {
            opacity: 0,
            duration: 0.5,
            delay: delayIncrement * 0.05,
            scrollTrigger: {
                // markers: true,
                trigger: elem,
                start: 'top 80%',
            }
        });
    });
}