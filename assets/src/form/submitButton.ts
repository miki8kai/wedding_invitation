import { FirstNameKana } from './item/FirstNameKana';
import { LastNameKana } from './item/LastNameKana';
import { FirstNameKanji } from './item/FirstNameKanji';
import { LastNameKanji } from './item/LastNameKanji';
import { Age } from './item/Age';
import { Relationship } from './item/Relationship';
import { PhoneNumber } from './item/PhoneNumber';
import { Email } from './item/Email';
import { PostCode } from './item/PostCode';
import { Region } from './item/Region';
import { Locality } from './item/Locality';
import { Street } from './item/Street';
import { Allergy } from './item/Allergy';
import { Pregnancy } from './item/Pregnancy';
import { Attendance } from './item/Attendance';
import { RESULT_DISPLAY, SERVER_URL } from '..';
import * as bodyScrollLock from 'body-scroll-lock';
import { InputItem } from './InputItem';

const SUBMIT_SENDING = 'sending';

interface JointParticipant {
    lastNameKanji: string;
    firstNameKanji: string;
    lastNameKana: string;
    firstNameKana: string;
    allergy: string;
    age: number;
}

interface InputData {
    attendance: boolean;
    lastNameKanji: string;
    firstNameKanji: string;
    lastNameKana: string;
    firstNameKana: string;
    age: number;
    relationship: string;
    phoneNumber: string;
    email: string;
    postCode: string;
    region: string;
    locality: string;
    street: string;
    allergy: string;
    pregnancy: boolean;
    jointParticipant: JointParticipant[] | null;
}

const isInputAllOk = (inputList: InputItem[]) => {
    let isAllOk = true;
    inputList.forEach((item) => {
        if (!item.completeWith()) isAllOk = false;
    });

    return isAllOk;
};

const getJointParticipant = (): JointParticipant[] | null => {
    const fragmentWrap = <HTMLDivElement>document.getElementById('js-fragment-wrap');
    const fragmentList = <NodeListOf<HTMLDivElement>>fragmentWrap?.querySelectorAll('.fragment');
    if (!fragmentList || fragmentList.length <= 0) return null;

    let isValidateOk = false;

    const jointParticipantList: JointParticipant[] | null = Array.from(fragmentList).map((fragment, idx) => {
        const fragmentCount = idx + 1;

        const lastNameKanjiFragment = new LastNameKanji({
            item: `#js-fragment-${fragmentCount}-name-kanji-item`,
            name: 'lastNameKanji'
        });
        const firstNameKanjiFragment = new FirstNameKanji({
            item: `#js-fragment-${fragmentCount}-name-kanji-item`,
            name: 'firstNameKanji'
        });

        const lastNameKanaFragment = new LastNameKana({
            item: `#js-fragment-${fragmentCount}-name-kana-item`,
            name: 'lastNameKana'
        });
        const firstNameKanaFragment = new FirstNameKana({
            item: `#js-fragment-${fragmentCount}-name-kana-item`,
            name: 'firstNameKana'
        });

        const ageFragment = new Age({
            item: `#js-fragment-${fragmentCount}-age-item`,
            name: 'age'
        });
        const allergyFragment = new Allergy({
            item: `#js-fragment-${fragmentCount}-allergy-item`,
            name: 'allergy'
        });

        // バリデーション
        const fragmentList = [
            lastNameKanjiFragment,
            firstNameKanjiFragment,
            lastNameKanaFragment,
            firstNameKanaFragment,
            ageFragment,
            allergyFragment
        ];
        if (isInputAllOk(fragmentList)) isValidateOk = true;

        const jointParticipantValues: JointParticipant = {
            lastNameKanji: lastNameKanjiFragment.value,
            firstNameKanji: firstNameKanjiFragment.value,
            lastNameKana: lastNameKanaFragment.value,
            firstNameKana: firstNameKanaFragment.value,
            age: ageFragment.value,
            allergy: allergyFragment.value
        };

        return jointParticipantValues;
    });
    if (!isValidateOk) jointParticipantList[0].lastNameKanji = 'EMPTY';

    return jointParticipantList;
};

