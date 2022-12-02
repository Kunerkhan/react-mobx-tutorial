import { observable } from "mobx";

export const nickNameObservableObject = observable({
  firstName: "Akela",
  age: 23,

  get nickName() {
    console.log(`${this.firstName} ${this.age}`);
    return `${this.firstName} ${this.age}`;
  },

  increment() {
    this.age++;
  },

  decrement() {
    this.age--;
  },
});
