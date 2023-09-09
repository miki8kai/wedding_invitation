import { InputItem, InputItemQuery } from '../InputItem';

export class Allergy implements InputItem {
    ERROR_MESSAGE: string = '';
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
        return true;
    }
}
