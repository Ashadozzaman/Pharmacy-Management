import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
const Overview = () => import("../views/dashboard/Overview.vue");
const Drugs = () => import("../views/dashboard/Drugs.vue");
const Vendors = () => import("../views/dashboard/Vendors.vue");
const Setting = () => import("../views/dashboard/Setting.vue");
const SellingHistory = () => import("../views/dashboard/SellingHistory.vue");

const routes = [
    { path: "/", component: Login },
    {
        path: "/dashboard",
        component: Dashboard,
        redirect:"dashboard/overview",
        children: [
            { path: "overview", component: Overview },
            { path: "drugs", component: Drugs },
            { path: "vendors", component: Vendors },
            { path: "setting", component: Setting },
            { path: "selling/history", component: SellingHistory },
        ]
    },
];

const router = createRouter({
    routes: routes,
    history: createWebHistory()
});

export default router;