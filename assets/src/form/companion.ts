
const getFragment = (fragmentCount: number) => {
    return `
    <div class="fragment" id="fragment-${fragmentCount}">
        <li class="input-item add-companion">
            <span class="fragment-count">ー ${fragmentCount}人目 ー</span>
            <button class="fragment-delete" type="button" id="fragment-delete-${fragmentCount}">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><style>svg{fill:#000000}</style><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
            <span class="text">削除</span>
            </button>
        </li>
        <li class="input-item" id="js-fragment-${fragmentCount}-name-kanji-item">
            <label class="asterisk" for="last-name-kanji-${fragmentCount}">名前<span>Name</span></label>
            <div class="input-container">
                <input type="text" id="last-name-kanji-${fragmentCount}" name="lastNameKanji" maxlength="20" required placeholder="性">
                <input type="text" id="first-name-kanji-${fragmentCount}" name="firstNameKanji" maxlength="20" required placeholder="名">
            </div>
        </li>
        <li class="input-item" id="js-fragment-${fragmentCount}-name-kana-item">
            <label class="asterisk" for="last-name-kana-${fragmentCount}">カナ<span>Nana</span></label>
            <div class="input-container">
                <input type="text" id="last-name-kana-${fragmentCount}" name="lastNameKana" required placeholder="セイ">
                <input type="text" id="first-name-kana-${fragmentCount}" name="firstNameKana" required placeholder="メイ">
            </div>
        </li>
        <li class="input-item" id="js-fragment-${fragmentCount}-age-item">
            <label for="age">年齢<span>Age</span></label>
            <div class="input-container">
                <input type="text" id="age" name="age" pattern="^[0-9]{1,3}$" maxlength="3" required placeholder="20">
            </div>
        </li>
        <li class="input-item" id="js-fragment-${fragmentCount}-allergy-item">
            <label for="allergy">アレルギー<span>Allergy</span></label>
            <div class="input-container">
                <input type="text" id="allergy" name="allergy" maxlength="40" placeholder="なければ無記入でOK">
            </div>
        </li>
    </div>
    `
}


export const companion = (btn: HTMLButtonElement, fragmentWrap: HTMLDivElement) => {
    if (!btn) return;
    if (!fragmentWrap) return;
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        const fragmentList = fragmentWrap.getElementsByClassName('fragment');
        const fragmentCount = fragmentList.length + 1;

        for (let count = 1; count <= fragmentCount; count++) {
            const targetFragment = <HTMLDivElement>fragmentWrap.querySelector(`#fragment-${count}`);
            if (!targetFragment) {
                const fragment = getFragment(count);
                // 最後の要素
                if (count == fragmentCount) {
                    fragmentWrap.insertAdjacentHTML('beforeend', fragment);
                } else {
                    // 中間の要素は一個前に追加
                    const beforeFragment  = <HTMLDivElement>fragmentWrap.querySelector(`#fragment-${count + 1}`);
                    beforeFragment.insertAdjacentHTML('beforebegin', fragment);
                }

                const createdFragment = <HTMLDivElement>document.getElementById(`fragment-${count}`);
                const deleteBtn = <HTMLButtonElement>createdFragment.querySelector(`#fragment-delete-${count}`);
                companionDelete(deleteBtn, createdFragment);
            }
        }
    }, false);
}

export const companionDelete = (btn: HTMLButtonElement, fragment: HTMLDivElement) => {
    if (!btn) return;
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        fragment.remove();
    });
}