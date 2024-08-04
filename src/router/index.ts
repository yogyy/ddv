import { createRouter, createWebHashHistory } from "vue-router";
import Options from "../components/todo/Options.vue";
import Composition from "../components/todo/Composition.vue";
import Todos from "./Todos.vue";
import About from "./About.vue";
import Pinia from "./Pinia.vue";

const routes = [
  { path: "/about", component: About },
  { path: "/pinia", component: Pinia },
  { path: "/todos", component: Todos },
  { path: "/todos/options", component: Options },
  { path: "/todos/composition", component: Composition },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
