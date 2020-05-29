import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Help from "./views/Help.vue";
import Blog from "./views/Blog.vue";

Vue.use(Router);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/blog",
        name: "blog",
        component: Blog
    },
    {
        path: "/about",
        name: "about",
        component: About
    },
    {
        path: "/help",
        name: "help",
        component: Help
    }
];

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes //route: routes
});
