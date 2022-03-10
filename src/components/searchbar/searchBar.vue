<template>
  <div class="mapView">
    <h1>MapView</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePlacesStore } from "../../composables/places";

export default defineComponent({
  name: "MapView",
  setup() {

      const {  } = usePlacesStore();

    return {};
  },
});
</script>

<style scoped></style>
