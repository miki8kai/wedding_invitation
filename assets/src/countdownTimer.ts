const TARGET_TIME = {
    year: 2024,
    month: 2,
    day: 11,
    hour: 12,
    minute: 30,
    second: 0
};

export const setWeddingDay = (dayElem: HTMLSpanElement) => {
    if (!dayElem) return;
    dayElem.textContent = `${TARGET_TIME.year}.${TARGET_TIME.month}.${TARGET_TIME.day}`;
};

const calcRremainTime = (): number => {
    const targetTime = new Date(
        TARGET_TIME.year,
        TARGET_TIME.month - 1, // 【注意】月はマイナス１する
        TARGET_TIME.day,
        TARGET_TIME.hour,
        TARGET_TIME.minute,
        TARGET_TIME.second
    );

    return targetTime.getTime() - new Date().getTime();
};

export const countdownTimer = (timerElem: HTMLUListElement) => {
    if (!timerElem) return;

    const day = <HTMLSpanElement>timerElem.querySelector('#js-day');
    const hours = <HTMLSpanElement>timerElem.querySelector('#js-hours');
    const minutes = <HTMLSpanElement>timerElem.querySelector('#js-minutes');
    const seconds = <HTMLSpanElement>timerElem.querySelector('#js-seconds');

    if (!day) return;
    if (!hours) return;
    if (!minutes) return;
    if (!seconds) return;

    const timerId = setInterval(() => {
        const remainTime = calcRremainTime();

        let difDay = Math.floor(remainTime / 1000 / 60 / 60 / 24);
        let difHour = Math.floor(remainTime / 1000 / 60 / 60) % 24;
        let difMin = Math.floor(remainTime / 1000 / 60) % 60;
        let difSec = Math.floor(remainTime / 1000) % 60;

        if (remainTime < 0) {
            difDay = 0;
            difHour = 0;
            difMin = 0;
            difSec = 0;
            clearInterval(timerId);
        }

        day.textContent = difDay.toString();
        hours.textContent = difHour.toString();
        minutes.textContent = difMin.toString();
        seconds.textContent = difSec.toString();
    }, 1000);
};
