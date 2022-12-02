import { action, observable } from "mobx";

export const counterObservableObjectWithActions = observable(
  {
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
  },
  { increment: action("Plus one"), decrement: action("Minus one") },
  {
    name: "Counter with actions",
  }
);
