import App from './app.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import { loadingImages } from './src/js/util'


export function routerConfig(router, store){

    let promise = new Promise(function(resolve, reject) {
        
        const Home = resolve => require.ensure(['./src/pages/Home.vue'], () => resolve(require('./src/pages/Home.vue')), 'home')
        const Category = resolve => require.ensure(['./src/pages/Category.vue'], () => resolve(require('./src/pages/Category.vue')), 'category')
        const Gallery = resolve => require.ensure(['./src/pages/Gallery.vue'], () => resolve(require('./src/pages/Gallery.vue')), 'gallery')
        const Detail = resolve => require.ensure(['./src/pages/Detail.vue'], () => resolve(require('./src/pages/Detail.vue')), 'detail')
        //{importPage}//

        const routes = [
            { path: '/', component: Home, name: 'home' },
            { path: '/Category', component: Category, name: 'category' },
            { path: '/Gallery', component: Gallery, name: 'gallery' },
            { path: '/Detail', component: Detail, name: 'detail' },
            //{importRoute}//
            { path: '*', redirect: '/' }
        ];
        let loadedPages = [];

        router = new VueRouter({
            routes
        })
        
        router.beforeEach((to, from, next) => {
            // window.scrollTo(0, 0)
            // document.title = to.meta.title

            // store.dispatch('setUserPermission', Vue.cookie.get('__YDept_user_login') == 'true');
            // store.dispatch('setUserPermission', true);

            // if(/\/login/.test(to.path)){
            //     next()
            // }else{
            //     if(store.state.permission){
            //         next()
            //     }else{
            //         next({path: '/login'})
            //     }
            // }
            window.hideLoading()
            store.dispatch('setIsShowLoading', true);


            if(loadedPages.indexOf(to.name) >= 0){
                next()
            }else{
                loadedPages.push(to.name);
                switch (to.name) {
                    case 'home':
                        loadingImages([
                            './static/images/home-men-running-frame.png',
                            './static/images/home-men-running-pic.jpg',
                            './static/images/home-women-running-frame.png',
                            './static/images/home-women-running-pic.jpg',
                            './static/images/home-men-sport-frame.png',
                            './static/images/home-men-sport-pic.jpg',
                            './static/images/home-women-sport-frame.png',
                            './static/images/home-women-sport-pic.jpg',
                            './static/images/home-men-training-frame.png',
                            './static/images/home-men-training-pic.jpg',
                            './static/images/home-women-training-frame.png',
                            './static/images/home-women-training-pic.jpg',
                        ], () => {
                            next()
                        })
                        break;
                    case 'category':
                        loadingImages([
                            './static/images/category-men-running-frame.png',
                            './static/images/category-men-running-pic.jpg',
                            // './static/images/home-men-sport-frame.png',
                            // './static/images/home-men-sport-pic.jpg',
                            './static/images/category-men-training-frame.png',
                            './static/images/category-men-training-pic.jpg',
                            './static/images/category-women-running-frame.png',
                            './static/images/category-women-running-pic.jpg',
                            './static/images/category-women-sport-frame.png',
                            './static/images/category-women-sport-pic.jpg',
                            // './static/images/home-women-training-frame.png',
                            // './static/images/home-women-training-pic.jpg',
                        ], () => {
                            next()
                        })
                        break;
                
                    default:
                        next()
                        break;
                }
            }
            
        })

        router.afterEach((to, from) => {
            store.dispatch('setIsShowLoading', false);
        })

        resolve(router);
    });

    return promise
}

