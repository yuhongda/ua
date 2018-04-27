<style lang="scss" scoped>
    @import '../css/common.scss';

    .page-wrap{
        position: absolute; width: 100%; min-height: 100%; top:0; left:0;
        .logo{
            position: absolute;width:rem(128);height:rem(75);top:rem(45);right:rem(31);background: url(../images/logo-black.png) 50% 50% no-repeat;background-size: cover;z-index:100;
        }
        .gallery-header{
            height: rem(127);padding-top:rem(20);
            .back{
                float:left;width:rem(127);height:rem(127);background:url(../images/icon-back.png) 50% 50% no-repeat;background-size:rem(25) rem(43);
            }
        }
        .gallery-title{
            color:#000;padding:rem(38) rem(50);height:rem(64);
            div{
                float:left;
                p{text-align:right;line-height:100%;}
                p:first-child{
                    font-size:rem(46);
                }
                p:last-child{
                    font-size:rem(20);
                }
                &.slash{
                    width:rem(23);height:rem(64);background:url(../images/icon-slash.png) 50% 50% no-repeat; background-size:rem(23) rem(64);padding:0 rem(10);
                }
            }
        }
        .gallery-title-running{
            background-color:#ED7666;
        }
        .gallery-title-sport{
            background-color:#54B8D9;
        }
        .gallery-title-training{
            background-color:#F5D750;
        }
        .gallery-cnt{
            min-height:90vh;overflow:hidden;
            table {
                table-layout:fixed;width:100%;border:0;
                tr{
                    th{height:0;}
                    &:first-child{
                        td{border-top:0;}
                    }
                    td{
                        border:4px solid #fff;
                        &:first-child{border-left:0;}
                        &:last-child{border-right:0;}
                        .block{background-color: rgba(0,0,0,0.2);height: 100%;background-position: 50% 50%; background-repeat: no-repeat;background-size: cover;transition: all 1s ease-out;}
                    }
                }
            }
        }
        .gallery-cnt-running{
            background-color:#ED7666;
        }
        .gallery-cnt-sport{
            background-color:#54B8D9;
        }
        .gallery-cnt-training{
            background-color:#F5D750;
        }
    }
</style>

