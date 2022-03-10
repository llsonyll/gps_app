<template>
  <map-view />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { usePlacesStore } from "../../composables/places";
import MapView from "../mapview";

export default defineComponent({
  name: "Home",
  components: {
    MapView,
  },
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
