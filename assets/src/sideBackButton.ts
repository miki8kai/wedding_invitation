import { DRAWER_TOKEN, POINT_BUTTON_TOKEN } from ".";

export const sideBackButton = (backBtn: HTMLDivElement) => {
    if (!backBtn) return;
    backBtn.addEventListener('click', () => {
        const pointList = <HTMLUListElement>document.getElementById('js-point-list'); 
        if (!pointList) return;
        pointList.classList.toggle(POINT_BUTTON_TOKEN)
        const drawer = <HTMLDivElement>document.getElementById('js-drawer');

        if (!drawer) return;
        drawer.classList.toggle(DRAWER_TOKEN);
    });
}