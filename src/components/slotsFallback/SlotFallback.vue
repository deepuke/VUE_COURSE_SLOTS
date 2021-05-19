<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <navigation-link url="/profile"> Your Profile </navigation-link>
    <hr />
    <navigation-link url="/profile">
      Logged in as {{ user.name }}
    </navigation-link>
    <hr />
    <p>
      There are cases when it’s useful to specify fallback (i.e. default)
      content for a slot, to be rendered only when no content is provided.
    </p>
    <navigation-link url="/profile"> </navigation-link>
  </div>
</template>

<script>
import NavigationLink from "./NavigationLink";
export default {
  name: "SlotFallback",
  components: { NavigationLink },
  props: {
    msg: String,
  },
  data() {
    return {
      user: {
        name: "Deepu",
      },
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
