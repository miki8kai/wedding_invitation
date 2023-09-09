import { DRAWER_TOKEN, POINT_BUTTON_TOKEN } from '.';

export const drawerList = (drawerList: HTMLUListElement) => {
    if (!drawerList) return;
    const drawerItemList: NodeListOf<HTMLLIElement> = drawerList.querySelectorAll('li');
    if (!drawerItemList) return;
    if (drawerItemList.length <= 0) return;

    drawerItemList.forEach((item) => {
        item.addEventListener('click', () => {
            const drawer = <HTMLDivElement>document.getElementById('js-drawer');
            if (!drawer) return;
            const pointList = <HTMLDivElement>document.getElementById('js-point-list');
            if (!pointList) return;
            drawer.classList.remove(DRAWER_TOKEN);
            pointList.classList.remove(POINT_BUTTON_TOKEN);
        });
    });
};
