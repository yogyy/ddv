import { createRouter, createWebHashHistory } from "vue-router";
import Options from "../components/todo/Options.vue";
import Composition from "../components/todo/Composition.vue";

const routes = [
  { path: "/", component: Options },
  { path: "/composition", component: Composition },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
