import { InputItem, InputItemQuery } from '../InputItem';
import { errorMessage, removeErrorMessage } from '../errorMessage';
import { kanaInputRule } from '../ruls/kanaInputRule';
import { addError, addOk } from '../ruls/pairIsOkRule';
import { requiredInputRule } from '../ruls/requiredInputRule';

export class LastNameKana implements InputItem {
    ERROR_MESSAGE: string = '性と名をカタカナで入力してください';
    liItem: HTMLLIElement;
    elem: HTMLInputElement;
    value: string = '';

    constructor(query: InputItemQuery) {
        if (!query) throw new Error('引数が不正です');
        if (!query.item) throw new Error('引数が不正です');
        if (!query.name) throw new Error('引数が不正です');

        this.liItem = <HTMLLIElement>document.querySelector(query.item);
        this.elem = <HTMLInputElement>this.liItem.querySelector(`input[name=${query.name}]`);

        if (!this.liItem) throw new Error('フォーム内リストのアイテム要素を取得できません');
        if (!this.elem) throw new Error('フォームinput要素を取得できません');

        this.value = this.elem.value;
    }

    completeWith(): boolean {
        if (!requiredInputRule(this.elem) || !kanaInputRule(this.elem)) {
            errorMessage(this.liItem, this.ERROR_MESSAGE);
            addError(this.liItem);
            return false;
        }
        removeErrorMessage(this.liItem);
        addOk(this.liItem);

        return true;
    }
}
