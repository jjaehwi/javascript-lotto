const MissionUtils = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE, LOTTO_PRICE } = require("./Constants");
const Validation = require("./validation");

class App {
  winnerNumber;
  bonusNumber;
  play() {
    this.inputPurchaseAmount();
    this.inputWinnerNumber();
    this.inputBonusNumber();
    console.log(this.winnerNumber);
    console.log(this.bonusNumber);
  }
  inputPurchaseAmount() {
    MissionUtils.Console.readLine(
      GUIDE_MESSAGE.PURCHASEAMOUNT_INPUT,
      (purchaseAmount) => {
        Validation.checkPurchaseAmount(purchaseAmount);
        console.log(purchaseAmount);
        this.lottoBuying(purchaseAmount);
      }
    );
  }
  lottoBuying(purchaseAmount) {
    const lottoCount = this.getLottoCount(purchaseAmount);
  }
  getLottoCount(purchaseAmount) {
    return parseInt(purchaseAmount, 10) / LOTTO_PRICE;
  }
  inputWinnerNumber() {
    MissionUtils.Console.readLine(
      GUIDE_MESSAGE.WINNERNUMBER_INPUT,
      (winnerNumberElement) => {
        const winnerNumberArr = winnerNumberElement.split(",");
        Validation.checkInputWinnerNumber(winnerNumberArr);
        this.winnerNumber = winnerNumberElement;
      }
    );
  }
  inputBonusNumber() {
    MissionUtils.Console.readLine(
      GUIDE_MESSAGE.BONUSNUMBER_INPUT,
      (bonusNumberElement) => {
        const bonusNumberArr = bonusNumberElement.split("");
        Validation.checkBonusNumber(bonusNumberArr, this.winnerNumber);
        this.bonusNumber = bonusNumberElement;
      }
    );
  }
}

module.exports = App;
