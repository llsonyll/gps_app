<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { usePlacesStore } from "../composables/places";

export default defineComponent({
  name: "Home",
  setup() {
    const msg = ref<string>("ref");    
    
    usePlacesStore();

    return {
      msg,
    };
  },
});
</script>

<style scoped></style>
