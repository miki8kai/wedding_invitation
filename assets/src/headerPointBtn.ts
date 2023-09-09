import { gsap } from 'gsap';
import { DRAWER_TOKEN, POINT_BUTTON_TOKEN } from '.';

export const headerPointBtn = (pointList: HTMLUListElement) => {
    if (!pointList) return;

    // PCのみ適応
    if (window.matchMedia('(min-width: 1025px)').matches) {
        mouseover(pointList);
        mouseleave(pointList);
    }
    onClick(pointList);
};

const onClick = (pointList: HTMLUListElement) => {
    const drawerElem = <HTMLUListElement>document.getElementById('js-drawer');
    if (!drawerElem) return;

    pointList.addEventListener('click', () => {
        pointList.classList.toggle(POINT_BUTTON_TOKEN);
        drawerElem.classList.toggle(DRAWER_TOKEN);
    });
};

const mouseover = (pointList: HTMLUListElement) => {
    pointList.addEventListener('mouseover', () => {
        if (pointList.classList.contains(POINT_BUTTON_TOKEN)) return;
        gsap.to(pointList, { rotate: -180, duration: 0.2 });
    });
};

const mouseleave = (pointList: HTMLUListElement) => {
    pointList.addEventListener('mouseleave', () => {
        if (pointList.classList.contains(POINT_BUTTON_TOKEN)) return;
        gsap.to(pointList, { rotate: 0, duration: 0.2 });
    });
};
