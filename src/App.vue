<template>
  <div id="app">
    <h4>Layout bootstrap</h4>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <h5>part-1</h5>
          <VListBox>
            <v-list-box-item
              @input="update"
              v-for="(item, index) in options"
              :checked="item.checked"
              :variant="variant"
              :disabled="item.disabled"
              v-bind:key="item.text"
              :itemIndex="index"
              >{{ item.text }}</v-list-box-item
            >
          </VListBox>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h5>part-2</h5>
          <VListBox :options="options" :variant="variant" @input="update" />
        </b-col>
      </b-row>
    </b-container>
    <hr />
    <ref-component />
    <br />
    <img alt="Vue logo" src="./assets/logo.png" />
    <SlotFallback msg="Welcome to Your Vue.js App" />
    <hr />
    <NamedSlots />
    <hr />
    <scopedSlots />
    <hr />
  </div>
</template>
<script>
import SlotFallback from "./components/slotsFallback/SlotFallback.vue";
import NamedSlots from "./components/namedSlots/NamedSlots";
import scopedSlots from "./components/scopedSlots/ScopedSlots";

import { BContainer, BRow, BCol } from "bootstrap-vue";
import {
  VListBoxItem,
  VListBox,
} from "./components/bootstrapExtend/listBox/index";
import RefComponent from "./components/refSample/RefComponent";
export default {
  name: "App",
  components: {
    SlotFallback,
    NamedSlots,
    scopedSlots,
    VListBox,
    VListBoxItem,
    BContainer,
    BRow,
    BCol,
    RefComponent,
  },
  data() {
    return {
      variant: "warning",
      options: [
        { text: "Option 1", checked: false },
        { text: "Option 2", checked: false, disabled: true },
        { text: "Option 3", checked: false },
        { text: "Option 4", checked: true },
        { text: "Option 5", checked: false },
      ],
    };
  },
  methods: {
    update(e, index) {
      console.log(e, index);
    },
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

.list-box .focus {
  background: #3b4557;
  color: white;
}
</style>
