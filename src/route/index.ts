import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../components/home";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "home",
    component: Home,
  },
];

export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
