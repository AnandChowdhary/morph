import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/setup",
    name: "setup",
    component: () => import("../views/Setup.vue")
  },
  {
    path: "/translate/:user/:repo",
    name: "translate",
    component: () => import("../views/Translate.vue")
  },
  {
    path: "/callback",
    name: "callback",
    component: () => import("../views/Callback.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
