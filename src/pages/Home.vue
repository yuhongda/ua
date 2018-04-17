<style lang="scss" scoped>
    @import '../css/common.scss';

    .page-wrap{
        position: absolute; width: 100%; min-height: 100%; top:0; left:0;
        .logo{
            position: absolute;width:rem(128);height:rem(75);top:rem(59);right:rem(31);background: url(../images/logo-black.png) 50% 50% no-repeat;background-size: cover;z-index:100;
        }
        .swiper-container{ 
            position: absolute;width: 100%; height: 100%; z-index: 8; top:0; left:0;
            .swiper-slide{
                height:100%;
                .text{
                    position: absolute; top:rem(390);top:29%;left:7.2%;color:#fff;z-index: 11;border-bottom-width:rem(12);border-bottom-style: solid;padding-bottom:10px;
                    .lookbook{font-family:Helvetica;font-size: rem(52);line-height: 100%;text-align: justify;}
                    .ss18{
                        font-family:Helvetica;
                        font-size: rem(90);line-height: 100%;font-weight: bold;}
                    .txt{width: rem(227);height: rem(116);background: url(../images/home-text.png); background-size: cover; background-repeat: no-repeat;}
                }
                .frame{
                    position: absolute;width:100%;height:100%;top:0;left:0;z-index: 10;
                    background-position: 50% 0%; background-size: 100% 100%; background-repeat:no-repeat;
                }
                .bg{
                    position: absolute;width:100%;height:100%;top:0;left:0;z-index: 9;
                    background-position: 50% 0%; background-size: cover; background-repeat:no-repeat;
                }
            }
        }
        .slider-1{
            .text{
                border-color: #ED7666;
                .lookbook{color:#000;}
                .ss18{color:#000;}
            }
            .frame{
                background-image: url(../images/home-men-running-frame.png);
            }
            .bg{
                background-image: url(../images/home-men-running-pic.jpg);
            }
        }
        .slider-2{
            .text{
                border-color: #ED7666;
                .lookbook{color:#000;}
                .ss18{color:#000;}
            }
            .frame{
                background-image: url(../images/home-women-running-frame.png);
            }
            .bg{
                background-image: url(../images/home-women-running-pic.jpg);
            }
        }
        .slider-3{
            .text{
                border-color: #54B8D9;
            }
            .frame{
                background-image: url(../images/home-men-sport-frame.png);
            }
            .bg{
                background-image: url(../images/home-men-sport-pic.jpg);
            }
        }
        .slider-4{
            .text{
                border-color: #54B8D9;
            }
            .frame{
                background-image: url(../images/home-women-sport-frame.png);
            }
            .bg{
                background-image: url(../images/home-women-sport-pic.jpg);
            }
        }
        .slider-5{
            .text{
                border-color: #F5D750;
            }
            .frame{
                background-image: url(../images/home-men-training-frame.png);
            }
            .bg{
                background-image: url(../images/home-men-training-pic.jpg);
            }
        }
        .slider-6{
            .text{
                border-color: #F5D750;
            }
            .frame{
                background-image: url(../images/home-women-training-frame.png);
            }
            .bg{
                background-image: url(../images/home-women-training-pic.jpg);
            }
        }
        .anim-bg{
            animation: bg 20s linear infinite;
        }
        .gender{
            position: absolute;width:100%;height: rem(78);top: 63.6%;text-align: center;z-index: 10;
            button{
                display: inline-block;margin: 0 rem(25);outline: none;
                width:rem(212);height: rem(78);border: 3px solid #fff;background: none;font-size: rem(34);color:#fff;
                &:hover{
                    background: #fff;color:#000;
                }
            }
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
    
</style>

<template>
    <div class="page-wrap">
        <div class="logo"></div>
        <swiper :options="swiperOption" ref="swiperRef">
            <swiper-slide class="slider-1">
                <div class="text">
                    <p class="lookbook">Lookbook</p>
                    <p class="ss18">SS18</p>
                    <div class="txt"></div>
                </div>
                <div class="frame"></div>
                <div :class="{'bg': true, 'anim-bg': currentSlider == 0}">
                </div>
            </swiper-slide>
            <swiper-slide class="slider-2">
                <div class="text">
                    <p class="lookbook">Lookbook</p>
                    <p class="ss18">SS18</p>
                    <div class="txt"></div>
                </div>
                <div class="frame"></div>
                <div :class="{'bg': true, 'anim-bg': currentSlider == 1}">
                </div>
            </swiper-slide>
            <swiper-slide class="slider-3">
                <div class="text">
                    <p class="lookbook">Lookbook</p>
                    <p class="ss18">SS18</p>
                    <div class="txt"></div>
                </div>
                <div class="frame"></div>
                <div :class="{'bg': true, 'anim-bg': currentSlider == 2}">
                </div>
            </swiper-slide>
            <swiper-slide class="slider-4">
                <div class="text">
                    <p class="lookbook">Lookbook</p>
                    <p class="ss18">SS18</p>
                    <div class="txt"></div>
                </div>
                <div class="frame"></div>
                <div :class="{'bg': true, 'anim-bg': currentSlider == 3}">
                </div>
            </swiper-slide>
            <swiper-slide class="slider-5">
                <div class="text">
                    <p class="lookbook">Lookbook</p>
                    <p class="ss18">SS18</p>
                    <div class="txt"></div>
                </div>
                <div class="frame"></div>
                <div :class="{'bg': true, 'anim-bg': currentSlider == 4}">
                </div>
            </swiper-slide>
            <swiper-slide class="slider-6">
                <div class="text">
                    <p class="lookbook">Lookbook</p>
                    <p class="ss18">SS18</p>
                    <div class="txt"></div>
                </div>
                <div class="frame"></div>
                <div :class="{'bg': true, 'anim-bg': currentSlider == 5}">
                </div>
            </swiper-slide>
        </swiper>
        <div class="gender">
            <button @click="go('men')">men</button>
            <button @click="go('women')">women</button>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'

    export default{
        components:{
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
                    effect: 'coverflow',
                    on:{
                        slideChange() { 
                            self.currentSlider = self.swiper.activeIndex
                        }
                    }
                },
                currentSlider: 0                
            }
        },
        computed:{
            ...mapState({
            }),
            swiper() {
                return this.$refs.swiperRef.swiper
            }
        },
        mounted(){
        },
        methods:{
            go(gender){
                this.$router.push({path:'/Category', query: { gender }})
            }
        }
    }
</script>

