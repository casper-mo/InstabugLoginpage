import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/login.vue";
import NotFound from "../views/404.vue";
const routes = [
  {
    path: "/welcome",
    name: "Welcome",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
    meta: {
      requiresAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (localStorage.getItem("user") == null) {
//       next({
//         path: "/login",
//         params: { nextUrl: to.fullPath },
//       });
//     } else {
//       next({
//         path: "/welcome",
//         params: { nextUrl: to.fullPath },
//       });
//     }
//   } else {
//     next();
//   }
// });

export default router;
