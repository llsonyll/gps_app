<template>
  <button class="locationButton btn btn-primary" @click="handleLocationAction">
    Ir a mi ubicacion
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMapStore, usePlacesStore } from "../../composables";

export default defineComponent({
  name: "locationButton",
  setup() {
    const { map } = useMapStore();
    const { userLocation } = usePlacesStore();
    return {
      handleLocationAction: () => {
        map.value?.flyTo({
          center: userLocation.value,
          zoom: 14,
        });
      },
    };
  },
});
</script>

<style scoped>
.locationButton {
  position: absolute;
  z-index: 999;
  top: 20px;
  right: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
</style>
