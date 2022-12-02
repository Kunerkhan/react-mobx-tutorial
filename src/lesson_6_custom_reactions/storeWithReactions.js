import { action, autorun, observable, when } from "mobx";

export default class StoreWithActions {
  @observable count = 0;
  @action increment() {
    this.count++;
  }
  @action decrement() {
    this.count--;
  }
}

export const appStoreWithActions = new StoreWithActions();

when(
  () => appStoreWithActions.count > 5,
  () => alert("Count value is more than 5")
);

autorun(
  () => {
    alert(`Count value is: ${appStoreWithActions.count}`);
  },
  {
    name: "Custom autorun",
    delay: 3000,
  }
);
