import { createRouter, createWebHashHistory } from "vue-router";
import Options from "../components/todo/Options.vue";
import Composition from "../components/todo/Composition.vue";
import Todos from "./Todos.vue";

const routes = [
  { path: "/todos", component: Todos },
  { path: "/todos/options", component: Options },
  { path: "/todos/composition", component: Composition },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
