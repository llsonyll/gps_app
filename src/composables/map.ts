import mapboxgl from "mapbox-gl";
import { computed } from "vue";
import { useStore } from "vuex";
import { StateInterface } from "../store";

export const useMapStore = () => {
  const store = useStore<StateInterface>();

  return {
    map: computed(() => store.state.map.map),
    duration: computed(() => store.state.map.duration),
    distance: computed(() => store.state.map.distance),
    // mutation
    setMap: (map: mapboxgl.Map) => store.commit("map/setMapInstance", map),
    // actions
  };
};