const displayResult = (result: HTMLDialogElement) => {
    if (!result) return;
    result.classList.add(RESULT_DISPLAY);
    const disableBodyScroll = bodyScrollLock.disableBodyScroll;
    disableBodyScroll(result);
};

const addErrorResult = (text: HTMLPreElement) => {
    if (!text) return;
    const error = document.createElement('span');
    error.textContent = '何らかの問題が発生しました。';
    error.classList.add('error');
    text.prepend(error);
};

const send = async (input: InputData, btnContainer: HTMLDivElement) => {
    if (!SERVER_URL) throw Error('SERVER_URLが設定されていません');
    const url = decodeURIComponent(atob(SERVER_URL));
    const res = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
    });

    const body = await res.json();
    const receiveMsg = body.message;
    if (res.status != 200 || receiveMsg === 'error') {
        displayResult(<HTMLDialogElement>document.getElementById('js-result'));
        addErrorResult(<HTMLPreElement>document.getElementById('js-result-text'));
    } else if (receiveMsg === 'ok') {
        displayResult(<HTMLDialogElement>document.getElementById('js-result'));
    }

    if (!btnContainer) return;
    btnContainer.classList.remove(SUBMIT_SENDING);
};

export const submitButton = (submitBtn: HTMLInputElement, btnContainer: HTMLDivElement) => {
    if (!submitBtn) return;
    if (!btnContainer) return;

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const attendance = new Attendance({
            item: '#js-attendance-item',
            name: 'attendance'
        });
        const lastNameKanji = new LastNameKanji({
            item: '#js-name-kanji-item',
            name: 'lastNameKanji'
        });
        const firstNameKanji = new FirstNameKanji({
            item: '#js-name-kanji-item',
            name: 'firstNameKanji'
        });
        const lastNameKana = new LastNameKana({
            item: '#js-name-kana-item',
            name: 'lastNameKana'
        });
        const firstNameKana = new FirstNameKana({
            item: '#js-name-kana-item',
            name: 'firstNameKana'
        });
        const age = new Age({ item: '#js-age-item', name: 'age' });
        const relationship = new Relationship({
            item: '#js-relationship-item',
            name: 'relationship'
        });
        const phoneNumber = new PhoneNumber({
            item: '#js-phone-number-item',
            name: 'phoneNumber'
        });
        const email = new Email({ item: '#js-email-item', name: 'email' });
        const postCode = new PostCode({
            item: '#js-postcode-item',
            name: 'postCode'
        });
        const region = new Region({ item: '#js-region-item', name: 'region' });
        const locality = new Locality({
            item: '#js-locality-item',
            name: 'locality'
        });
        const street = new Street({ item: '#js-street-item', name: 'street' });
        const allergy = new Allergy({
            item: '#js-allergy-item',
            name: 'allergy'
        });
        const pregnancy = new Pregnancy({
            item: '#js-pregnancy-item',
            name: 'pregnancy'
        });

        let jointParticipantList: JointParticipant[] | null = getJointParticipant();

        if (jointParticipantList) {
            if (jointParticipantList?.length >= 1 && jointParticipantList[0].lastNameKanji === 'EMPTY') return;
        } else {
            jointParticipantList = null;
        }

        // バリデーション
        const inputList = [
            attendance,
            lastNameKanji,
            firstNameKanji,
            lastNameKana,
            firstNameKana,
            age,
            relationship,
            phoneNumber,
            email,
            postCode,
            region,
            locality,
            street,
            allergy,
            pregnancy
        ];

        if (!isInputAllOk(inputList)) return;

        const input: InputData = {
            attendance: attendance.value,
            lastNameKanji: lastNameKanji.value,
            firstNameKanji: firstNameKanji.value,
            lastNameKana: lastNameKana.value,
            firstNameKana: firstNameKana.value,
            age: age.value,
            relationship: relationship.value,
            phoneNumber: phoneNumber.value,
            email: email.value,
            postCode: postCode.value,
            region: region.value,
            locality: locality.value,
            street: street.value,
            allergy: allergy.value,
            pregnancy: pregnancy.value,
            jointParticipant: jointParticipantList
        };

        btnContainer.classList.add(SUBMIT_SENDING);
        send(input, btnContainer);
    });
};
