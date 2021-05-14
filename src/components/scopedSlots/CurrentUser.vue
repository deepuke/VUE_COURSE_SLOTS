<template>
  <span>
    <slot v-bind:user="user">{{ user.lastName }}</slot>
  </span>
</template>
<script>
export default {
  name: "CurrentUser",
  data() {
    return {
      user: {
        firstName: "Deepu",
        lastName: "Elayakunju",
      },
    };
  },
};
</script>
