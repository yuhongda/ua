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
            position: absolute;top:rem(200);left:rem(-50);width:rem(50);height: rem(150);padding-left:rem(38);
            li{width:rem(50);height:rem(47);box-shadow: 0 0 8px rgba(0,0,0,.3)}
            .item-1{background:#F5D750;animation: triggerItem 5s ease-out infinite;}
            .item-2{background:#ED7666;animation: triggerItem 5s ease-out infinite .2s;}
            .item-3{background:#54B8D9;animation: triggerItem 5s ease-out infinite .4s;}
        }
        .nav{
            position: absolute;top:0;left: rem(-154);width: rem(154);background:#fff;padding-left:7px;font-size:rem(22);
            .go-home{width:rem(153); height:rem(61); padding-top:rem(110);text-align:center;font-size:rem(22); border-left:1px solid #000;border-bottom:1px solid #000;background:url(../../images/icon-home.png) 50% 45%;background-size: rem(46) rem(40); background-repeat:no-repeat;}
            .go-shop{width:rem(153); height:rem(61); padding-top:rem(110);text-align:center;font-size:rem(22); border-top:1px solid #000;border-left:1px solid #000;border-bottom:1px solid #000;background:url(../../images/icon-shop.png) 50% 45%;background-size: rem(43) rem(41); background-repeat:no-repeat;}
            .close{width:rem(153); height:rem(171); text-align:center;font-size:rem(22); border-left:1px solid #000;border-bottom:1px solid #000;background:url(../../images/icon-close.png) 50% 45%;background-size: rem(45) rem(42); background-repeat:no-repeat;}
            .nav-training{
                width:rem(141); height:rem(171);border-left:rem(12) solid #f3d454;
                div{writing-mode: vertical-lr;transform: rotate(180deg);float: right; width: rem(64);height:rem(168);text-align:center;line-height:rem(70);border-top:1px solid #000;}
            }
            .nav-running{
                width:rem(141); height:rem(171);border-left:rem(12) solid #df6737;
                div{writing-mode: vertical-lr;transform: rotate(180deg);float: right; width: rem(64);height:rem(168);text-align:center;line-height:rem(70);border-top:1px solid #000;}
            }
            .nav-sport{
                width:rem(141); height:rem(171);border-left:rem(12) solid #70c9e1;
                div{writing-mode: vertical-lr;transform: rotate(180deg);float: right; width: rem(64);height:rem(168);text-align:center;line-height:rem(70);}
            }
        }
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
            <ul class="trigger" v-show="!isShowNav" @click="show">
                <li v-for="n in 3" :key="n" :class="`item-${n}`"></li>
            </ul>
        </transition>
        <transition name="slide-away" mode="out-in">                
            <div class="nav" v-if="isShowNav">
                <router-link tag="div" class="go-home" :to="{ path: '/Home' }">HOME</router-link>
                <router-link tag="div" class="nav-training" :to="{ path: '/Gallery', query: { gender, category: 'training' }}">
                    <div>training</div>
                </router-link>
                <router-link tag="div" class="nav-running" :to="{ path: '/Gallery', query: { gender, category: 'running' }}">
                    <div>running</div>
                </router-link>
                <router-link tag="div" class="nav-sport" :to="{ path: '/Gallery', query: { gender, category: 'sport' }}">
                    <div>sportstyle</div>
                </router-link>
                <div class="go-shop" @click="goShop">SHOP</div>
                <div class="close" @click="close"></div>
            </div>
        </transition>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    // import Icon from 'vue-awesome/components/Icon.vue'
    // import 'vue-awesome/icons/times'

    export default{
        props: ['gender'],
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

