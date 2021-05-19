import Vue from "vue";

import RefChild from "./RefChild.vue";
const RefComponentFnl = Vue.extend({
  name: "RefComponentFnl",
  functional: false,
  components: {
    RefChild,
  },
  methods: {
    sayHi() {
      alert("Hi");
    },
  },
  render(h) {
    return h("div", {}, [
      h(
        "button",
        {
          on: {
            click: this.sayHi("1"),
          },
        },
        "focus input 1"
      ),
      h("ref-child", {
        attrs: "usernameInput_1",
      }),
    ]);
  },
});

export { RefComponentFnl };
