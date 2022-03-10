// https://gist.github.com/Klerith/3c3bd3b6895e9d0672f1324d88099ece
import { createStore } from "vuex";

import placesModule from "./places";
import mapModule from "./map";
import { PlacesState } from "./places/state";
import { MapState } from "./map/state";

export interface StateInterface {
  places: PlacesState;
  map: MapState;
}

export const store = createStore<StateInterface>({
  modules: {
    places: placesModule,
    map: mapModule,
  },
});
