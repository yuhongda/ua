<style lang="scss" scoped>
    @import '../css/common.scss';

    .page-wrap{
        position: absolute; width: 100%; min-height: 100%; top:0; left:0;overflow: hidden;
        .logo{
            position: absolute;width:rem(128);height:rem(75);top:rem(57);right:rem(22);background: url(../images/logo-black.png) 50% 50% no-repeat;background-size: cover;z-index:100;
        }
        .back{
            position:absolute;top:rem(20);left:rem(20); width:rem(127);height:rem(127);background:url(../images/icon-back.png) 50% 50% no-repeat;background-size:rem(25) rem(43);z-index:10;
        }
        .swiper-container{ 
            position: absolute;width: 100%; height: 100%; top:0; left:0; z-index: 8;
            .swiper-slide{
                height:100%;
                .frame{
                    position: absolute;width:100%;height:100%;top:0;left:0;z-index: 10;
                    background-position: 50% 0%; background-size: 100% 100%; background-repeat:no-repeat;
                }
                .frame{
                    position: absolute;width:100%;height:100%;top:0;left:0;z-index: 11;
                    background-position: 50% 0%; background-size: 100% auto; background-repeat:no-repeat;
                }
                .frame-bottom{
                    position: absolute;width:100%;height:100%;top:0;left:0;z-index: 10;
                    background-position: 50% 100%; background-size: 100% 100%; background-repeat:no-repeat;
                }
                .bg{
                    position: absolute;width:100%;height:100%;top:0;left:0;z-index: 9;
                    width: 82%;
                    height: 79.7%;
                    top: rem(185);
                    left: 9.2%;
                    background-position: 50% 0%; background-size: cover; background-repeat:no-repeat;
                    &:before { 
                        content: ''; position: absolute; width: rem(100); height: 100%; top: 0; left: 0; overflow: hidden; opacity: 0; z-index: 100;-webkit-transform: skewX(-25deg); -moz-transform: skewX(-25deg);
                        background: -moz-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,.2) 50%, rgba(255,255,255,0) 100%);
                        background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,.2) 50%,rgba(255,255,255,0) 100%);
                        background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,.2) 50%,rgba(255,255,255,0) 100%);
                    }
                }
            }
        }
        .anim-bg{
            /*animation: bg 20s linear infinite;*/
            &:before {-moz-animation:lightAnim 1s forwards 1s linear; -o-animation:lightAnim 1s forwards 1s linear; -webkit-animation:lightAnim 1s forwards 1s linear; animation:lightAnim 1s forwards 1s linear; }
        }
    }

    @-webkit-keyframes bg {
        50% { -webkit-transform: scale(1.2); }
    }

    @-moz-keyframes bg {
        50% { -moz-transform: scale(1.2); }
    }

    @-ms-keyframes bg {
        50% { -ms-transform: scale(1.2); }
    }

    @keyframes bg {
        50% { -moz-transform: scale(1.2); -ms-transform: scale(1.2); -o-transform: scale(1.2); -webkit-transform: scale(1.2); transform: scale(1.2); }
    }

    .slide-fade-enter-active {
        transition: all .5s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }
    
</style>

<template>
    <div class="page-wrap">
        <div class="logo"></div>
        <span class="back" @click="goBack"></span>        
        <swiper :options="swiperOption" ref="swiperRef2">
            <swiper-slide v-for="(item, key) in slides" :key="key">
                <div class="frame" :style="{ backgroundImage: `url(${item.frame})`}"></div>
                <div class="frame-bottom" :style="{ backgroundImage: `url(${item.frameBottom})`}"></div>
                <div :class="{'bg': true, 'anim-bg': currentSlider == key}" :style="{ backgroundImage: `url(${item.pic})`}"></div>
            </swiper-slide>
        </swiper>
        <transition name="slide-fade">
            <nav-comp :gender="selectedGender" :category="currentCategory" v-show="isShowNav"/>
        </transition>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    import NavComp from './components/NavComp.vue'

    export default{
        components:{
            NavComp
        },
        data(){
            const self = this;
            return {
                swiperOption: {
                    parallax: false,
                    speed: 1000,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                        stopOnLastSlide: true
                    },
                    effect: 'slide',
                    on:{
                        transitionStart(){
                            self.isShowNav = false
                        },
                        transitionEnd(){
                            self.isShowNav = true
                            self.currentSlider = self.swiper.activeIndex
                            if(self.swiper.activeIndex == 0){
                                self.currentCategory = 'running';
                            }else if(self.swiper.activeIndex == 1){
                                self.currentCategory = 'sport';
                            }else{
                                self.currentCategory = 'training';
                            }
                        }
                    }
                },
                currentSlider: 0,
                selectedGender: self.$route.query.gender,
                currentCategory: 'running',
                isShowNav: true,
                categoryData: [
                    {
                        type: 'men',
                        data: [
                            {
                                frame: './static/images/home-running-frame-top.png',
                                frameBottom: './static/images/home-running-frame-bottom.png',
                                pic: './static/images/home-men-running-pic.jpg'
                            },
                            {
                                frame: './static/images/home-sport-frame-top.png',
                                frameBottom: './static/images/home-sport-frame-bottom.png',
                                pic: './static/images/home-men-sport-pic.jpg'
                            },
                            {
                                frame: './static/images/home-training-frame-top.png',
                                frameBottom: './static/images/home-training-frame-bottom.png',
                                pic: './static/images/home-men-training-pic.jpg'
                            },
                        ]
                    },
                    {
                        type: 'women',
                        data: [
                            {
                                frame: './static/images/home-running-frame-top.png',
                                frameBottom: './static/images/home-running-frame-bottom.png',
                                pic: './static/images/home-women-running-pic.jpg'
                            },
                            {
                                frame: './static/images/home-sport-frame-top.png',
                                frameBottom: './static/images/home-sport-frame-bottom.png',
                                pic: './static/images/home-women-sport-pic.jpg'
                            },
                            {
                                frame: './static/images/home-training-frame-top.png',
                                frameBottom: './static/images/home-training-frame-bottom.png',
                                pic: './static/images/home-women-training-pic.jpg'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            ...mapState({
            }),
            swiper() {
                return this.$refs.swiperRef2.swiper
            },
            slides() {
                return this.categoryData.filter(item => item.type == this.selectedGender)[0].data
            }
        },
        mounted(){
            
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            },
        }
    }
</script>

