export default class {
  constructor(val, typeName, type) {
    this.val = val;
    this.typeName = typeName;
    this.type = type;
    this.result = {};
    this._cannotEmpty = this._cannotEmpty.bind(this);
  }
  _cannotEmpty() {
    return new Promise((resolve, reject) => {
      if (!!this.val) {
        resolve(this);
      } else {
        reject(this._errorResult(`${this.typeName}は必須です。`))
      }
    });
  }
  _errorResult(message) {
    return {
      success: false,
      type: this.type,
      message
    }
  }
}