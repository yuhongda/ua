<style lang="scss" scoped>
    @import '../css/common.scss';

    .page-wrap{
        position: absolute; width: 100%; min-height: 100%; top:0; left:0;background-position: 50% 50%;background-repeat: no-repeat;background-size: cover;
        .logo{
            position: absolute;width:rem(128);height:rem(75);top:rem(45);right:rem(31);background: url(../images/logo-black.png) 50% 50% no-repeat;background-size: cover;z-index:100;
        }
        .detail-header{
            height: rem(127);padding-top:rem(20);background:#fff;
            .close{
                float:left;width:rem(127);height:rem(127);background:url(../images/icon-close-black.png) 50% 50% no-repeat;background-size:rem(45) rem(42);
            }
        }
        .swiper-wrap{
            position: relative;
            .swiper-button-next{outline: none;
                background:url(../images/next.png) 50% 50% no-repeat;background-size:cover;
                right:rem(20);
                height: rem(43); width: rem(24);
            }
            .swiper-button-prev{outline: none;
                left:rem(20);            
                background:url(../images/prev.png) 50% 50% no-repeat;background-size:cover;
                height: rem(43); width: rem(24);
            }
        }
        .swiper-container{
            .swiper-wrapper {
                .swiper-slide{
                    display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;
                    justify-content: center; align-items: center;
                    img{width:100%;}
                }
            }
        }
        .product-list{
            position:fixed;bottom:10%;left:0;width:100%;z-index:10;
            li{
                font-size:rem(22);margin-top:rem(10);transform:translateX(-100%);opacity:0;
                &:last-child{
                    height:rem(60);width:rem(92);background:url(../images/icon-cart.png) rem(23) 50% no-repeat;background-size:rem(45) rem(42);
                }
                a{
                    line-height:rem(30); padding:rem(15) 0 rem(15) rem(23);display:inline-block;color:#000;font-size:rem(22);
                    span{
                        display:inline-block;float:left;
                        &:first-child{max-width:rem(550);}
                        &:nth-child(2){padding:0 rem(10);}
                        &:last-child{padding:0 rem(20) 0 rem(5);}
                    }
                    .fa-icon{
                        width: auto;float:left;margin-top:rem(3);
                        height: rem(22);
                        max-width: 100%;
                        max-height: 100%;
                    }
                }
                @for $i from 1 through 99{
                    &.anim:nth-child(#{$i}){
                        transform:translateX(0);opacity:1;transition: all .5s ease $i / 3 + s;
                    }
                }
                    
            }
        }
        .product-list-running{
            li{a{background-color:#ED7666;}}
            li:last-child{background-color:#ED7666;}
        }
        .product-list-sport{
            li{a{background-color:#54B8D9;}}
            li:last-child{background-color:#54B8D9;}
        }
        .product-list-training{
            li{a{background-color:#F5D750;}}
            li:last-child{background-color:#F5D750;}
        }
    }
</style>

<template>
    <div class="page-wrap" :style="{backgroundImage: `url(./static/images/detail-bg-${this.gender}-${this.category}.jpg)`}">
        <div class="logo"></div>
        <div class="detail-header">
            <span class="close" @click="close"></span>
        </div>
        <div class="swiper-wrap">
            <swiper :options="swiperOption" ref="swiperRefDetail">
                <swiper-slide v-for="(item, key) in detailData" :key="key">
                    <img :src="item.pic" alt="" />
                </swiper-slide>
            </swiper>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        <ul :class="{'product-list':true,'product-list-running': category == 'running','product-list-sport': category == 'sport','product-list-training': category == 'training'}">
            <li v-for="(item, key) in detailData[currentSlider].links" :key="key" :class="{anim: !isHide}">
                <a :href="item.link">
                    <span>{{item.text}}</span>
                    <span>|</span>
                    <span><icon name="play"></icon></span>
                </a>
            </li>
            <li :key="99" :class="{anim: !isHide}" @click="goShop"></li>
        </ul>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    import { getDetailData } from '../js/util'
    import Icon from 'vue-awesome/components/Icon.vue'
    import 'vue-awesome/icons/play'

    export default{
        components:{
            Icon
        },
        data(){
            const self = this;
            return {
                gender: this.$route.query.gender,
                category: this.$route.query.category,
                index: this.$route.query.index,
                swiperOption: {
                    parallax: false,
                    speed: 1000,
                    autoHeight:true,
                    autoplay: {
                        delay: 15000,
                        disableOnInteraction: false,
                        stopOnLastSlide: true
                    },
                    effect: 'slide',
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    on:{
                        init(){
                            self.isHide = false
                        },
                        transitionStart(){
                            self.isHide = true
                        },
                        transitionEnd() { 
                            self.currentSlider = self.swiper.activeIndex
                            self.$nextTick(function(){
                                self.isHide = false
                            })
                        }
                    }
                },
                currentSlider: 0,
                isHide:true
            }
        },
        computed:{
            ...mapState({
            }),
            swiper() {
                return this.$refs.swiperRefDetail.swiper
            },
            detailData: function(){ 
                return getDetailData({
                    gender: this.gender,
                    category: this.category,
                    index: this.index
                })
            }
        },
        mounted(){
            this.swiper.slideTo(this.index - 1, 0, null);
        },
        methods:{
            close(){
                this.$router.go(-1);
            },
            goShop(){
                window.location.href='https://www.underarmour.cn/'
            }
        }
    }
</script>

