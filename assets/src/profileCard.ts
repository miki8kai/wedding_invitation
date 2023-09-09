import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const profileCardBroom = (card: HTMLDivElement) => {
    if (card == null) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(card, { opacity: 0, y: 30 });
    gsap.to(card, {
        opacity: 1,
        duration: 0.2,
        y: 0,
        scrollTrigger: {
            // markers: true,
            trigger: '#js-profile-broom',
            start: 'top 65%',
            end: 'bottom bottom',
            toggleActions: 'play none none reverse'
        }
    });
};

export const profileCardBride = (card: HTMLDivElement) => {
    if (card == null) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(card, { opacity: 0, y: 30 });
    gsap.to(card, {
        opacity: 1,
        duration: 0.2,
        y: 0,
        scrollTrigger: {
            // markers: true,
            trigger: '#js-profile-bride',
            start: 'top 65%',
            end: 'bottom bottom',
            toggleActions: 'play none none reverse'
        }
    });
};
