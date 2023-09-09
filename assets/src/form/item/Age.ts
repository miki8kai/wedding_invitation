import { InputItem, InputItemQuery } from '../InputItem';
import { errorMessage, removeErrorMessage } from '../errorMessage';
import { maxStringLengthRule } from '../ruls/maxStringLengthRule';
import { numberRule } from '../ruls/numberRule';
import { requiredInputRule } from '../ruls/requiredInputRule';

export class Age implements InputItem {
    ERROR_MESSAGE = '年齢を半角数字で入力してください';
    liItem: HTMLLIElement;
    elem: HTMLInputElement;
    value: number = -1;

    constructor(query: InputItemQuery) {
        if (!query) throw new Error('引数が不正です');
        if (!query.item) throw new Error('引数が不正です');
        if (!query.name) throw new Error('引数が不正です');

        this.liItem = <HTMLLIElement>document.querySelector(query.item);
        this.elem = <HTMLInputElement>this.liItem.querySelector(`input[name=${query.name}]`);

        if (!this.liItem) throw new Error('フォーム内リストのアイテム要素を取得できません');
        if (!this.elem) throw new Error('フォームinput要素を取得できません');

        this.value = parseInt(this.elem.value, 10);
    }

    public completeWith(): boolean {
        if (!requiredInputRule(this.elem) || !numberRule(this.elem) || !maxStringLengthRule(this.elem, 3)) {
            errorMessage(this.liItem, this.ERROR_MESSAGE);
            return false;
        }
        removeErrorMessage(this.liItem);

        return true;
    }
}
