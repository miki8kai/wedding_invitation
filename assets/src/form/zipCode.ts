export interface ZipCodeAddress {
    address1: string | null;
    address2: string | null;
    address3: string | null;
    kana1: string | null;
    kana2: string | null;
    kana3: string | null;
    prefcode: string | null;
    zipcode: string | null;
}

export interface ZipCode {
    message: string | null;
    results: ZipCodeAddress[] | null;
    status: number;
}

export const getZipCode = async (postCode: string): Promise<ZipCode> => {
    const zip = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postCode}`);
    const zipJson: Promise<ZipCode> = await zip.json();

    return zipJson;
};

export const getAddress = (zipCode: ZipCode): ZipCodeAddress => {
    const ENPTY: ZipCodeAddress = {
        address1: '',
        address2: '',
        address3: '',
        kana1: '',
        kana2: '',
        kana3: '',
        prefcode: '',
        zipcode: ''
    };
    if (!zipCode) return ENPTY;
    if (!zipCode.results) return ENPTY;
    if (!zipCode.results[0]) return ENPTY;

    return zipCode.results[0];
};
