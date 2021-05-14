<template>
  <a v-bind:href="url" class="nav-link" target="_blank" rel="noopener">
    {{ url }}
    <br />
    <slot>Your profile (Fallback Content)</slot>
  </a>
</template>
<script>
export default {
  name: "NavigationLink",
  props: {
    url: String,
  },
};
</script>
