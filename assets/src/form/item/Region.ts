import { InputItem, InputItemQuery } from '../InputItem';
import { errorMessage, removeErrorMessage } from '../errorMessage';
import { requiredSelectRule } from '../ruls/requiredInputRule';

export class Region implements InputItem {
    ERROR_MESSAGE: string = '都道府県を選択してください';
    liItem: HTMLLIElement;
    elem: HTMLSelectElement;
    value: string = '';

    constructor(query: InputItemQuery) {
        if (!query) throw new Error('引数が不正です');
        if (!query.item) throw new Error('引数が不正です');
        if (!query.name) throw new Error('引数が不正です');

        this.liItem = <HTMLLIElement>document.querySelector(query.item);
        this.elem = <HTMLSelectElement>this.liItem.querySelector(`select[name=${query.name}]`);

        if (!this.liItem) throw new Error('フォーム内リストのアイテム要素を取得できません');
        if (!this.elem) throw new Error('フォームselect要素を取得できません');

        const selectedIdx = this.elem.selectedIndex;
        this.value = this.elem.options[selectedIdx].value;
    }

    public completeWith(): boolean {
        if (!requiredSelectRule(this.elem)) {
            errorMessage(this.liItem, this.ERROR_MESSAGE);
            return false;
        }
        removeErrorMessage(this.liItem);

        return true;
    }
}
