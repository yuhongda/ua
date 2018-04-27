<style lang="scss">
    @import './src/css/common.scss';
    @font-face {
        font-family: FZYouHJW;
        src: url('./src/fonts/FZYouHJW_Xian.eot');
        src: url('./src/fonts/FZYouHJW_Xian.eot?#iefix') format("embedded-opentype"),url('./src/fonts/FZYouHJW_Xian.woff') format("woff"),url('./src/fonts/FZYouHJW_Xian.ttf') format("truetype"),url('./src/fonts/FZYouHJW_Xian.svg#open_sansregular') format("svg");
        font-weight: 200;
        font-style: normal
    }

    @font-face {
        font-family: FZYouHJW;
        src: url('./src/fonts/FZYouHJW_ChaoXi.eot');
        src: url('./src/fonts/FZYouHJW_ChaoXi.eot?#iefix') format("embedded-opentype"),url('./src/fonts/FZYouHJW_ChaoXi.woff') format("woff"),url('./src/fonts/FZYouHJW_ChaoXi.ttf') format("truetype"),url('./src/fonts/FZYouHJW_ChaoXi.svg#open_sansregular') format("svg");
        font-weight: 200;
        font-style: normal
    }

    @font-face {
        font-family: Teko_Light;
        src: url('./src/fonts/Teko_Light.ttf') format("truetype");
        font-weight: 200;
        font-style: normal
    }

    @font-face {
        font-family: ARMOUR_W_MdIt;
        src: url('./src/fonts/ARMOUR_W_MdIt.ttf') format("truetype");
        font-weight: 200;
        font-style: normal
    }

    @media only screen and (-webkit-min-device-pixel-ratio: 2){html{-webkit-text-size-adjust:none}}
    body,div,p,h1,h2,h3,h4,h5,h6,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,textarea,table,th,td{margin:0;padding:0;}address,cite,em,i{font-style:normal;}li{list-style:none;}a{text-decoration:none;}a:hover{text-decoration:underline;}legend{color:#000;}fieldset,img{border:0;}table{border-collapse:collapse;border-spacing:0;}
    html, body{height: 100%;}
    body {
        color:#333; background: #fff;
        -webkit-appearance: none;
        font-family:"Hiragino Sans GB","Microsoft YaHei","微软雅黑",tahoma,Helvetica,arial,sans-serif,simsun,"宋体";
        font-size:1rem;
    }
    .layout-box { display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex; }

    .slide-fade-enter-active {
        transition: all 1s ease .5s;
    }
    .slide-fade-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }

    .fade-enter-active {
        transition: all 1s ease .5s;
    }
    .fade-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .fade-away-enter-active {
        transition: all 1s ease 1s;
    }
    .fade-away-leave-active {
        transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .fade-away-enter, .fade-away-leave-to {
        transform: translateX(-100%);        
    }

    .zoom-enter-active {
        transition: all 1s ease 1s;
    }
    .zoom-leave-active {
        transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .zoom-enter, .zoom-leave-to {
        transform: scale(.5);
        opacity: 0;
    }

    /* layout */
    .site-wrap{min-height: 100%;}
    .transition-wrap{position: absolute; width: 100%; min-height: 100%; top:0; left:0;}
</style>

<template>
    <div class="site-wrap">
        <transition name="fade">
            <loading-comp v-show="isShowLoading" :type="loadingType"/>
        </transition>
        <transition name="fade">
            <div v-show="!isShowLoading" class="transition-wrap">
                <transition name="fade">
                    <router-view></router-view>
                </transition>
            </div>
        </transition>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { mapState, mapGetters } from 'vuex'
    import Rx from 'rxjs/Rx'
    import LoadingComp from './src/pages/components/LoadingComp.vue'

    export default {
        components:{
            LoadingComp
        },
        data() {
            return {
                
            }
        },
        computed:{
            ...mapState({
                isShowLoading: state => state.isShowLoading,
                loadingType: state => state.loadingType,
            })
        },
        methods:{
            
        },
        created (){

        },
        mounted (){
            
        }
     };
</script>
