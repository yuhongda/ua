<style lang="scss" scoped>
    @import '../css/common.scss';

    .page-wrap{
        position: absolute; width: 100%; min-height: 100%; top:0; left:0;
        .logo{
            position: absolute;width:rem(128);height:rem(75);top:rem(57);right:rem(22);background: url(../images/logo-black.png) 50% 50% no-repeat;background-size: cover;z-index:100;
        }
        .swiper-container{ 
            position: absolute;width: 100%; height: 100%; z-index: 8; top:0; left:0;
            .swiper-slide{
                height:100%;
                .text{
                    /*position: absolute; top:rem(390);top:45%;left:9.2%;color:#fff;z-index: 11;border-bottom-width:rem(12);border-bottom-style: solid;padding-bottom:rem(5);
                    .lookbook{font-family:Helvetica;font-size: rem(52);line-height: 100%;text-align: justify;text-shadow: 1px 1px 0px rgba(0,0,0,.3);}
                    .ss18{
                        text-shadow: 1px 1px 0px rgba(0,0,0,.3);
                        font-family:Helvetica;
                        font-size: rem(90);line-height: 100%;font-weight: bold;}
                    .txt{width: rem(227);height: rem(116);background: url(../images/home-text.png); background-size: cover; background-repeat: no-repeat;}
                    .txt{font-size: rem(40);}*/
                    position: absolute; top:45%;left:9.2%;width:rem(239);height:rem(224); background-position: 50% 50%;background-repeat:no-repeat;background-size:cover;z-index:10;
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
        .slider-1{
            .text{
                background-image: url(../images/home-text-running.png);
            }
            .frame{
                background-image: url(../images/home-running-frame-top.png);
            }
            .frame-bottom{
                background-image: url(../images/home-running-frame-bottom.png);
            }
            .bg{
                background-image: url(../images/home-men-running-pic.jpg);
            }
        }
        .slider-2{
            .text{
                background-image: url(../images/home-text-running.png);
            }
            .frame{
                background-image: url(../images/home-running-frame-top.png);
            }
            .frame-bottom{
                background-image: url(../images/home-running-frame-bottom.png);
            }
            .bg{
                background-image: url(../images/home-women-running-pic.jpg);
            }
        }
        .slider-3{
            .text{
                background-image: url(../images/home-text-sport.png);
            }
            .frame{
                background-image: url(../images/home-sport-frame-top.png);
            }
            .frame-bottom{
                background-image: url(../images/home-sport-frame-bottom.png);
            }
            .bg{
                background-image: url(../images/home-men-sport-pic.jpg);
            }
        }
        .slider-4{
            .text{
                background-image: url(../images/home-text-sport.png);
            }
            .frame{
                background-image: url(../images/home-sport-frame-top.png);
            }
            .frame-bottom{
                background-image: url(../images/home-sport-frame-bottom.png);
            }
            .bg{
                background-image: url(../images/home-women-sport-pic.jpg);
            }
        }
        .slider-5{
            .text{
                background-image: url(../images/home-text-training.png);
            }
            .frame{
                background-image: url(../images/home-training-frame-top.png);
            }
            .frame-bottom{
                background-image: url(../images/home-training-frame-bottom.png);
            }
            .bg{
                background-image: url(../images/home-men-training-pic.jpg);
            }
        }
        .slider-6{
            .text{
                background-image: url(../images/home-text-training.png);
            }
            .frame{
                background-image: url(../images/home-training-frame-top.png);
            }
            .frame-bottom{
                background-image: url(../images/home-training-frame-bottom.png);
            }
            .bg{
                background-image: url(../images/home-women-training-pic.jpg);
            }
        }
        .anim-bg{
            &:before {-moz-animation:lightAnim 1s forwards 1s linear; -o-animation:lightAnim 1s forwards 1s linear; -webkit-animation:lightAnim 1s forwards 1s linear; animation:lightAnim 1s forwards 1s linear; }
            /*animation: bg 20s linear infinite;*/
        }
        .gender{
            position: absolute;width:100%;height: rem(78);top: 81.3%;text-align: center;z-index: 10;
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

    @-webkit-keyframes lightAnim {
        0% { left:0;opacity:0;  }
        50% { left:50%;opacity:1; }
        100% { left:100%; opacity:0;visibility: hidden; } 
    }

    @-moz-keyframes lightAnim {
        0% { left:0;opacity:0;  }
        50% { left:50%;opacity:1; }
        100% { left:100%; opacity:0;visibility: hidden; } 
    }

    @-ms-keyframes lightAnim {
        0% { left:0;opacity:0;  }
        50% { left:50%;opacity:1; }
        100% { left:100%; opacity:0;visibility: hidden; } 
    }

    @keyframes lightAnim {
        0% { left:0;opacity:0;  }
        50% { left:50%;opacity:1; }
        100% { left:100%; opacity:0;visibility: hidden; } 
    }
    
</style>

<template>
    <div class="page-wrap">
        <div class="logo"></div>
        <swiper :options="swiperOption" ref="swiperRef">
            <swiper-slide class="slider-1">
                <div class="text"></div>
                <div class="frame"></div>
                <div class="frame-bottom"></div>
                <div :class="{'bg': true, 'anim-bg': currentSlider == 0}">
                </div>
            </swiper-slide>
            <swiper-slide class="slider-2">
                <div class="text"></div>
                <div class="frame"></div>
                <div class="frame-bottom"></div>
                <div :class="{'bg': true, 'anim-bg': currentSlider == 1}">
                </div>
            </swiper-slide>
            <swiper-slide class="slider-3">
                <div class="text"></div>
                <div class="frame"></div>
                <div class="frame-bottom"></div>
                <div :class="{'bg': true, 'anim-bg': currentSlider == 2}">
                </div>
            </swiper-slide>
            <swiper-slide class="slider-4">
                <div class="text"></div>
                <div class="frame"></div>
                <div class="frame-bottom"></div>
                <div :class="{'bg': true, 'anim-bg': currentSlider == 3}">
                </div>
            </swiper-slide>
            <swiper-slide class="slider-5">
                <div class="text"></div>
                <div class="frame"></div>
                <div class="frame-bottom"></div>
                <div :class="{'bg': true, 'anim-bg': currentSlider == 4}">
                </div>
            </swiper-slide>
            <swiper-slide class="slider-6">
                <div class="text"></div>
                <div class="frame"></div>
                <div class="frame-bottom"></div>
                <div :class="{'bg': true, 'anim-bg': currentSlider == 5}">
                </div>
            </swiper-slide>
        </swiper>
        <div class="gender">
            <button @click="go('men')">男子</button>
            <button @click="go('women')">女子</button>
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
                    effect: 'slide',
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

