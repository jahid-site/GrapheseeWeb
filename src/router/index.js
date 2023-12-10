import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/LoginPage.vue"),
  },
  {
    path: "/create_new_account",
    component: () => import("@/pages/CreateNewAccountPage.vue"),
  },
  {
    path: "/home",
    component: () => import("@/pages/HomePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
