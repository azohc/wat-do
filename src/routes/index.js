import { createRouter, createWebHistory } from "vue-router";

const Roll = () => import("../views/RollView.vue");

const routes = [
  { path: "/", component: Roll },
  {
    path: "/:pathMatch(.*)*",
    component: Roll,
  },
  //   {
  //     path: "/:pathMatch(.*)*",
  //     name: "notFound",
  //     component: NotFound,
  //   },
  //   { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
