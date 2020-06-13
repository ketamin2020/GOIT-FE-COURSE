class StringBuilder {
  constructor(...value) {
    this._value = value;
  }

  get value() {
    return this._value.join("");
  }

  append(str) {
    this._value.push(str);
  }

  prepend(str) {
    this._value.unshift(str);
  }
  pad(str) {
    this.prepend(str);
    this.append(str);
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
