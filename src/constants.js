const PURCHASEAMOUNT_INPUT_MESSAGE = "구입금액을 입력해 주세요.";
const WINNERNUMBER_INPUT_MESSAGE = "당첨 번호를 입력해 주세요.";

const ERROR_MESSAGE_UNDIVIDED =
  "[ERROR] 구입 금액이 로또 가격으로 나누어 떨어지지 않습니다.";

const ERROR_MESSAGE_NOTONLY_NUMBER =
  "[ERROR] 구입 금액은 숫자만 입력 가능합니다.";

const LOTTO_PRICE = 1000;

const GUIDE_MESSAGE = {
  PURCHASEAMOUNT_INPUT_MESSAGE,
};
const ERROR_MESSAGE = {
  ERROR_MESSAGE_UNDIVIDED,
  ERROR_MESSAGE_NOTONLY_NUMBER,
};

module.exports = {
  GUIDE_MESSAGE,
  ERROR_MESSAGE,
  LOTTO_PRICE,
};
