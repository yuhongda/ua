import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { routerConfig } from './router-config'
import Rx from 'rxjs/Rx';
// import VueRx from 'vue-rx'
import store from './src/store/store.js'
import App from './app.vue'
// import VueCookie from 'vue-cookie'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// import { Observable } from 'rxjs/Observable'
// import { Subscription } from 'rxjs/Subscription'
// import { Subject } from 'rxjs/Subject'
// import 'element-ui/lib/theme-default/index.css'
// import { 
//     Row, 
//     Col, 
// } from 'element-ui'
import VueLazyload from 'vue-lazyload'


Vue.use(VueRouter)
Vue.use(Vuex)
// Vue.use(VueRx, Rx)
// Vue.use(VueCookie);
Vue.use(VueAwesomeSwiper)
// Vue.use(Row)
// Vue.use(Col)
Vue.use(VueLazyload, {
    preLoad: 1.3,
    // error: 'dist/error.png',
    // loading: 'dist/loading.gif',
    attempt: 1
})


var router;
routerConfig(router, store).then((router) => {

    new Vue({
        el: '#app',
        components:{
            App
        },
        mounted(){
        },
        store,
        router
    });

})


