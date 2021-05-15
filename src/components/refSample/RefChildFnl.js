import Vue from "vue";

const RefChildFnl = Vue.extend({
  name: "RefChildFnl",
  functional: false,
  methods: {
    sayHi() {
      alert("Hi");
    },
  },
  render(h) {
    return h("input", {
      props: {
        ref: "input",
      },
      attrs: {
        ref: "input",
      },
      mouseover: () => {
        this.sayHi();
      },
    });
  },
});

export { RefChildFnl };