<template>
    <div class="page-wrap">
        <div class="logo"></div>
        <div class="gallery-header">
            <span class="back" @click="goBack"></span>
        </div>
        <div :class="{
            'gallery-title':true, 
            'gallery-title-running': category == 'running', 
            'gallery-title-sport': category == 'sport',
            'gallery-title-training': category == 'training',
        }">
            <div>
                <p>{{gender == 'men' ? '男子' : '女子' }}</p>
                <p>{{gender}}</p>
            </div>
            <div class="slash"></div>
            <div v-if="category == 'running'">
                <p>跑步</p>
                <p>running</p>
            </div>
            <div v-else-if="category == 'sport'">
                <p>运动休闲</p>
                <p>sportstyle</p>
            </div>
            <div v-else>
                <p>训练</p>
                <p>training</p>
            </div>
        </div>
        <div :class="{'gallery-cnt':true,'gallery-cnt-running': category == 'running','gallery-cnt-sport': category == 'sport','gallery-cnt-training': category == 'training'}">
            <!-- men running -->
            <table v-if="gender == 'men' && category == 'running'">
                <tr>
                    <th style="width:8%"></th>
                    <th style="width:21.7%"></th>
                    <th style="width:30%"></th>
                </tr>
                <tr>
                    <td :style="{height:rem(341)}" colspan="2">
                        <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenRunning[0]" :to="{ path: '/Detail', query: { gender, category, index: 1 }}">
                        </router-link>
                    </td>
                    <td :style="{height:rem(341)}">
                        <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenRunning[1]" :to="{ path: '/Detail', query: { gender, category, index: 2 }}">
                        </router-link>
                    </td>
                    <td :style="{height:rem(341)}">
                        <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenRunning[2]" :to="{ path: '/Detail', query: { gender, category, index: 3 }}">
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td :style="{height:rem(459)}" rowspan="2" colspan="2">
                        <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenRunning[3]" :to="{ path: '/Detail', query: { gender, category, index: 4 }}">
                        </router-link>
                    </td>
                    <td :style="{height:rem(361)}">
                        <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenRunning[4]" :to="{ path: '/Detail', query: { gender, category, index: 5 }}">
                        </router-link>
                    </td>
                    <td :style="{height:rem(361)}">
                        <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenRunning[5]" :to="{ path: '/Detail', query: { gender, category, index: 6 }}">
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td :style="{height:rem(93)}">
                    </td>
                    <td :style="{height:rem(401)}" rowspan="2">
                        <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenRunning[7]" :to="{ path: '/Detail', query: { gender, category, index: 7 }}">
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td :style="{height:rem(300)}" colspan="3">
                        <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenRunning[6]" :to="{ path: '/Detail', query: { gender, category, index: 8 }}">
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td :style="{height:rem(314)}">
                    </td>
                    <td :style="{height:rem(314)}" colspan="2">
                        <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenRunning[8]" :to="{ path: '/Detail', query: { gender, category, index: 9 }}">
                        </router-link>
                    </td>
                    <td :style="{height:rem(314)}">
                        <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenRunning[9]" :to="{ path: '/Detail', query: { gender, category, index: 10 }}">
                        </router-link>
                    </td>
                </tr>

            </table>

            <!-- women running -->
            <table v-else-if="gender == 'women' && category == 'running'">
                <tr>
                    <td :style="{height:rem(201),width:'26%'}">
                        <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenRunning[0]" :to="{ path: '/Detail', query: { gender, category, index: 1 }}">
                        </router-link>
                    </td>
                    <td :style="{height:rem(308),width:'40%'}" rowspan="2">
                        <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenRunning[1]" :to="{ path: '/Detail', query: { gender, category, index: 2 }}">
                        </router-link>
                    </td>
                    <td :style="{height:rem(308)}" colspan="2" rowspan="2">
                        <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenRunning[2]" :to="{ path: '/Detail', query: { gender, category, index: 3 }}">
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td :style="{height:rem(98)}"></td>
                </tr>
                <tr>
                    <td :style="{height:rem(336)}" rowspan="2">
                        <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenRunning[3]" :to="{ path: '/Detail', query: { gender, category, index: 4 }}">
                        </router-link>
                    </td>
                    <td :style="{height:rem(336)}" rowspan="2">
                        <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenRunning[4]" :to="{ path: '/Detail', query: { gender, category, index: 5 }}">
                        </router-link>
                    </td>
                    <td :style="{height:rem(231),width:'20%'}">
                        <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenRunning[5]" :to="{ path: '/Detail', query: { gender, category, index: 6 }}">
                        </router-link>
                    </td>
                    <td :style="{height:rem(231),width:'14%'}">
                        <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenRunning[6]" :to="{ path: '/Detail', query: { gender, category, index: 7 }}">
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td :style="{height:rem(98)}" colspan="2"></td>
                </tr>
                <tr>
                    <td :style="{height:rem(150)}" colspan="2">
                        <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenRunning[7]" :to="{ path: '/Detail', query: { gender, category, index: 8 }}">
                        </router-link>
                    </td>
                    <td :style="{height:rem(457)}" rowspan="3" colspan="2">
                        <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenRunning[8]" :to="{ path: '/Detail', query: { gender, category, index: 9 }}">
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td :style="{height:rem(301)}" rowspan="2">
                        <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenRunning[9]" :to="{ path: '/Detail', query: { gender, category, index: 10 }}">
                        </router-link>
                    </td>
                    <td :style="{height:rem(98)}"></td>
                </tr>
                <tr>
                    <td :style="{height:rem(199)}">
                        <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenRunning[10]" :to="{ path: '/Detail', query: { gender, category, index: 11 }}">
                        </router-link>
                    </td>
                </tr>

            </table>

            <!-- men sport -->
            <div v-else-if="gender == 'men' && category == 'sport'">
                <table>
                    <tr>
                        <td :style="{height:rem(290),width:'50%'}">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenSport[0]" :to="{ path: '/Detail', query: { gender, category, index: 1 }}">
                            </router-link>
                        </td>
                        <td :style="{height:rem(290)}" colspan="3">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenSport[1]" :to="{ path: '/Detail', query: { gender, category, index: 2 }}">
                            </router-link>
                        </td>
                    </tr>
                    <tr>
                        <td :style="{height:rem(445)}" colspan="3">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenSport[2]" :to="{ path: '/Detail', query: { gender, category, index: 3 }}">
                            </router-link>
                        </td>
                        <td :style="{height:rem(445)}"></td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td :style="{height:rem(357),width:'29%'}" rowspan="2">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenSport[3]" :to="{ path: '/Detail', query: { gender, category, index: 4 }}">
                            </router-link>
                        </td>
                        <td :style="{height:rem(94),width:'29%'}"></td>
                        <td :style="{height:rem(357)}" rowspan="2" colspan="2">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenSport[5]" :to="{ path: '/Detail', query: { gender, category, index: 6 }}">
                            </router-link>
                        </td>
                    </tr>
                    <tr>
                        <td :style="{height:rem(258)}">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenSport[4]" :to="{ path: '/Detail', query: { gender, category, index: 5 }}">
                            </router-link>
                        </td>
                    </tr>
                </table>
            </div>

            <!-- women sport -->
            <div v-else-if="gender == 'women' && category == 'sport'">
                <table>
                    <tr>
                        <th style="width:43%"></th>
                        <th style="width:11%"></th>
                    </tr>
                    <tr>
                        <td :style="{height:rem(314),width:'55%'}" colspan="2">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenSport[0]" :to="{ path: '/Detail', query: { gender, category, index: 1 }}">
                            </router-link>
                        </td>
                        <td :style="{height:rem(464)}" rowspan="2">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenSport[1]" :to="{ path: '/Detail', query: { gender, category, index: 2 }}">
                            </router-link>
                        </td>
                    </tr>
                    <tr>
                        <td :style="{height:rem(225)}" colspan="2" rowspan="2">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenSport[2]" :to="{ path: '/Detail', query: { gender, category, index: 3 }}">
                            </router-link>
                        </td>
                    </tr>
                    <tr>
                        <td :style="{height:rem(75)}"></td>
                    </tr>
                    <tr>
                        <td :style="{height:rem(233)}" colspan="2">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenSport[3]" :to="{ path: '/Detail', query: { gender, category, index: 4 }}">
                            </router-link>
                        </td>
                        <td :style="{height:rem(233)}">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenSport[4]" :to="{ path: '/Detail', query: { gender, category, index: 5 }}">
                            </router-link>
                        </td>
                    </tr>
                    <tr>
                        <td :style="{height:rem(339)}">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenSport[5]" :to="{ path: '/Detail', query: { gender, category, index: 6 }}">
                            </router-link>
                        </td>
                        <td :style="{height:rem(339)}"></td>
                        <td :style="{height:rem(339)}">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenSport[6]" :to="{ path: '/Detail', query: { gender, category, index: 7 }}">
                            </router-link>
                        </td>
                    </tr>
                </table>
            </div>

            <!-- men training -->
            <div v-else-if="gender == 'men' && category == 'training'">
                <table>
                    <tr>
                        <th style="width:16%"></th>
                        <th style="width:8%"></th>
                        <th style="width:13%"></th>
                        <th style="width:12%"></th>
                        <th style="width:15%"></th>
                        <th style="width:11%"></th>
                    </tr>
                    <tr>
                        <td :style="{height:rem(224)}" colspan="4">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenTraining[0]" :to="{ path: '/Detail', query: { gender, category, index: 1 }}">
                            </router-link>
                        </td>
                        <td :style="{height:rem(381)}" colspan="3" rowspan="2">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenTraining[1]" :to="{ path: '/Detail', query: { gender, category, index: 2 }}">
                            </router-link>
                        </td>
                    </tr>
                    <tr>
                        <td :style="{height:rem(151)}" colspan="2">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenTraining[2]" :to="{ path: '/Detail', query: { gender, category, index: 3 }}">
                            </router-link>
                        </td>
                        <td :style="{height:rem(151)}" colspan="2"></td>
                    </tr>
                    <tr>
                        <td :style="{height:rem(197)}" colspan="2">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenTraining[3]" :to="{ path: '/Detail', query: { gender, category, index: 4 }}">
                            </router-link>
                        </td>
                        <td :style="{height:rem(197)}" colspan="3">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenTraining[4]" :to="{ path: '/Detail', query: { gender, category, index: 5 }}">
                            </router-link>
                        </td>
                        <td :style="{height:rem(197)}" colspan="2">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenTraining[5]" :to="{ path: '/Detail', query: { gender, category, index: 6 }}">
                            </router-link>
                        </td>
                    </tr>
                    <tr>
                        <td :style="{height:rem(514)}" colspan="3" rowspan="2">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenTraining[6]" :to="{ path: '/Detail', query: { gender, category, index: 7 }}">
                            </router-link>
                        </td>
                        <td :style="{height:rem(289)}" colspan="4">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenTraining[7]" :to="{ path: '/Detail', query: { gender, category, index: 8 }}">
                            </router-link>
                        </td>
                    </tr>
                    <tr>
                        <td :style="{height:rem(218)}" colspan="2">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenTraining[8]" :to="{ path: '/Detail', query: { gender, category, index: 9 }}">
                            </router-link>
                        </td>
                        <td :style="{height:rem(218)}" colspan="2">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenTraining[9]" :to="{ path: '/Detail', query: { gender, category, index: 10 }}">
                            </router-link>
                        </td>
                    </tr>
                    <tr>
                        <td :style="{height:rem(242)}"></td>
                        <td :style="{height:rem(242)}" colspan="3">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenTraining[10]" :to="{ path: '/Detail', query: { gender, category, index: 11 }}">
                            </router-link>
                        </td>
                        <td :style="{height:rem(242)}" colspan="3">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenTraining[11]" :to="{ path: '/Detail', query: { gender, category, index: 12 }}">
                            </router-link>
                        </td>
                    </tr>
                    <tr>
                        <td :style="{height:rem(241)}" colspan="4">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenTraining[12]" :to="{ path: '/Detail', query: { gender, category, index: 13 }}">
                            </router-link>
                        </td>
                        <td :style="{height:rem(241)}" colspan="2">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenTraining[13]" :to="{ path: '/Detail', query: { gender, category, index: 14 }}">
                            </router-link>
                        </td>
                        <td :style="{height:rem(241)}">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataMenTraining[14]" :to="{ path: '/Detail', query: { gender, category, index: 15 }}">
                            </router-link>
                        </td>
                    </tr>
                </table>
            </div>

            <!-- women training -->
            <div v-else-if="gender == 'women' && category == 'training'">
                <table>
                    <tr>
                        <th style="width:24.8%"></th>
                        <th style="width:5%"></th>
                        <th style="width:20%"></th>
                        <th style="width:15%"></th>
                    </tr>
                    <tr>
                        <td :style="{height:rem(145)}" colspan="2">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenTraining[0]" :to="{ path: '/Detail', query: { gender, category, index: 1 }}">
                            </router-link>
                        </td>
                        <td :style="{height:rem(395)}" colspan="2" rowspan="2">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenTraining[1]" :to="{ path: '/Detail', query: { gender, category, index: 2 }}">
                            </router-link>
                        </td>
                        <td :style="{height:rem(395)}" rowspan="2">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenTraining[2]" :to="{ path: '/Detail', query: { gender, category, index: 3 }}">
                            </router-link>
                        </td>
                    </tr>
                    <tr>
                        <td :style="{height:rem(245)}" colspan="2">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenTraining[3]" :to="{ path: '/Detail', query: { gender, category, index: 4 }}">
                            </router-link>
                        </td>
                    </tr>
                    <tr>
                        <td :style="{height:rem(269)}" colspan="3">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenTraining[4]" :to="{ path: '/Detail', query: { gender, category, index: 5 }}">
                            </router-link>
                        </td>
                        <td :style="{height:rem(269)}" colspan="2">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenTraining[5]" :to="{ path: '/Detail', query: { gender, category, index: 6 }}">
                            </router-link>
                        </td>
                    </tr>
                    <tr>
                        <td :style="{height:rem(166)}">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenTraining[6]" :to="{ path: '/Detail', query: { gender, category, index: 7 }}">
                            </router-link>
                        </td>
                        <td :style="{height:rem(166)}" colspan="2"></td>
                        <td :style="{height:rem(260)}" rowspan="2" colspan="2">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenTraining[7]" :to="{ path: '/Detail', query: { gender, category, index: 8 }}">
                            </router-link>
                        </td>
                    </tr>
                    <tr>
                        <td :style="{height:rem(261)}" colspan="3" rowspan="2">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenTraining[8]" :to="{ path: '/Detail', query: { gender, category, index: 9 }}">
                            </router-link>
                        </td>
                    </tr>
                    <tr>
                        <td :style="{height:rem(167)}" colspan="2">
                            <router-link tag="div" class="block" v-lazy:background-image="galleryDataWomenTraining[9]" :to="{ path: '/Detail', query: { gender, category, index: 10 }}">
                            </router-link>
                        </td>
                    </tr>
                </table>
            </div>
            
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
                gender: this.$route.query.gender,
                category: this.$route.query.category,
                galleryDataMenRunning: [
                    './static/images/gallery-men-running-1.jpg',
                    './static/images/gallery-men-running-2.jpg',
                    './static/images/gallery-men-running-3.jpg',
                    './static/images/gallery-men-running-4.jpg',
                    './static/images/gallery-men-running-5.jpg',
                    './static/images/gallery-men-running-6.jpg',
                    './static/images/gallery-men-running-7.jpg',
                    './static/images/gallery-men-running-8.jpg',
                    './static/images/gallery-men-running-9.jpg',
                    './static/images/gallery-men-running-10.jpg',
                ],
                galleryDataWomenRunning: [
                    './static/images/gallery-women-running-1.jpg',
                    './static/images/gallery-women-running-2.jpg',
                    './static/images/gallery-women-running-3.jpg',
                    './static/images/gallery-women-running-4.jpg',
                    './static/images/gallery-women-running-5.jpg',
                    './static/images/gallery-women-running-6.jpg',
                    './static/images/gallery-women-running-7.jpg',
                    './static/images/gallery-women-running-8.jpg',
                    './static/images/gallery-women-running-9.jpg',
                    './static/images/gallery-women-running-10.jpg',
                    './static/images/gallery-women-running-11.jpg',
                ],
                galleryDataMenSport: [
                    './static/images/gallery-men-sport-1.jpg',
                    './static/images/gallery-men-sport-2.jpg',
                    './static/images/gallery-men-sport-3.jpg',
                    './static/images/gallery-men-sport-4.jpg',
                    './static/images/gallery-men-sport-5.jpg',
                    './static/images/gallery-men-sport-6.jpg',
                ],
                galleryDataWomenSport: [
                    './static/images/gallery-women-sport-1.jpg',
                    './static/images/gallery-women-sport-2.jpg',
                    './static/images/gallery-women-sport-3.jpg',
                    './static/images/gallery-women-sport-4.jpg',
                    './static/images/gallery-women-sport-5.jpg',
                    './static/images/gallery-women-sport-6.jpg',
                    './static/images/gallery-women-sport-7.jpg',
                ],
                galleryDataMenTraining: [
                    './static/images/gallery-men-training-1.jpg',
                    './static/images/gallery-men-training-2.jpg',
                    './static/images/gallery-men-training-3.jpg',
                    './static/images/gallery-men-training-4.jpg',
                    './static/images/gallery-men-training-5.jpg',
                    './static/images/gallery-men-training-6.jpg',
                    './static/images/gallery-men-training-7.jpg',
                    './static/images/gallery-men-training-8.jpg',
                    './static/images/gallery-men-training-9.jpg',
                    './static/images/gallery-men-training-10.jpg',
                    './static/images/gallery-men-training-11.jpg',
                    './static/images/gallery-men-training-12.jpg',
                    './static/images/gallery-men-training-13.jpg',
                    './static/images/gallery-men-training-14.jpg',
                    './static/images/gallery-men-training-15.jpg',
                ],
                galleryDataWomenTraining: [
                    './static/images/gallery-women-training-1.jpg',
                    './static/images/gallery-women-training-2.jpg',
                    './static/images/gallery-women-training-3.jpg',
                    './static/images/gallery-women-training-4.jpg',
                    './static/images/gallery-women-training-5.jpg',
                    './static/images/gallery-women-training-6.jpg',
                    './static/images/gallery-women-training-7.jpg',
                    './static/images/gallery-women-training-8.jpg',
                    './static/images/gallery-women-training-9.jpg',
                    './static/images/gallery-women-training-10.jpg',
                ]
            }
        },
        computed:{
            ...mapState({
            })
        },
        mounted(){
            
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            },
            rem(num){
                return `${num / 75}rem`
            }
        }
    }
</script>

