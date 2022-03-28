import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import '@/style/index.css'
import { Search } from 'vant';

Vue.use(ElementUI)
Vue.use(Search)
Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");