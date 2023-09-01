import { InputItem, InputItemQuery } from "../InputItem";
import { errorMessage, removeErrorMessage } from "../errorMessage";
import { emailRule } from "../ruls/emailRule";
import { requiredInputRule } from "../ruls/requiredInputRule";


export class Email implements InputItem {
    ERROR_MESSAGE: string = 'メールアドレスを正しく入力してください';
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

        this.value = this.elem.value
    }
    
    completeWith(): boolean {
        if (!requiredInputRule(this.elem) || !emailRule(this.elem)) {
            errorMessage(this.liItem, this.ERROR_MESSAGE);
            return false;
        }
        removeErrorMessage(this.liItem);

        return true;
    }
}