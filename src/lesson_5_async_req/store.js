import { action, decorate, observable, runInAction } from "mobx";

class APIStore {
  user: null;

  getUser() {
    // fetch("https://randomuser.me/api/")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     if (json.results) {
    //       this.setUser(json.results);
    //     }
    //   });

    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((json) => {
        if (json.results) {
          runInAction(() => {
            this.user = json.results[0];
          });
        }
      });
  }

  setUser(results) {
    this.user = results[0];
  }
}

decorate(APIStore, {
  user: observable,
  getUser: action.bound,
  setUser: action,
});

export const userStore = new APIStore();
export default APIStore;
