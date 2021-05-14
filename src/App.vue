<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <SlotFallback msg="Welcome to Your Vue.js App" />
    <hr />
    <NamedSlots />
    <hr />
    <scopedSlots />
  </div>
</template>

<script>
import SlotFallback from "./components/slotsFallback/SlotFallback.vue";
import NamedSlots from "./components/namedSlots/NamedSlots";
import scopedSlots from "./components/scopedSlots/ScopedSlots";
export default {
  name: "App",
  components: {
    SlotFallback,
    NamedSlots,
    scopedSlots,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
