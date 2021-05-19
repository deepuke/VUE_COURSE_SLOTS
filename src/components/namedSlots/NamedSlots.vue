<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <container-snap>
      <template v-slot:header>
        <h1>Here might be a page title {{ title }}</h1>
      </template>

      <template v-slot:default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </container-snap>
  </div>
</template>

<script>
import ContainerSnap from "./ContainerSnap";
export default {
  name: "NamedSlots",
  components: { ContainerSnap },
  props: {
    msg: String,
  },
  data() {
    return {
      title: "My app123",
    };
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
