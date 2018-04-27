<style lang="scss">
    .loading-wrap{
        .swiper-wrapper{
            height: 100%;
        }
    }
</style>

<style lang="scss" scoped>
    @import '../../css/common.scss';

    .nav-wrap{
        position: fixed;width: 0;height: 100%; top:0; left:100%; z-index: 100;background: #fff;
        .trigger{
            position: absolute;top:rem(185);right:0;width:rem(192);height: rem(185);background-repeat:no-repeat;background-size:cover;
        }
        .nav{
            a{display:inline-block;color:#fff;float:left;}
            position: absolute;top:rem(185);left: rem(-178);width: rem(178);height:100%; background:#fff;font-size:rem(22);
            .go-home{width:rem(178); height:rem(61); padding-top:rem(110);text-align:center;font-size:rem(22); border-left:1px solid #fff;border-bottom:1px solid #fff;background:url(../../images/icon-home.png) 50% 45%;background-size: rem(46) rem(40); background-repeat:no-repeat;}
            .go-shop{width:rem(178); height:rem(61); padding-top:rem(110);text-align:center;font-size:rem(22); border-top:1px solid #fff;border-left:1px solid #fff;border-bottom:1px solid #fff;background:url(../../images/icon-shop.png) 50% 45%;background-size: rem(43) rem(41); background-repeat:no-repeat;}
            .close{width:rem(178); height:rem(171); text-align:center;font-size:rem(22); border-left:1px solid #fff;border-bottom:1px solid #fff;background:url(../../images/icon-close.png) 50% 45%;background-size: rem(45) rem(42); background-repeat:no-repeat;}
            .nav-training{
                width:rem(166); height:rem(171);border-left:rem(12) solid #f3d454;position:relative;
                div{position:absolute;top:0;right:0;transform: rotate(-90deg) translateY(rem(-95));transform-origin: 100% 0%;width: rem(148);height:rem(95);text-align:left;font-family: ARMOUR_W_MdIt;border-left:1px solid #fff;padding-left:rem(20);}
            }
            .nav-running{
                width:rem(166); height:rem(171);border-left:rem(12) solid #df6737;position:relative;
                div{position:absolute;top:0;right:0;transform: rotate(-90deg) translateY(rem(-95));transform-origin: 100% 0%;width: rem(148);height:rem(95);text-align:left;font-family: ARMOUR_W_MdIt;border-left:1px solid #fff;padding-left:rem(20);}
            }
            .nav-sport{
                width:rem(166); height:rem(171);border-left:rem(12) solid #70c9e1;position:relative;
                div{position:absolute;top:0;right:0;transform: rotate(-90deg) translateY(rem(-95));transform-origin: 100% 0%;width: rem(150);height:rem(95);text-align:left;font-family: ARMOUR_W_MdIt;}
            }
        }
        .nav-bg-running{background:#ed7667;}
        .nav-bg-sport{background:#70c9e1;}
        .nav-bg-training{background:#f6d751;}
    }
    .slide-away-enter-active {
        transition: all .5s ease-out;
    }
    .slide-away-leave-active {
        transition: all .5s ease-out;
    }
    .slide-away-enter, .slide-away-leave-to {
        transform: translateX(rem(154));
    }

    
    @-webkit-keyframes triggerItem {
        0%  { -webkit-transform: translateX(0); }
        90% { -webkit-transform: translateX(0); }
        95% { -webkit-transform: translateX(rem(-15)); }
        100% { -webkit-transform: translateX(0); }
    }

    @-moz-keyframes triggerItem {
        0%  { -moz-transform: translateX(0); }
        90% { -moz-transform: translateX(0); }
        95% { -moz-transform: translateX(rem(-15)); }
        100% { -moz-transform: translateX(0); }
    }

    @-ms-keyframes triggerItem {
        0%  { -ms-transform: translateX(0); }
        90% { -ms-transform: translateX(0); }
        95% { -ms-transform: translateX(rem(-15)); }
        100% { -ms-transform: translateX(0); }
    }

    @keyframes triggerItem {
        0%  { -moz-transform: translateX(0); -ms-transform: translateX(0); -o-transform: translateX(0); -webkit-transform: translateX(0); transform: translateX(0); }
        90% { -moz-transform: translateX(0); -ms-transform: translateX(0); -o-transform: translateX(0); -webkit-transform: translateX(0); transform: translateX(0); }
        95% { -moz-transform: translateX(rem(-15)); -ms-transform: translateX(rem(-15)); -o-transform: translateX(rem(-15)); -webkit-transform: translateX(rem(-15)); transform: translateX(rem(-15)); }
        100% { -moz-transform: translateX(0); -ms-transform: translateX(0); -o-transform: translateX(0); -webkit-transform: translateX(0); transform: translateX(0); }
    }
</style>

<template>
    <div class="nav-wrap">
        <transition name="slide-away" mode="out-in">        
            <div class="trigger" v-show="!isShowNav" @click="show" :style="{backgroundImage:`url(./static/images/nav-${category}.png)`}"></div>
        </transition>
        <transition name="slide-away" mode="out-in">                
            <div :class="{'nav':true, 'nav-bg-running': category=='running', 'nav-bg-sport': category=='sport', 'nav-bg-training': category=='training'}" v-if="isShowNav">
                <router-link tag="a" class="go-home" :to="{ path: '/Home' }">HOME</router-link>
                <router-link tag="a" class="nav-training" :to="{ path: '/Gallery', query: { gender, category: 'training' }}">
                    <div>
                        <p>training</p>
                        <p>训练</p>
                    </div>
                </router-link>
                <router-link tag="a" class="nav-running" :to="{ path: '/Gallery', query: { gender, category: 'running' }}">
                    <div>
                        <p>running</p>
                        <p>跑步</p>
                    </div>
                </router-link>
                <router-link tag="a" class="nav-sport" :to="{ path: '/Gallery', query: { gender, category: 'sport' }}">
                    <div>
                        <p>sportstyle</p>
                        <p>运动休闲</p>
                    </div>
                </router-link>
                <a class="go-shop" @click="goShop">SHOP</a>
                <a class="close" @click="close"></a>
            </div>
        </transition>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    // import Icon from 'vue-awesome/components/Icon.vue'
    // import 'vue-awesome/icons/times'

    export default{
        props: ['gender', 'category'],
        components:{
            // Icon
        },
        data(){
            return {
                isShowNav: false
            }
        },
        computed:{
            ...mapState({

            })
        },
        mounted(){
            const self = this;
        },
        methods:{
            show(){
                this.isShowNav = true;
            },
            close(){
                this.isShowNav = false;
            },
            goShop(){
                window.location.href='https://www.underarmour.cn/'
            }
        }
    }
</script>

