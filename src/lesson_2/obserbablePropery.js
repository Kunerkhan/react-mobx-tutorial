import { computed, extendObservable } from "mobx";

export const nickNameObservableProperty = new class UserNickName {
  constructor() {
    extendObservable(this, {
      firstName: "Akela",
      age: 23,
    });
  }

  @computed get nickName() {
    console.log(`${this.firstName} ${this.age}`);
    return `${this.firstName} ${this.age}`;
  }
}();

nickNameObservableProperty.increment = function() {
  this.age++;
};

nickNameObservableProperty.decrement = function() {
  this.age--;
};
