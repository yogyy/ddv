import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return { count: 0 };
  },
  actions: {
    increment(val = 1) {
      this.count += val;
    },
    async waitAndAdd() {
      console.log("waiting increment");
      setTimeout(() => {
        this.count++;
      }, 2000);
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,

    oddOrEven: (state) => {
      if (state.count % 2 === 0) return "even";
      else return "odd";
    },
  },
});
