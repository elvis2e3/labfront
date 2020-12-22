import Vue from "vue";
import VueRouter from 'vue-router'

import App from "./App.vue";
import Dashboard from "./views/dashboard.vue";
import Problem1 from "./views/problem1.vue";
import Problem2 from "./views/problem2.vue";
import Problem3 from "./views/problem3.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "raiz",
        component: App,
        redirect: "/dashboard"
    },
    {
        path: "/dashboard",
        name: "raiz",
        component: Dashboard,
    },
    {
        path: "/problem-1",
        name: "problem1",
        component: Problem1
    },
    {
        path: "/problem-2",
        name: "problem2",
        component: Problem2
    },
    {
        path: "/problem-3",
        name: "problem3",
        component: Problem3
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
