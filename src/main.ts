import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store";
import { router } from "./route";
import mapboxgl from 'mapbox-gl'; 
 
mapboxgl.accessToken = 'pk.eyJ1IjoibGxzb255bGwiLCJhIjoiY2wwbDNnYnFnMDhuYzNldDQzeWF1bzY3eCJ9.L9vSduFcTqTFkbow4E-AUA';

if (!navigator.geolocation) {
  alert("Tu navegador no soporta la geolocalización");
  throw new Error("Tu navegador no soporta la geolocalización");
}

createApp(App).use(store).use(router).mount("#app");
