import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import "normalize.css";

//Global Filters
import "./filters";

Vue.config.productionTip = false;

//Create a custom Directive, that change the Font Size Dynamic

Vue.directive("fontSize", {
    bind: function(el, binding) {
        el.style.fontSize = binding.value + 'px';
    }
});
new Vue({
    router,
    store,
    render: h => h(App) //EcmaScript6
}).$mount("#app"); //el = mount
