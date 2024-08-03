import { reactive, readonly } from "vue";

export type StateType = typeof state;
const store = reactive({ counter: 0, colorCode: "#e0115f" });
const method = {
  decreseCounter() {
    store.counter--;
  },
  increaseCoutner() {
    store.counter++;
  },
  changeColorCode(color: string) {
    store.colorCode = color;
  },
};
const getters = {
  counterSquarted() {
    return state.counter * state.counter;
  },
};

const state = readonly(store);
export { state, method, getters };
