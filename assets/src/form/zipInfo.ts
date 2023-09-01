import { ZipCodeAddress } from "./zipCode";

export interface ZipInfo {
    region: string,
    locality: string,
    street: string,
}

export const convertZipCodeAddress2ZipInfo = (address: ZipCodeAddress): ZipInfo => {
    const EMPTY: ZipInfo = {
        region: '',
        locality: '',
        street: ''
    }
    if (!address) return EMPTY;
    if (!address.address1) return EMPTY;
    if (!address.address2) return EMPTY;
    if (!address.address3) return EMPTY;

    const zipInfo : ZipInfo = {
        region: address.address1,
        locality: address.address2,
        street: address.address3
    }

    return zipInfo;
}
