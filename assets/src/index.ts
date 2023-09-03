import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import { countdownTimer, setWeddingDay } from "./countdownTimer";
import { eventsCardTitleEnglish, eventsCardTitleJapanese } from "./eventsCard";
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
import { placeName } from './placeName';
import { placeAddress } from './placeAddress';
import { broomEnglish, broomJapanese } from './broom';
import { brideEnglish, brideJapanese } from './bride';

export const POINT_BUTTON_TOKEN = 'open';
export const DRAWER_TOKEN = 'display';
export const RESULT_DISPLAY = 'display';

export const SERVER_URL = 'aHR0cHMlM0ElMkYlMkZieml3bjB6Y3JqLmV4ZWN1dGUtYXBpLmFwLW5vcnRoZWFzdC0xLmFtYXpvbmF3cy5jb20lMkZkZWZhdWx0JTJGd2VkZGluZ0ludml0YXRpb25CYWNrZW5k';
// export const SERVER_URL = 'aHR0cCUzQSUyRiUyRjEyNy4wLjAuMSUzQTMwMDAlMkY=';

const main = () => {
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

    broomEnglish(<HTMLSpanElement>document.getElementById('js-profile-broom-en'));
    broomJapanese(<HTMLSpanElement>document.getElementById('js-profile-broom-jp'));
    brideEnglish(<HTMLSpanElement>document.getElementById('js-profile-bride-en'));
    brideJapanese(<HTMLSpanElement>document.getElementById('js-profile-bride-jp'));

    eventsCardTitleEnglish(<HTMLSpanElement>document.getElementById('js-event-ceremony-card-title-en'));
    eventsCardTitleJapanese(<HTMLSpanElement>document.getElementById('js-event-ceremony-card-title-jp'));
    eventsCardTitleEnglish(<HTMLSpanElement>document.getElementById('js-event-reception-card-title-en'));
    eventsCardTitleJapanese(<HTMLSpanElement>document.getElementById('js-event-reception-card-title-jp'));

    setWeddingDay(<HTMLSpanElement>document.getElementById('js-wedding-day'));
    countdownTimer(<HTMLUListElement>document.getElementById('js-time-list'));

    placeName(<HTMLHeadElement>document.getElementById('js-access-place-name'));
    placeAddress(<HTMLPreElement>document.getElementById('js-access-place-address'))

    inputFormService();

    resultCloseButton(
        <HTMLUListElement>document.getElementById('js-result-btn'),
        <HTMLDialogElement>document.getElementById('js-result')
    );
};
main();