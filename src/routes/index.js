import { createRouter, createWebHistory } from "vue-router";

const RollView = () => import("../views/RollView.vue");
const DoingView = () => import("../views/DoingView.vue");
const LogView = () => import("../views/LogView.vue");
const NotFound = () => import("../views/NotFound.vue");

const routes = [
  { path: "/", component: RollView },
  { path: "/doing", component: DoingView },
  { path: "/log", component: LogView },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory("/wat-do/"),
  routes,
});

export default router;
