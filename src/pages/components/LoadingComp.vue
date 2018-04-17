<style lang="scss" scoped>
    .loading-wrap{
        .swiper-wrapper{
            height: 100%;
        }
    }
</style>

<style lang="scss" scoped>
    @import '../../css/common.scss';

    .loading-wrap{
        position: absolute;width: 100%;height: 100%;top:0;left:0; background: #fff;z-index: 101;
        .inner{
            position: absolute;width: 100%;height: 100%;top:0;left:0;
            background: linear-gradient(270deg, rgba(245,215,80,.7), rgba(237, 118, 102, .7), rgba(84,184,217,.7));
            background-size: 600% 600%;

            -webkit-animation: AnimationName 10s ease infinite;
            -moz-animation: AnimationName 10s ease infinite;
            animation: AnimationName 10s ease infinite;

            @-webkit-keyframes AnimationName {
                0%{background-position:0% 50%}
                50%{background-position:100% 50%}
                100%{background-position:0% 50%}
            }
            @-moz-keyframes AnimationName {
                0%{background-position:0% 50%}
                50%{background-position:100% 50%}
                100%{background-position:0% 50%}
            }
            @keyframes AnimationName { 
                0%{background-position:0% 50%}
                50%{background-position:100% 50%}
                100%{background-position:0% 50%}
            }
            .loading{width:rem(219);height:rem(535);position:absolute;top:50%;left:50%;margin-top:rem(-267.5);margin-left:rem(-109.5);background:url(../../images/loading.png) no-repeat;background-size:cover;z-index:2;}
            .loading-bg{width:rem(219);height:rem(535);position:absolute;top:50%;left:50%;margin-top:rem(-267.5);margin-left:rem(-109.5);background:url(../../images/loading.png) no-repeat;background-size:cover;z-index:1;opacity:.2;
                animation: bg 1s linear infinite;
            }
        }
        
    }

    @-webkit-keyframes bg {
        50% { -webkit-transform: scale(1.1); }
        90% { -webkit-transform: scale(1.2);opacity:0; }
        100% { -webkit-transform: scale(1.3);opacity:0; }
    }

    @-moz-keyframes bg {
        50% { -moz-transform: scale(1.1); }
        90% { -moz-transform: scale(1.2);opacity:0; }
        100% { -moz-transform: scale(1.3);opacity:0; }
    }

    @-ms-keyframes bg {
        50% { -ms-transform: scale(1.1); }
        90% { -ms-transform: scale(1.2);opacity:0; }
        100% { -ms-transform: scale(1.3);opacity:0; }
    }

    @keyframes bg {
        50% { -moz-transform: scale(1.1); -ms-transform: scale(1.1); -o-transform: scale(1.1); -webkit-transform: scale(1.1); transform: scale(1.1); }
        90% { -moz-transform: scale(1.2); -ms-transform: scale(1.2); -o-transform: scale(1.2); -webkit-transform: scale(1.2); transform: scale(1.2);opacity:0; }
        100% { -moz-transform: scale(1.3); -ms-transform: scale(1.3); -o-transform: scale(1.3); -webkit-transform: scale(1.3); transform: scale(1.3);opacity:0; }
    }

</style>

<template>
    <div class="loading-wrap">
        <div class="inner">
            <div class="loading"></div>
            <div class="loading-bg"></div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'

    export default{
        props: ['loadingType'],
        components:{
        },
        data(){
            return {
                
            }
        },
        computed:{
            ...mapState({

            })
        },
        mounted(){
        },
        methods:{
            
        }
    }
</script>

