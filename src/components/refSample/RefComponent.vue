<template>
  <div>
    <h3>Example for ref[$refs]</h3>
    <ref-child ref="usernameInput_1"></ref-child>
    <ref-child ref="usernameInput_2"></ref-child>
    <button @click="focusInput('1')">focus input 1</button>
    <button @click="focusInput('2')">focus input 2</button>

    <RefChildFnl ref="test123" />
  </div>
</template>
<script>
import RefChild from "./RefChild";
import { RefChildFnl } from "./RefChildFnl";
export default {
  name: "RefComponent",
  components: {
    RefChild,
    RefChildFnl,
  },
  methods: {
    focusInput(args) {
      this.$refs[`usernameInput_${args}`].focus();
      this.$refs["test123"].sayHi();
    },
  },
};
</script>