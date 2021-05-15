<template>
  <div>
    <input ref="input" />
  </div>
</template>
<script>
export default {
  name: "RefChild",
  methods: {
    focus() {
      this.$refs.input.focus();
    },
  },
};
</script>