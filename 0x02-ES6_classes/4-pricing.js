/* eslint-disable no-unused-vars */
import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  // Getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${(this._currency)._name} (${(this._currency)._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

module.exports = Pricing;
