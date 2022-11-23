import { createRouter, createWebHistory } from "vue-router";

const RollView = () => import("../views/RollView.vue");
const DoingView = () => import("../views/DoingView.vue");
const LogView = () => import("../views/LogView.vue");
const NotFound = () => import("../views/NotFound.vue");

// TODO fix base route on deployed page
const routes = [
  { path: "/", component: RollView },
  { path: "/doing", component: DoingView },
  { path: "/log", component: LogView },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
  //   { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
