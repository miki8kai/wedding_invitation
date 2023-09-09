import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const messageTopImage = (imgWrap: HTMLSpanElement) => {
    if (!imgWrap) return null;
    gsap.set(imgWrap, { y: 40 });
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(imgWrap, {
        y: -20,
        scrollTrigger: {
            // markers: true,
            trigger: imgWrap,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.3
        }
    });
};

export const messageInnerImage = (imgWrap: HTMLSpanElement) => {
    if (!imgWrap) return null;

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(imgWrap, {
        y: -200,
        scrollTrigger: {
            // markers: true,
            trigger: imgWrap,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 3
        }
    });
};

export const messageBottomImage = (imgWrap: HTMLSpanElement) => {
    if (!imgWrap) return null;
    gsap.set(imgWrap, { y: 120 });
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(imgWrap, {
        y: -60,
        scrollTrigger: {
            // markers: true,
            trigger: imgWrap,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.7
        }
    });
};
