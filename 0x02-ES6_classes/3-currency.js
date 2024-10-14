class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  // Getter and setter for code
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._name = newCode;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

module.exports = Currency;
