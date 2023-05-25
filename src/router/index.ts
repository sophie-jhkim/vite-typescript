import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import BaseLayout from "../layouts/BaseLayout.vue";

const routes = [
    {
        path: "",
        component: BaseLayout,
        children: [
            {
                path: "",
                name: "home",
                component: () => import("../views/Index.vue"),
                meta: { requireLogin: false },
            },
        ],
    },
    // menu1
    {
        path: "/menu1",
        name: "menu1",
        component: BaseLayout,
        children: [
            {
                path: "",
                name: "menu1Main",
                component: () => import("../views/Menu1.vue"),
                meta: { requireLogin: false },
            },
            {
                path: ":mo",
                name: "menu1Detail",
                component: () => import("../views/Menu1Detail.vue"),
                meta: { requireLogin: false },
            },
        ],
    },
    // menu2
    {
        path: "/menu2",
        name: "menu2",
        component: BaseLayout,
        children: [
            {
                path: "",
                name: "menu2Main",
                component: () => import("../views/Menu2.vue"),
                meta: { requireLogin: false },
            },
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("../views/errors/404.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes as RouteRecordRaw[],
});

router.beforeEach(async (to, from, next) => {
    if (to.meta.requireLogin) {
        next({ path: "/login" });
    } else {
        next();
    }
});

export default router;
