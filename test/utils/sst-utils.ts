class SstUtilities {

  ionLoadingSelector = (id?: string) => !!id ? $(`ion-loading.sst-loading-${id}`) : $(`ion-loading`);

  async waitForLoaderToDismiss(id?: string) {
    await (await this.ionLoadingSelector(id)).waitForDisplayed();
    await (await this.ionLoadingSelector(id)).waitForDisplayed({ reverse: true });
  }

}

const SstUtils = new SstUtilities();
export default SstUtils;
