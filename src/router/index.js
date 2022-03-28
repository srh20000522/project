import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    redirect: '/index',
    children: [{
            path: '/index',
            component: () =>
                import ('../components/Index')
        },
        {
            path: "/musician",
            component: () =>
                import ('../components/Musician')
        }, {
            path: "/singer",
            component: () =>
                import ('../components/Singer')
        }, {
            path: "/songlist",
            component: () =>
                import ('../components/SongList')
        }
    ]
}, ];

const router = new VueRouter({
    routes,
});

export default router;