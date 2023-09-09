export interface InputItem {
    ERROR_MESSAGE: string;
    liItem: HTMLLIElement;
    elem: HTMLInputElement | HTMLSelectElement;
    completeWith(): boolean;
}

export interface InputItemQuery {
    item: string;
    name: string;
}
