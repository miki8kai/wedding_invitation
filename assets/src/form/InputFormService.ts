
import { companion } from './companion';
import { errorMessage } from './errorMessage';
import { locality } from './locality';
import { validateInputPostCode } from './postcode';
import { privacyPolicy } from './privacyPolicy';
import { createRegion, selectRegion } from './region';
import { street } from './street';
import { submitButton } from './submitButton';
import { ZipCodeAddress, getAddress, getZipCode } from './zipCode';
import { convertZipCodeAddress2ZipInfo } from './zipInfo';

const postCode = <HTMLInputElement>document.getElementById('postcode');

const postCodeHandler = async () => {
    if (!postCode.value) return;
    if (!validateInputPostCode(postCode.value)) return;

    const receiveZip = await getZipCode(postCode.value);

    if (receiveZip.status != 200 || receiveZip.results == null) {
        console.error(`zip code status: ${receiveZip.status}`);
        console.error(`error message: ${receiveZip.message}`);
        errorMessage(<HTMLLIElement>document.getElementById('js-postcode-item'), '郵便番号が正しくありません');
    }
    
    const address: ZipCodeAddress = getAddress(receiveZip);
    const zipInfo = convertZipCodeAddress2ZipInfo(address);

    selectRegion(<HTMLSelectElement>document.getElementById('region'), zipInfo.region);
    locality(<HTMLInputElement>document.getElementById('locality'), zipInfo.locality);
    street(<HTMLInputElement>document.getElementById('street'), zipInfo.street);
} 

const init = () => {
    createRegion(<HTMLSelectElement>document.getElementById('region'));

    companion(
        <HTMLButtonElement>document.getElementById('js-companion'), 
        <HTMLDivElement>document.getElementById('js-fragment-wrap')
    );
    privacyPolicy(
        <HTMLInputElement>document.querySelector('input[name=privacy-policy]'));
    submitButton(
        <HTMLInputElement>document.getElementById('js-submit'),
        <HTMLDivElement>document.getElementById('js-submit-container')
    );
}

export const inputFormService = ()  => {
    init();
    if (!postCode) return;
    postCode.addEventListener('input', postCodeHandler, false);
}
