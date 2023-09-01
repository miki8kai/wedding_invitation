import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import { countdownTimer, setWeddingDay } from "./countdownTimer";
import { eventsCardTitle } from "./eventsCard";
import { headerPointBtn } from "./headerPointBtn";
import { messageBottomImage, messageInnerImage, messageTopImage } from "./messageImage";
import { profileCardBride, profileCardBroom } from "./profileCard";
import { heroSwiper } from "./swiper";
import { sideBackButton } from "./sideBackButton";
import { drawerList } from "./drawerList";
import { inputFormService } from "./form/InputFormService";
import { loadVideo } from "./loadVideo";
import { resultCloseButton } from "./resultCloseButton";
import { lenis } from './lenis';

export const POINT_BUTTON_TOKEN = 'open';
export const DRAWER_TOKEN = 'display';
export const RESULT_DISPLAY = 'display';

export const SERVER_URL = 'aHR0cHMlM0ElMkYlMkZieml3bjB6Y3JqLmV4ZWN1dGUtYXBpLmFwLW5vcnRoZWFzdC0xLmFtYXpvbmF3cy5jb20lMkZkZWZhdWx0JTJGd2VkZGluZ0ludml0YXRpb25CYWNrZW5k';
const main = () => {
    decodeURIComponent(atob(SERVER_URL))
    lenis();

    loadVideo(
        <HTMLVideoElement>document.getElementById('js-load-video'),
        <HTMLDivElement>document.getElementById('js-load')
    );
    headerPointBtn(<HTMLUListElement>document.getElementById('js-point-list'));
    sideBackButton(<HTMLDivElement>document.getElementById('js-back-btn'));
    drawerList(<HTMLUListElement>document.getElementById('js-drawer-list'));

    heroSwiper();

    messageTopImage(<HTMLSpanElement>document.getElementById('js-message-top-img-wrap'));
    messageInnerImage(<HTMLSpanElement>document.getElementById('js-message-inter-img-wrap'));
    messageBottomImage(<HTMLSpanElement>document.getElementById('js-message-bottom-img-wrap'));

    profileCardBroom(<HTMLDivElement>document.getElementById('js-profile-broom-card'));
    profileCardBride(<HTMLDivElement>document.getElementById('js-profile-bride-card'));

    eventsCardTitle(<HTMLSpanElement>document.getElementById('js-event-ceremony-card-title'));
    eventsCardTitle(<HTMLSpanElement>document.getElementById('js-event-reception-card-title'));

    setWeddingDay(<HTMLSpanElement>document.getElementById('js-wedding-day'));
    countdownTimer(<HTMLUListElement>document.getElementById('js-time-list'));


    inputFormService();

    resultCloseButton(
        <HTMLUListElement>document.getElementById('js-result-btn'),
        <HTMLDialogElement>document.getElementById('js-result')
    );
};
main();