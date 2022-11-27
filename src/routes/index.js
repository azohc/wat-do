import { createRouter, createWebHistory } from "vue-router";
import {
  ROUTE_404,
  ROUTE_DOING,
  ROUTE_LOG,
  ROUTE_ROLL,
} from "../commons";

const RollView = () => import("../views/RollView.vue");
const DoingView = () => import("../views/DoingView.vue");
const LogView = () => import("../views/LogView.vue");
const NotFound = () => import("../views/NotFound.vue");

const routes = [
  { path: "/", name: ROUTE_ROLL, component: RollView },
  {
    path: "/doing",
    name: ROUTE_DOING,
    component: DoingView,
  },
  { path: "/log", name: ROUTE_LOG, component: LogView },
  {
    path: "/:pathMatch(.*)*",
    name: ROUTE_404,
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory("/wat-do/"),
  routes,
});

export { routes };
export default router;
