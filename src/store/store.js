import Vue from 'vue'
import Vuex from 'vuex'
// import { fetchUserinfo } from '../js/api'

import page1Store from './page1Store'
//{importStore}//

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        userinfo:{},
        permission:true,

        isShowLoading: false,
        loadingType: 1,
        //首页是否加载完成
        isHomePageMounted: false,
    },
    getters: {
        
    },
    mutations:{
        setUserinfo(state, data){
            state.userinfo = data
        },
        setUserPermission(state, value){
            state.permission = value
        },

        setIsShowLoading(state, value){
            state.isShowLoading = value
        },
        setIsHomePageMounted(state, value){
            state.isHomePageMounted = value
        }
    },
    actions:{
        /**
         * 获取用户信息
         * 
         * @param {any} {commit} 
         */
        getUserinfo({commit}){
            fetchUserinfo()
                .subscribe(result => {
                    if(result.success){
                        commit('setUserinfo', result.data);
                    }
                });
        },
        /**
         * 获取用户权限
         * 
         * @param {any} {commit, state} 
         * @param {any} permissionObj 从外部设置permission对象
         */
        getUserPermission({commit, state}, permissionObj){
            if(!state.permission.requested){
                if(!permissionObj){
                    fetchUserPermission()
                        .subscribe(data => {
                            if(data.status == 1){
                                commit('setUserPermission', { permission: {
                                    requested: true,
                                    valid: data.obj
                                } })
                            }else{
                                commit('setUserPermission', { permission: {
                                    requested: true,
                                    valid: false
                                } })
                            }
                        });
                }else{
                    commit('setUserPermission', permissionObj);
                }
            }
        },
        setUserPermission({commit}, value){
            commit('setUserPermission', value)
        },

        setIsHomePageMounted({commit}, value){
            commit('setIsHomePageMounted', value)
        },
        setIsShowLoading({commit}, value){
            commit('setIsShowLoading', value)
        }
    },
    modules:{
        page1: page1Store,
        //{importModule}// 
    }
})

export default store