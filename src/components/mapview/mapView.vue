<template>
  <div class="mapView">
    <div
      v-if="isLoading"
      class="loading_map d-flex justify-content-center align-items-center"
    >
      <div class="text-center">
        <h3>Loading....</h3>
        <span> Getting your position </span>
      </div>
    </div>
    <div v-show="!isLoading" class="map_container" ref="mapElement"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { useMapStore, usePlacesStore } from "../../composables";
import Mapboxgl from "mapbox-gl";

export default defineComponent({
  name: "MapView",
  setup() {
    const { isLoading, userLocation, isUserLocationReady } = usePlacesStore();
    const { setMap } = useMapStore();
    const mapElement = ref<HTMLDivElement>();

    const initMap = async () => {
      if (!mapElement.value) return;
      if (!userLocation.value) return;

      await Promise.resolve();

      const map = new Mapboxgl.Map({
        container: mapElement.value,
        style: "mapbox://styles/mapbox/streets-v11",
        center: userLocation.value,
        zoom: 12,
      });

      const popup = new Mapboxgl.Popup().setLngLat(userLocation.value).setHTML(`
          <h4> Aquí estoy </h4>
          <p> Actualmente en Cusco City </p>
        `);

      const marker = new Mapboxgl.Marker()
        .setLngLat(userLocation.value)
        .setPopup(popup)
        .addTo(map);

      setMap(map);
    };

    watch(isUserLocationReady, (isReady) => {
      if (isReady) {
        initMap();
      }
    });

    onMounted(() => {
      if (isUserLocationReady.value) {
        initMap();
      }
    });

    return {
      mapElement,
      isLoading,
      userLocation,
      isUserLocationReady,
    };
  },
});
</script>

<style scoped>
.loading_map {
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.8);
}

.map_container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>
