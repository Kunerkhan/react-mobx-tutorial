import { action, computed, decorate, observable } from "mobx";

class Store {
  /* @observable*/ devsList = [
    { name: "Jack", sp: 12 },
    { name: "Max", sp: 10 },
    { name: "Leo", sp: 8 },
  ];
  filter = [];

  /* @computed*/ get totalSum() {
    return this.devsList.reduce((sum, { sp }) => (sum += sp), 0);
  }

  /* @computed*/ get topPerformer() {
    const maxSp = Math.max(...this.devsList.map(({ sp }) => sp));
    return this.devsList.find(({ sp, name }) => {
      if (maxSp === sp) {
        return name;
      }
    });
  }

  /* @computed */ get filteredDevelopers() {
    const matchesFilter = new RegExp(this.filter, "i");
    return this.devsList.filter(
      ({ name }) => !this.filter || matchesFilter.test(name)
    );
  }

  /* @action*/ clearList() {
    this.devsList = [];
  }

  /* @action*/ addDeveloper(dev) {
    this.devsList.push(dev);
  }
  /* @action*/ updateFilter(value) {
    this.filter = value;
  }
}

decorate(Store, {
  devsList: observable,
  filter: observable,
  totalSum: computed,
  topPerformer: computed,
  filteredDevelopers: computed,
  clearList: action,
  addDeveloper: action,
  updateFilter: action,
});

export const appStore = new Store();
export default Store;
