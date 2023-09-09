export const loadVideo = (video: HTMLVideoElement, load: HTMLDivElement) => {
    if (!video) return;
    if (!load) return;

    video.addEventListener(
        'ended',
        () => {
            load.classList.add('end');
        },
        false
    );
};
