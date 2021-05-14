# Dynamic Slot Names

New in 2.6.0+

Dynamic directive arguments also work on v-slot, allowing the definition of dynamic slot names:

<base-layout>
<template v-slot:[dynamicSlotName]>
    ...
</template>
</base-layout>

# Named Slots Shorthand

New in 2.6.0+

Similar to v-on and v-bind, v-slot also has a shorthand, replacing everything before the argument (v-slot:) with the special symbol #. For example, v-slot:header can be rewritten as #header:

<base-layout>
  <template #header>
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

<template #footer>

<p>Here's some contact info</p>
</template>
</base-layout>
However, just as with other directives, the shorthand is only available when an argument is provided. That means the following syntax is invalid:

<!-- This will trigger a warning -->

<current-user #="{ user }">
{{ user.firstName }}
</current-user>
Instead, you must always specify the name of the slot if you wish to use the shorthand:

<current-user #default="{ user }">
{{ user.firstName }}
</current-user>
