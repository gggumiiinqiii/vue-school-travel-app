import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

import sourceData from "@/data.json";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/example/:id(\\d+)*",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/protected",
    name: "protected",

    components: {
      default: () => import("@/views/Protected.vue"),
      LeftSidebar: () => import("@/components/LeftSidebar.vue"),
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/invoices",
    name: "invoices",
    components: {
      default: () => import("@/views/Invoices.vue"),
      LeftSidebar: () => import("@/components/LeftSidebar.vue"),
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
  // 赖加载会打包后会多生成一个组件的js文件
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/brazil",
    name: "Brazil",
    component: () => import("@/views/Brazil.vue"),
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: () => import("@/views/Hawaii.vue"),
  },
  {
    path: "/jamaica",
    name: "Jamaica",
    component: () => import("@/views/Jamaica.vue"),
  },
  {
    path: "/panama",
    name: "Panama",
    component: () => import("@/views/Panama.vue"),
  },
  // props可以修改属性
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
    props: true,
    beforeEnter(to, from) {
      let exits = sourceData.destinations.find(
        (destination) => destination.id == to.params.id
      );
      if (!exits) {
        return { name: "NotFound" };
      }
    },
    children: [
      // props可以修改属性
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: () => import("@/views/ExperienceShow.vue"),
        props: true,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((res) => {
        setTimeout(() => res({ top: 0, behavior: "smooth" }), 0.3);
      })
    );
  },
});
router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !window.user) {
    return { name: "login", query: { redirect: to.fullPath } };
  }
});
export default router;
