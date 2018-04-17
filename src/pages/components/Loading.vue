<style lang="scss">
    .loading-wrap{
        .swiper-wrapper{
            height: 100%;
        }
    }
</style>

<style lang="scss" scoped>
    @import '../../css/common.scss';

    .loading-wrap{
        position: absolute;width: 100%;height: 100%;z-index: 100;background: #000;
        .mask{
            position: absolute;width: 100%;height: 100%;z-index: 100;z-index: 10;
            background: url(../../images/mask.png) 50% 50%; background-size: cover;
        }
        .loading-finish{
            position: absolute;width: 100%;height: 100%;z-index: 100;z-index: 9;
            background: url(../../images/loading-finish.png) 50% 50%; background-size: cover;
        }
        .swiper-container{ 
            height: 100%; z-index: 8;
            .swiper-slide{height:100%;}
        }
        .slider-1{background: url(../../images/loading-1.jpg) 50% 50%; background-size: cover;}
        .slider-2{background: url(../../images/loading-2.jpg) 50% 50%; background-size: cover;}
        .slider-3{background: url(../../images/loading-3.png) 50% 50%; background-size: cover;}
    }
    .mask-fade-enter-active {
        transition: all 1s ease 1s;
    }
    .mask-fade-leave-active {
        transition: all 3s ease 1s;
    }
    .mask-fade-enter, .mask-fade-leave-to {
        opacity: 0;
    }
</style>

<template>
    <div class="loading-wrap">
        <transition name="mask-fade">
            <div class="mask" v-if="!(isHomePageMounted && counter > 5)"></div>
        </transition>
        <transition name="mask-fade">
            <div class="loading-finish" v-if="isHomePageMounted && counter > 5"></div>
        </transition>
        <swiper :options="swiperOption" ref="swiperRef">
            <swiper-slide v-for="n in 3" :key="n" :class="'slider-' + n"></swiper-slide>
        </swiper>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    let _timer = null;
    const indexArray = [1, 2, 3];
    const index = indexArray[Math.floor(indexArray.length * Math.random())]
    
    export default{
        components:{
            swiper,
            swiperSlide,
        },
        data(){
            return {
                swiperOption: {
                    autoplayDisableOnInteraction:false,
                    parallax: false,
                    speed: 100,
                    autoplay: {
                        delay: 100
                    },
                    effect: 'fade'
                },
                counter: 0
            }
        },
        computed:{
            ...mapState({
                isHomePageMounted: state => state.isHomePageMounted
            }),
            swiper() {
                return this.$refs.swiperRef.swiper
            }
        },
        watch: {
            counter: function (val, oldVal) {
                if(val > 5 && this.isHomePageMounted){
                    this.swiper.slideTo(index, 100, () => this.swiper.autoplay.stop());
                    this.$emit('on-finish')
                    window.clearInterval(_timer)
                }
            }
        },
        mounted(){
            const self = this;
            _timer = window.setInterval(function(){
                self.counter++;
            },1000)
        },
        methods:{
            
        }
    }
</script>

