

export const privacyPolicy = (privacyPolicy: HTMLInputElement) => {
    if (!privacyPolicy) return;
    
    privacyPolicy.addEventListener('change', () => {
        const submitBtn = <HTMLInputElement>document.getElementById('js-submit');
        if (!submitBtn) return;

        if (privacyPolicy.checked) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    });
}