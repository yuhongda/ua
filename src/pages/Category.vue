<style lang="scss" scoped>
    @import '../css/common.scss';

    .page-wrap{
        position: absolute; width: 100%; min-height: 100%; top:0; left:0;overflow: hidden;
        .logo{
            position: absolute;width:rem(128);height:rem(75);top:rem(59);right:rem(31);background: url(../images/logo-black.png) 50% 50% no-repeat;background-size: cover;z-index:100;
        }
        .swiper-container{ 
            position: absolute;width: 100%; height: 100%; top:0; left:0; z-index: 8;
            .swiper-slide{
                height:100%;
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
        .anim-bg{
            animation: bg 20s linear infinite;
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
        <swiper :options="swiperOption" ref="swiperRef2">
            <swiper-slide v-for="(item, key) in slides" :key="key">
                <div class="frame" :style="{ backgroundImage: `url(${item.frame})`}"></div>
                <div :class="{'bg': true, 'anim-bg': currentSlider == key}" :style="{ backgroundImage: `url(${item.pic})`}"></div>
            </swiper-slide>
        </swiper>
        <nav-comp :gender="selectedGender"/>
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
                    effect: 'coverflow',
                    on:{
                        slideChange() { 
                            self.currentSlider = self.swiper.activeIndex
                        }
                    }
                },
                currentSlider: 0,
                selectedGender: self.$route.query.gender,
                categoryData: [
                    {
                        type: 'men',
                        data: [
                            {
                                frame: './static/images/category-men-running-frame.png',
                                pic: './static/images/category-men-running-pic.jpg'
                            },
                            {
                                frame: './static/images/home-men-sport-frame.png',
                                pic: './static/images/home-men-sport-pic.jpg'
                            },
                            {
                                frame: './static/images/category-men-training-frame.png',
                                pic: './static/images/category-men-training-pic.jpg'
                            }
                        ]
                    },
                    {
                        type: 'women',
                        data: [
                            {
                                frame: './static/images/category-women-running-frame.png',
                                pic: './static/images/category-women-running-pic.jpg'
                            },
                            {
                                frame: './static/images/category-women-sport-frame.png',
                                pic: './static/images/category-women-sport-pic.jpg'
                            },
                            {
                                frame: './static/images/home-women-training-frame.png',
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
            
        }
    }
</script>

