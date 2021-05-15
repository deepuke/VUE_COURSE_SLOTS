import { BListGroupItem, BListGroup } from "bootstrap-vue";
import Vue from "vue";

const VListBox = BListGroup.extend({
  functional: false,
  props: {
    //overwrite
    tag: {
      type: String,
    },
    horizontal: {
      type: [String, Boolean],
    },
    flush: {
      type: Boolean,
    },
    // extend
    options: {
      type: Array,
    },
    variant: {
      type: String,
      default: "",
    },
    multiselect: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      focused: undefined,
      bus: new Vue(),
    };
  },

  methods: {
    getItems() {
      if (this.options) {
        return this.options;
      } else {
        return this.$slots.default.map((e) => ({
          ...e.componentOptions.propsData,
          text: e.componentOptions.children.reduce(
            (acc, item) => (acc += item.text),
            ""
          ),
        }));
      }
    },
    callChildSelection() {
      this.getItems().forEach((item, index) => {
        this.$refs[`boxItem_${index}`].unsetSelection();
      });
      this.$refs[`boxItem_${this.focused}`].setSelection();
    },
  },
  render(h) {
    const componentData = {
      staticClass: "list-group list-box",
      class: {
        "list-group-flush": this.flush,
        "list-group-horizontal": this.horizontal === true,
      },
    };
    componentData.attrs = {
      role: "listbox",
      tabindex: "0",
      "aria-multiselectable": "false",
    };
    componentData.on = {
      keydown: (e) => {
        console.log(this.getItems());
        switch (e.keyCode) {
          // arrow up, select previous item
          case 38: {
            if (this.focused !== undefined) {
              if (this.focused > 0) {
                this.focused--;
              }
            } else {
              this.focused = 0;
            }
            e.preventDefault();
            this.callChildSelection();
            break;
          }
          // arrow down, select next item
          case 40: {
            if (this.focused !== undefined) {
              if (this.focused < this.getItems().length - 1) {
                this.focused++;
              }
            } else {
              this.focused = 0;
            }
            this.callChildSelection();
            e.preventDefault();
            break;
          }
        }
        console.log(this.focused);
      },
    };
    let items;
    if (this.options) {
      items = this.options.map((e, i) => {
        console.log(i, e);
        return h(
          VListBoxItem,
          {
            props: {
              checked: e["checked"] ? e["checked"] : this.focused === i,
              variant: this.variant,
              disabled: e["disabled"] ? true : false,
              itemIndex: i,
            },
            attrs: {},
            ref: `boxItem_${i}`,
            class: {},
            on: {
              input: (checked) => {
                this.$emit("input", checked, i);
              },
            },
          },
          e.text
        );
      });
    }
    if (this.$slots.default) {
      items = this.$slots.default.map((vnode) => {
        return vnode;
      });
    }
    return h("ul", componentData, items);
  },
});

const VListBoxItem = BListGroupItem.extend({
  functional: false,
  data() {
    return {
      focusedState: false,
      checkedState: false,
    };
  },
  props: {
    // overwrite
    tag: {
      type: String,
      default: "li",
    },
    // extend
    checked: {
      type: Boolean,
      required: true,
    },
    variant: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    itemIndex: {
      type: Number,
    },
  },
  computed: {
    isActive() {
      return this.checkedState;
    },
    isFocused() {
      return this.focusedState;
    },
  },
  beforeMount() {
    this.checkedState = this.checked;
  },
  methods: {
    setSelection() {
      if (!this.disabled) {
        this.checkedState = true;
      }
    },
    unsetSelection() {
      this.checkedState = false;
    },
  },
  render(h) {
    return h(
      this.tag,
      {
        class: {
          disabled: this.disabled,
          active: this.isActive,
          focus: this.isFocused,
          "list-group-item": true,
          [`list-group-item-${this.variant}`]: this.variant ? true : false,
        },
        props: {
          variant: this.variant,
        },
        attrs: {
          role: "option",
          "aria-selected": this.isActive,
          "aria-disabled": this.disabled,
        },
        on: {
          click: (e) => {
            this.checkedState = !this.checkedState;
            this.$emit("input", e, this.itemIndex);
          },
          mouseover: () => {
            this.focusedState = true;
          },
          mouseout: () => {
            this.focusedState = false;
          },
        },
      },
      this.$slots.default
    );
  },
});

export { VListBox, VListBoxItem };
