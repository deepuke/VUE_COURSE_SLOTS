<template>
  <div>
    <current-user>
      <template v-slot:default="slotProps">
        {{ slotProps.user.firstName }}
      </template>
    </current-user>
    <p>=========================== Abbreviated Syntax for Lone Default Slots</p>
    <current-user v-slot:default="slotProps">
      {{ slotProps.user.firstName }}
    </current-user>
    <p>============================ Or</p>
    <current-user v-slot="slotProps">
      {{ slotProps.user.firstName }}
    </current-user>

    <p>================v-slot="{ user }"===========Destructuring Slot Props</p>
    <current-user v-slot="{ user }">
      {{ user.firstName }}
    </current-user>

    <p>
      This can make the template much cleaner, especially when the slot provides
      many props. It also opens other possibilities, such as renaming props,
      e.g. user to person:
    </p>
    <current-user v-slot="{ user: person }">
      {{ person.firstName }}
    </current-user>
    <p>
      You can even define fallbacks, to be used in case a slot prop is
      undefined:
    </p>
    <current-user v-slot="{ user = { firstName: 'Guest' } }">
      {{ user.firstName }}
    </current-user>
  </div>
</template>
<script>
import CurrentUser from "./CurrentUser";
export default {
  name: "ScopedSlots",
  components: {
    CurrentUser,
  },
};
</script>

