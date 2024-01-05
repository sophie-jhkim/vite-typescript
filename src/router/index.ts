import { createRouter, createWebHistory } from "vue-router";
import { h, nextTick, resolveComponent } from "vue";
import type { RouteRecordRaw } from "vue-router";
import BaseLayout from "../layouts/BaseLayout.vue";

const routes = [
    {
        path: "/",
        component: BaseLayout,
        children: [
            {
                path: "",
                name: "Home",
                component: () => import("../views/Index.vue"),
                meta: { requireLogin: false },
            },
            {
                path: "gnb1",
                name: "Gnb1",
                component: {
                    render() {
                        return h(resolveComponent("router-view"));
                    },
                },
                children:[
                    {
                        path: "",
                        name: "Gnb1DashBoard",
                        component: () => import("../views/Gnb/Gnb1Index.vue"),
                    },
                    {
                        path: "sub1",
                        name: "Gnb1Sub1",
                        children:[
                            {
                                path:"",
                                name:"Gnb1Sub1Index",
                                component: () => import("../views/Gnb/Gnb1Sub1Index.vue"),
                            },
                            {
                                path:":id",
                                name:"Gnb1Sub1Detail",
                                component: () => import("../views/Gnb/Gnb1Sub1Detail.vue"),
                            },
                        ]
                    },
                    {
                        path: "sub2",
                        name: "Gnb1Sub2",
                        children:[
                            {
                                path:"",
                                name:"Gnb1Sub2Index",
                                component: () => import("../views/Gnb/Gnb1Sub2Index.vue"),
                            },
                            {
                                path:":id",
                                name:"Gnb1Sub2Detail",
                                component: () => import("../views/Gnb/Gnb1Sub2Detail.vue"),
                            },
                        ]
                    },
                ]
            },
            {
                path: "gnb2",
                name: "Gnb2",
                redirect: "/gnb2/sub1",
                component: {
                    render() {
                        return h(resolveComponent("router-view"));
                    },
                },
                children:[
                    {
                        path: "sub1",
                        name: "Gnb2Sub1",
                        children:[
                            {
                                path:"",
                                name:"Gnb2Sub1Index",
                                component: () => import("../views/Gnb/Gnb2Sub1Index.vue"),
                            },
                            {
                                path:":id",
                                name:"Gnb2Sub1Detail",
                                component: () => import("../views/Gnb/Gnb2Sub1Detail.vue"),
                            },
                        ]
                    },
                    {
                        path: "sub2",
                        name: "Gnb2Sub2",
                        redirect: "/gnb2/sub2/all",
                        children:[
                            {
                                path:":type(all|apple|banana|orange)",
                                name:"Gnb2Sub2Dynamic",
                                component: () => import("../views/Gnb/Gnb2Sub2Index.vue"),
                            },
                        ]
                    },
                ]
            },


            // menu1
            {
                path: "menu1",
                name: "menu1",
                /*omponent: BaseLayout,*/
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
                path: "menu2",
                name: "menu2",
                /*component: BaseLayout,*/
                children: [
                    {
                        path: "",
                        name: "menu2Main",
                        component: () => import("../views/Menu2.vue"),
                        meta: { requireLogin: false },
                    },
                ],
            },
            // notion
            {
                path: "/notion",
                name: "notion",
                /*component: BaseLayout,*/
                children: [
                    {
                        path: "",
                        name: "notionMain",
                        component: () => import("../views/Notion.vue"),
                        meta: { requireLogin: false },
                    },
                ],
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
