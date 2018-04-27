export function thousands(val) { 
    var aIntNum = val.toString().split("."); if (aIntNum[0].length >= 5) { aIntNum[0] = aIntNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","); } if (aIntNum[1] && aIntNum[1] >= 5) { aIntNum[1] = aIntNum[1] ? aIntNum[1].replace(/\B(?=(\d{3})+(?!\d))/g, " ") : " "; } return aIntNum.join("."); 
}

export function ellipsis(str, limit){
    var w = 0, len = str.length;

    for (var i=0; i < len; i++) {
        var c = str.charCodeAt(i);
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) w++;
        else w+=2;

        if (w > limit) {
            str = str.substr(0,i);// + "...";
            break;
        }
    }
    
    return str;
}


const detailDataMenRunning = [
    {
        pic: './static/images/detail-men-running-1.jpg',
        links: [
            {
                text: '男子UA Swyft背心 / ￥349.00',
                link: 'https://www.underarmour.cn/p1318416-001.htm'
            },
            {
                text: '男子UA Speedpocket Long 2合1短裤 / ￥749.00',
                link: 'https://www.underarmour.cn/cmens-bottoms-short/#11-MensCategory'
            },
            {
                text: '男子UA HOVR Sonic 芯片跑鞋 / ￥999.00',
                link: 'https://www.underarmour.cn/p3000005-102.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-running-2.jpg',
        links: [
            {
                text: '男子UA Swyft背心 / ￥349.00',
                link: 'https://www.underarmour.cn/p1318416-001.htm'
            },
            {
                text: '男子UA Speedpocket Long 2合1短裤 / ￥749.00',
                link: 'https://www.underarmour.cn/cmens-bottoms-short/#11-MensCategory'
            },
            {
                text: '男子UA HOVR Sonic 芯片跑鞋 / ￥999.00',
                link: 'https://www.underarmour.cn/p3000005-102.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-running-3.jpg',
        links: [
            {
                text: '男子UA Swyft背心 / ￥349.00',
                link: 'https://www.underarmour.cn/p1318416-574.htm'
            },
            {
                text: '男子UA Launch SW Long短裤 / ￥399.00',
                link: 'https://www.underarmour.cn/p1309602-001.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-running-4.jpg',
        links: [
            {
                text: '男子UA Swyft短袖上衣 / ￥349.00',
                link: 'https://www.underarmour.cn/p1318417-016.htm'
            },
            {
                text: '男子UA Speedpocket Swyft 7英寸短裤 / ￥399.00',
                link: 'https://www.underarmour.cn/p1305210-001.htm'
            },
            {
                text: '男子UA HOVR Phantom 芯片跑鞋 / ￥1199.00 ',
                link: 'https://www.underarmour.cn/p3000004-002.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-running-5.jpg',
        links: [
            {
                text: '男子UA Swyft背心 / ￥349.00',
                link: 'https://www.underarmour.cn/p1318416-574.htm'
            },
            {
                text: '男子UA Launch SW Long短裤 / ￥399.00',
                link: 'https://www.underarmour.cn/p1309602-001.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-running-6.jpg',
        links: [
            {
                text: '男子UA Swyft短袖上衣 / ￥349.00',
                link: 'https://www.underarmour.cn/p1318417-016.htm'
            },
            {
                text: '男子UA Speedpocket Long 2合1短裤 / ￥749.00',
                link: 'https://www.underarmour.cn/cmens-bottoms-short/#11-MensCategory'
            },
            {
                text: '男子UA HOVR Sonic 芯片跑鞋 / ￥999.00',
                link: 'https://www.underarmour.cn/p3000005-102.htm'
            },
            {
                text: '男子UA Swyft背心 / ￥349.00',
                link: 'https://www.underarmour.cn/p1318416-574.htm'
            },
            {
                text: '男子UA Launch SW Long短裤 / ￥399.00',
                link: 'https://www.underarmour.cn/p1309602-001.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-running-7.jpg',
        links: [
            {
                text: '男子UA Swyft短袖上衣 / ￥349.00',
                link: 'https://www.underarmour.cn/p1318417-016.htm'
            },
            {
                text: '男子UA Speedpocket Swyft 7英寸短裤 / ￥399.00',
                link: 'https://www.underarmour.cn/p1305210-001.htm'
            },
            {
                text: '男子UA HOVR Phantom 芯片跑鞋 / ￥1199.00 ',
                link: 'https://www.underarmour.cn/p3000004-002.htm'
            },
            {
                text: '男子UA Swyft背心 / ￥349.00',
                link: 'https://www.underarmour.cn/p1318416-574.htm'
            },
            {
                text: '男子UA Launch SW Long短裤 / ￥399.00',
                link: 'https://www.underarmour.cn/p1309602-001.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-running-8.jpg',
        links: [
            {
                text: '男子UA Swyft背心 / ￥349.00',
                link: 'https://www.underarmour.cn/p1318416-574.htm'
            },
            {
                text: '男子UA Launch SW Long短裤 / ￥399.00',
                link: 'https://www.underarmour.cn/p1309602-001.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-running-9.jpg',
        links: [
            {
                text: '男子UA Swyft短袖上衣 / ￥349.00',
                link: 'https://www.underarmour.cn/p1318417-016.htm'
            },
            {
                text: '男子UA Speedpocket Long 2合1短裤 / ￥749.00',
                link: 'https://www.underarmour.cn/cmens-bottoms-short/#11-MensCategory'
            },
            {
                text: '男子UA HOVR Sonic 芯片跑鞋 / ￥999.00',
                link: 'https://www.underarmour.cn/p3000005-102.htm'
            },
            {
                text: '男子UA Swyft背心 / ￥349.00',
                link: 'https://www.underarmour.cn/p1318416-574.htm'
            },
            {
                text: '男子UA Launch SW Long短裤 / ￥399.00',
                link: 'https://www.underarmour.cn/p1309602-001.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-running-10.jpg',
        links: [
            {
                text: '男子UA Swyft短袖上衣 / ￥349.00',
                link: 'https://www.underarmour.cn/p1318417-016.htm'
            },
            {
                text: '男子UA Speedpocket Long 2合1短裤 / ￥749.00',
                link: 'https://www.underarmour.cn/cmens-bottoms-short/#11-MensCategory'
            },
            {
                text: '男子UA HOVR Sonic 芯片跑鞋 / ￥999.00',
                link: 'https://www.underarmour.cn/p3000005-102.htm'
            },
            {
                text: '男子UA Swyft背心 / ￥349.00',
                link: 'https://www.underarmour.cn/p1318416-574.htm'
            },
            {
                text: '男子UA Launch SW Long短裤 / ￥399.00',
                link: 'https://www.underarmour.cn/p1309602-001.htm'
            }
        ]
    }
];
const detailDataMenSport = [
    {
        pic: './static/images/detail-men-sport-1.jpg',
        links: [
            {
                text: '男子UA Threadborne Terry无袖连帽上衣 / ￥579.00',
                link: 'https://www.underarmour.cn/cmens-tops-hoody/#11-MensCategory'
            },
            {
                text: '男子UA Sportstyle Stripe T恤 / ￥329.00',
                link: 'https://www.underarmour.cn/cmens/t-b-f-a-c-s-f-p-g-eLifestyle-i-o-n.htm#11-MensSports'
            }
        ]
    },
    {
        pic: './static/images/detail-men-sport-2.jpg',
        links: [
            {
                text: '男子UA Threadborne Terry无袖连帽上衣 / ￥579.00',
                link: 'https://www.underarmour.cn/cmens-tops-hoody/#11-MensCategory'
            },
            {
                text: '男子UA Sportstyle Stripe T恤 / ￥329.00',
                link: 'https://www.underarmour.cn/cmens/t-b-f-a-c-s-f-p-g-eLifestyle-i-o-n.htm#11-MensSports'
            },
            {
                text: '男子UA Threadborne Terry短裤 / ￥499.00',
                link: 'https://www.underarmour.cn/cmens/t-b-f-a-c-s-f-p-g-eLifestyle-i-o-n.htm#11-MensSports'
            },
            {
                text: '男子UA Ultimate Speed训练鞋 / ￥899.00',
                link: 'https://www.underarmour.cn/p3000329-001.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-sport-3.jpg',
        links: [
            {
                text: '男子UA Sportstyle防风夹克 / ￥749.00',
                link: 'https://www.underarmour.cn/p1306482-408.htm'
            },
            {
                text: '男子UA Threadborne Terry Joggers长裤 / ￥599.00',
                link: 'https://www.underarmour.cn/p1310577-411.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-sport-4.jpg',
        links: [
            {
                text: '男子UA Threadborne Terry无袖连帽上衣 / ￥579.00',
                link: 'https://www.underarmour.cn/cmens-tops-hoody/#11-MensCategory'
            },
            {
                text: '男子UA Sportstyle Stripe T恤 / ￥329.00',
                link: 'https://www.underarmour.cn/cmens/t-b-f-a-c-s-f-p-g-eLifestyle-i-o-n.htm#11-MensSports'
            }
        ]
    },
    {
        pic: './static/images/detail-men-sport-5.jpg',
        links: [
            {
                text: '男子UA Sportstyle防风夹克 / ￥749.00',
                link: 'https://www.underarmour.cn/p1306482-408.htm'
            },
            {
                text: '男子UA Threadborne Terry Joggers长裤 / ￥599.00',
                link: 'https://www.underarmour.cn/p1310577-411.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-sport-6.jpg',
        links: [
            {
                text: '男子UA Sportstyle防风夹克 / ￥749.00',
                link: 'https://www.underarmour.cn/p1306482-408.htm'
            },
            {
                text: '男子UA Sportstyle Core V领T恤 / ￥279.00',
                link: 'https://www.underarmour.cn/p1306492-100.htm'
            },
            {
                text: '男子UA Threadborne Terry Joggers长裤 / ￥599.00',
                link: 'https://www.underarmour.cn/p1310577-411.htm'
            }
        ]
    }
];
const detailDataMenTraining = [
    {
        pic: './static/images/detail-men-training-1.jpg',
        links: [
            {
                text: '男子UA Threadborne Utility七分袖T恤 / ￥399.00',
                link: 'https://www.underarmour.cn/p1312339-985.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-training-2.jpg',
        links: [
            {
                text: '男子UA Threadborne Utility七分袖T恤 / ￥399.00',
                link: 'https://www.underarmour.cn/p1312339-985.htm'
            },
            {
                text: '男子UA Cage短裤 / ￥399.00',
                link: 'https://www.underarmour.cn/p1304127-001.htm'
            },
            {
                text: '男子UA Threadborne Seamless紧身裤 / ￥599.00',
                link: 'https://www.underarmour.cn/p1320199-001.htm'
            },
            {
                text: '男子UA Ultimate Speed训练鞋 / ￥899.00',
                link: 'https://www.underarmour.cn/p3000329-001.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-training-3.jpg',
        links: [
            {
                text: '男子UA Threadborne Utility七分袖T恤 / ￥399.00',
                link: 'https://www.underarmour.cn/p1312339-985.htm'
            },
            {
                text: '男子UA Cage短裤 / ￥399.00',
                link: 'https://www.underarmour.cn/p1304127-001.htm'
            },
            {
                text: '男子UA Threadborne Seamless紧身裤 / ￥599.00',
                link: 'https://www.underarmour.cn/p1320199-001.htm'
            },
            {
                text: '男子UA Ultimate Speed训练鞋 / ￥899.00',
                link: 'https://www.underarmour.cn/p3000329-001.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-training-4.jpg',
        links: [
            {
                text: '男子UA Perpetual Fitted长袖运动衣 / ￥699.00',
                link: 'https://www.underarmour.cn/p1306386-001.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-training-5.jpg',
        links: [
            {
                text: '男子UA Vanish七分袖运动上衣 / ￥449.00',
                link: 'https://www.underarmour.cn/cmens/t-b-f-a-c-s-f-p-g-eTraining-i-o-n.htm#11-MensSports'
            }
        ]
    },
    {
        pic: './static/images/detail-men-training-6.jpg',
        links: [
            {
                text: '男子UA Perpetual Fitted长袖运动衣 / ￥699.00',
                link: 'https://www.underarmour.cn/p1306386-001.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-training-7.jpg',
        links: [
            {
                text: '男子UA Vanish七分袖运动上衣 / ￥449.00',
                link: 'https://www.underarmour.cn/cmens/t-b-f-a-c-s-f-p-g-eTraining-i-o-n.htm#11-MensSports'
            },
            {
                text: '中性UA Vanish短裤 / ￥449.00',
                link: 'https://www.underarmour.cn/p1309342-001.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-training-8.jpg',
        links: [
            {
                text: '男子UA Perpetual Fitted长袖运动衣 / ￥699.00',
                link: 'https://www.underarmour.cn/p1306386-001.htm'
            },
            {
                text: '男子UA Perpetual短裤 / ￥499.00',
                link: 'https://www.underarmour.cn/p1306390-001.htm'
            },
            {
                text: '男子UA Perpetual紧身中裤 / ￥699.00',
                link: 'https://www.underarmour.cn/p1306382-001.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-training-9.jpg',
        links: [
            {
                text: '男子UA Vanish七分袖运动上衣 / ￥449.00',
                link: 'https://www.underarmour.cn/cmens/t-b-f-a-c-s-f-p-g-eTraining-i-o-n.htm#11-MensSports'
            },
        ]
    },
    {
        pic: './static/images/detail-men-training-10.jpg',
        links: [
            {
                text: '男子UA Perpetual短裤 / ￥499.00',
                link: 'https://www.underarmour.cn/p1306390-001.htm'
            },
            {
                text: '男子UA Perpetual紧身中裤 / ￥699.00',
                link: 'https://www.underarmour.cn/p1306382-001.htm'
            },
            {
                text: '男子UA SpeedForm AMP 2.0训练鞋 / ￥999.00',
                link: 'https://www.underarmour.cn/p1295773-007.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-training-11.jpg',
        links: [
            {
                text: '中性UA Vanish短裤 / ￥449.00',
                link: 'https://www.underarmour.cn/p1309342-001.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-training-12.jpg',
        links: [
            {
                text: '男子UA Vanish七分袖运动上衣 / ￥449.00',
                link: 'https://www.underarmour.cn/cmens/t-b-f-a-c-s-f-p-g-eTraining-i-o-n.htm#11-MensSports'
            },
            {
                text: '中性UA Vanish短裤 / ￥449.00',
                link: 'https://www.underarmour.cn/p1309342-001.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-training-13.jpg',
        links: [
            {
                text: '男子UA Perpetual Fitted长袖运动衣 / ￥699.00',
                link: 'https://www.underarmour.cn/p1306386-001.htm'
            },
            {
                text: '男子UA Perpetual短裤 / ￥499.00',
                link: 'https://www.underarmour.cn/p1306390-001.htm'
            },
            {
                text: '男子UA Perpetual紧身中裤 / ￥699.00',
                link: 'https://www.underarmour.cn/p1306382-001.htm'
            },
            {
                text: '男子UA Vanish七分袖运动上衣 / ￥449.00',
                link: 'https://www.underarmour.cn/cmens/t-b-f-a-c-s-f-p-g-eTraining-i-o-n.htm#11-MensSports'
            },
            {
                text: '中性UA Vanish短裤 / ￥449.00',
                link: 'https://www.underarmour.cn/p1309342-001.htm'
            },
            {
                text: '男子UA Vanish紧身裤 / ￥499.00',
                link: 'https://www.underarmour.cn/cmens-bottoms-legging/#11-MensCategory'
            },
            {
                text: '男子UA Ultimate Speed训练鞋 / ￥899.00',
                link: 'https://www.underarmour.cn/p3000329-101.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-training-14.jpg',
        links: [
            {
                text: '男子UA Threadborne Utility七分袖T恤 / ￥399.00',
                link: 'https://www.underarmour.cn/p1312339-985.htm'
            },
            {
                text: '男子UA Cage短裤 / ￥399.00',
                link: 'https://www.underarmour.cn/p1304127-001.htm'
            },
            {
                text: '男子UA Threadborne Seamless紧身裤 / ￥599.00',
                link: 'https://www.underarmour.cn/p1320199-001.htm'
            },
            {
                text: '男子UA Ultimate Speed训练鞋 / ￥899.00',
                link: 'https://www.underarmour.cn/p3000329-001.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-men-training-15.jpg',
        links: [
            {
                text: '男子UA Threadborne Utility七分袖T恤 / ￥399.00',
                link: 'https://www.underarmour.cn/p1312339-985.htm'
            },
            {
                text: '男子UA Cage短裤 / ￥399.00',
                link: 'https://www.underarmour.cn/p1304127-001.htm'
            },
            {
                text: '男子UA Threadborne Seamless紧身裤 / ￥599.00',
                link: 'https://www.underarmour.cn/p1320199-001.htm'
            },
            {
                text: '男子UA Ultimate Speed训练鞋 / ￥899.00',
                link: 'https://www.underarmour.cn/p3000329-001.htm'
            }
        ]
    }
];
const detailDataWomenRunning = [
    {
        pic: './static/images/detail-women-running-1.jpg',
        links: [
            {
                text: '女子UA HOVR Sonic 芯片跑鞋 / ￥999.00',
                link: 'https://www.underarmour.cn/p3000094-102.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-women-running-2.jpg',
        links: [
            {
                text: '女子UA Threadborne Swyft短袖上衣 / ￥349.00',
                link: 'https://www.underarmour.cn/cwomens-tops-shortsleeve/#11-WomensCategory'
            }
        ]
    },
    {
        pic: './static/images/detail-women-running-3.jpg',
        links: [
            {
                text: '女子UA Threadborne Swyft Racer背心 / ￥299.00',
                link: 'https://www.underarmour.cn/p1318420-706.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-women-running-4.jpg',
        links: [
            {
                text: '女子UA Threadborne Swyft Racer背心 / ￥299.00',
                link: 'https://www.underarmour.cn/p1318420-706.htm'
            },
            {
                text: '女子UA Define The Run 2合1跑步短裤 / ￥499.00',
                link: 'https://www.underarmour.cn/cwomens-bottoms-short/#11-WomensCategory'
            },
            {
                text: '女子UA HOVR Sonic 芯片跑鞋 / ￥999.00',
                link: 'https://www.underarmour.cn/p3000094-102.htm'
            },
            {
                text: '女子UA Threadborne Swyft短袖上衣 / ￥349.00',
                link: 'https://www.underarmour.cn/cwomens-tops-shortsleeve/#11-WomensCategory'
            },
            {
                text: '女子UA Armour Fly Fast紧身中裤 / ￥549.00',
                link: 'https://www.underarmour.cn/cwomens-bottoms-capri/#11-WomensCategory'
            },
            {
                text: '女子UA Blur跑鞋 / ￥899.00',
                link: 'https://www.underarmour.cn/p3000098-101.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-women-running-5.jpg',
        links: [
            {
                text: '女子UA Threadborne Swyft套头衫 / ￥599.00',
                link: 'https://www.underarmour.cn/p1305122-409.htm'
            },
            {
                text: '女子UA Armour Fly Fast印花紧身裤 / ￥549.00',
                link: 'https://www.underarmour.cn/p1320323-408.htm'
            },
            {
                text: '女子UA HOVR Phantom 芯片跑鞋 / ￥1199.00',
                link: 'https://www.underarmour.cn/p3000093-105.htm'
            },
            {
                text: '女子UA Threadborne Swyft Racer背心 / ￥299.00',
                link: 'https://www.underarmour.cn/p1318420-706.htm'
            },
            {
                text: '女子UA Define The Run 2合1跑步短裤 / ￥499.00',
                link: 'https://www.underarmour.cn/cwomens-bottoms-short/#11-WomensCategory'
            },
            {
                text: '女子UA HOVR Sonic 芯片跑鞋 / ￥999.00',
                link: 'https://www.underarmour.cn/p3000094-102.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-women-running-6.jpg',
        links: [
            {
                text: '女子UA Threadborne Swyft短袖上衣 / ￥349.00',
                link: 'https://www.underarmour.cn/cwomens-tops-shortsleeve/#11-WomensCategory'
            },
            {
                text: '女子UA Armour Fly Fast紧身中裤 / ￥549.00',
                link: 'https://www.underarmour.cn/cwomens-bottoms-capri/#11-WomensCategory'
            },
            {
                text: '女子UA Blur跑鞋 / ￥899.00',
                link: 'https://www.underarmour.cn/p3000098-101.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-women-running-7.jpg',
        links: [
            {
                text: '女子UA HOVR Sonic 芯片跑鞋 / ￥999.00',
                link: 'https://www.underarmour.cn/p3000094-102.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-women-running-8.jpg',
        links: [
            {
                text: '女子UA Threadborne Swyft Racer背心 / ￥299.00',
                link: 'https://www.underarmour.cn/p1318420-706.htm'
            },
            {
                text: '女子UA Define The Run 2合1跑步短裤 / ￥499.00',
                link: 'https://www.underarmour.cn/cwomens-bottoms-short/#11-WomensCategory'
            },
            {
                text: '女子UA HOVR Sonic 芯片跑鞋 / ￥999.00',
                link: 'https://www.underarmour.cn/p3000094-102.htm'
            },
            {
                text: '女子UA Threadborne Swyft短袖上衣 / ￥349.00',
                link: 'https://www.underarmour.cn/cwomens-tops-shortsleeve/#11-WomensCategory'
            },
            {
                text: '女子UA Armour Fly Fast紧身中裤 / ￥549.00',
                link: 'https://www.underarmour.cn/cwomens-bottoms-capri/#11-WomensCategory'
            },
            {
                text: '女子UA Blur跑鞋 / ￥899.00',
                link: 'https://www.underarmour.cn/p3000098-101.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-women-running-9.jpg',
        links: [
            {
                text: '女子UA Threadborne Swyft套头衫 / ￥599.00',
                link: 'https://www.underarmour.cn/p1305122-409.htm'
            },
            {
                text: '女子UA Armour Fly Fast印花紧身裤 / ￥549.00',
                link: 'https://www.underarmour.cn/p1320323-408.htm'
            },
            {
                text: '女子UA HOVR Phantom 芯片跑鞋 / ￥1199.00',
                link: 'https://www.underarmour.cn/p3000093-105.htm'
            },
        ]
    },
    {
        pic: './static/images/detail-women-running-10.jpg',
        links: [
            {
                text: '女子UA Threadborne Swyft短袖上衣 / ￥349.00',
                link: 'https://www.underarmour.cn/cwomens-tops-shortsleeve/#11-WomensCategory'
            },
            {
                text: '女子UA Armour Fly Fast紧身中裤 / ￥549.00',
                link: 'https://www.underarmour.cn/cwomens-bottoms-capri/#11-WomensCategory'
            },
            {
                text: '女子UA Blur跑鞋 / ￥899.00',
                link: 'https://www.underarmour.cn/p3000098-101.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-women-running-11.jpg',
        links: [
            {
                text: '女子UA Define The Run 2合1跑步短裤 / ￥499.00',
                link: 'https://www.underarmour.cn/cwomens-bottoms-short/#11-WomensCategory'
            },
            {
                text: '女子UA HOVR Sonic 芯片跑鞋 / ￥999.00',
                link: 'https://www.underarmour.cn/p3000094-102.htm'
            },
        ]
    }
];
const detailDataWomenSport = [
    {
        pic: './static/images/detail-women-sport-1.jpg',
        links: [
            {
                text: '女子UA Unstoppable连衣裙 / ￥699.00',
                link: 'https://www.underarmour.cn/cwomens/t-b-f-a-c-s-f-p-g-eLiftstyle-i-o-n.htm#11-WomensSports'
            }
        ]
    },
    {
        pic: './static/images/detail-women-sport-2.jpg',
        links: [
            {
                text: '女子UA Storm Woven拉链夹克 / ￥699.00',
                link: 'https://www.underarmour.cn/p1315117-001.htm'
            },
            {
                text: '女子UA Essentials Patchwork T恤 / ￥349.00',
                link: 'https://www.underarmour.cn/p1310479-100.htm'
            },
            {
                text: '女子UA Storm Woven长裤 / ￥549.00',
                link: 'https://www.underarmour.cn/p1315116-001.htm'
            },
            {
                text: '女子UA HOVR Phantom 芯片跑鞋 / ￥1199.00',
                link: 'https://www.underarmour.cn/p3000093-105.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-women-sport-3.jpg',
        links: [
            {
                text: '女子UA Storm Woven拉链夹克 / ￥699.00',
                link: 'https://www.underarmour.cn/p1315117-001.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-women-sport-4.jpg',
        links: [
            {
                text: '女子UA Unstoppable连衣裙 / ￥699.00',
                link: 'https://www.underarmour.cn/cwomens/t-b-f-a-c-s-f-p-g-eLiftstyle-i-o-n.htm#11-WomensSports'
            }
        ]
    },
    {
        pic: './static/images/detail-women-sport-5.jpg',
        links: [
            {
                text: '女子UA Unstoppable连衣裙 / ￥699.00',
                link: 'https://www.underarmour.cn/cwomens/t-b-f-a-c-s-f-p-g-eLiftstyle-i-o-n.htm#11-WomensSports'
            }
        ]
    },
    {
        pic: './static/images/detail-women-sport-6.jpg',
        links: [
            {
                text: '女子UA Storm Woven拉链夹克 / ￥699.00',
                link: 'https://www.underarmour.cn/p1315117-001.htm'
            },
            {
                text: '女子UA Essentials Patchwork T恤 / ￥349.00',
                link: 'https://www.underarmour.cn/p1310479-100.htm'
            },
            {
                text: '女子UA Storm Woven长裤 / ￥549.00',
                link: 'https://www.underarmour.cn/p1315116-001.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-women-sport-7.jpg',
        links: [
            {
                text: '女子UA Storm Woven拉链夹克 / ￥699.00',
                link: 'https://www.underarmour.cn/p1315117-001.htm'
            },
            {
                text: '女子UA Essentials Patchwork T恤 / ￥349.00',
                link: 'https://www.underarmour.cn/p1310479-100.htm'
            },
            {
                text: '女子UA Storm Woven长裤 / ￥549.00',
                link: 'https://www.underarmour.cn/p1315116-001.htm'
            },
            {
                text: '女子UA HOVR Phantom 芯片跑鞋 / ￥1199.00',
                link: 'https://www.underarmour.cn/p3000093-105.htm'
            }
        ]
    }
];
const detailDataWomenTraining = [
    {
        pic: './static/images/detail-women-training-1.jpg',
        links: [
            {
                text: '女子UA Vanish Crop T恤 / ￥349.00',
                link: 'https://www.underarmour.cn/p1305484-564.htm'
            },
            {
                text: '女子UA Vanish印花紧身裤 / ￥499.00',
                link: 'https://www.underarmour.cn/cwomens-bottoms-capri/#11-WomensCategory'
            },
            {
                text: '女子UA Slouchy Slip训练鞋 / ￥799.00',
                link: 'https://www.underarmour.cn/p3000273-104.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-women-training-2.jpg',
        links: [
            {
                text: '女子UA Vanish Crop T恤 / ￥349.00',
                link: 'https://www.underarmour.cn/p1305484-564.htm'
            },
            {
                text: '女子UA Vanish印花紧身裤 / ￥499.00',
                link: 'https://www.underarmour.cn/cwomens-bottoms-capri/#11-WomensCategory'
            }
        ]
    },
    {
        pic: './static/images/detail-women-training-3.jpg',
        links: [
            {
                text: '女子UA Perpetual连帽上衣 / ￥899.00',
                link: 'https://www.underarmour.cn/p1314255-001.htm'
            },
            {
                text: '女子UA Perpetual短袖上衣 / ￥499.00',
                link: 'https://www.underarmour.cn/p1305482-019.htm'
            },
            {
                text: '女子UA Perpetual Loose长裤 / ￥899.00',
                link: 'https://www.underarmour.cn/p1310519-001.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-women-training-4.jpg',
        links: [
            {
                text: '女子UA Vanish Crop T恤 / ￥349.00',
                link: 'https://www.underarmour.cn/p1305484-564.htm'
            },
            {
                text: '女子UA Vanish印花紧身裤 / ￥499.00',
                link: 'https://www.underarmour.cn/cwomens-bottoms-capri/#11-WomensCategory'
            },
            {
                text: '女子UA Slouchy Slip训练鞋 / ￥799.00',
                link: 'https://www.underarmour.cn/p3000273-104.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-women-training-5.jpg',
        links: [
            {
                text: '女子UA Vanish Vent运动内衣——中强度 / ￥449.00',
                link: 'https://www.underarmour.cn/cwomens-tops-sportbra/#11-WomensCategory'
            },
            {
                text: '女子UA Vanish Mesh Loose紧身裤 / ￥549.00',
                link: 'https://www.underarmour.cn/p1305469-408.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-women-training-6.jpg',
        links: [
            {
                text: '女子UA Vanish Crop T恤 / ￥349.00',
                link: 'https://www.underarmour.cn/p1305484-564.htm'
            },
            {
                text: '女子UA Vanish印花紧身裤 / ￥499.00',
                link: 'https://www.underarmour.cn/cwomens-bottoms-capri/#11-WomensCategory'
            },
            {
                text: '女子UA Slouchy Slip训练鞋 / ￥799.00',
                link: 'https://www.underarmour.cn/p3000273-104.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-women-training-7.jpg',
        links: [
            {
                text: '女子UA Perpetual短袖上衣 / ￥499.00',
                link: 'https://www.underarmour.cn/p1305482-019.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-women-training-8.jpg',
        links: [
            {
                text: '女子UA Vanish Vent运动内衣——中强度 / ￥449.00',
                link: 'https://www.underarmour.cn/cwomens-tops-sportbra/#11-WomensCategory'
            },
            {
                text: '女子UA Vanish Mesh Loose紧身裤 / ￥549.00',
                link: 'https://www.underarmour.cn/p1305469-408.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-women-training-9.jpg',
        links: [
            {
                text: '女子UA Vanish Vent运动内衣——中强度 / ￥449.00',
                link: 'https://www.underarmour.cn/cwomens-tops-sportbra/#11-WomensCategory'
            },
            {
                text: '女子UA Vanish Mesh Loose紧身裤 / ￥549.00',
                link: 'https://www.underarmour.cn/p1305469-408.htm'
            }
        ]
    },
    {
        pic: './static/images/detail-women-training-10.jpg',
        links: [
            {
                text: '女子UA Ultimate Speed训练鞋 / ￥899.00',
                link: 'https://www.underarmour.cn/p3019908-100.htm'
            }
        ]
    }
];

export function getDetailData(params){
    if(params.gender == 'men'){
        if(params.category == 'running'){
            return detailDataMenRunning;
        }else if(params.category == 'sport'){
            return detailDataMenSport;
        }else{
            return detailDataMenTraining;
        }
    }else{
        if(params.category == 'running'){
            return detailDataWomenRunning;
        }else if(params.category == 'sport'){
            return detailDataWomenSport;
        }else{
            return detailDataWomenTraining;
        }
    }
    return detailData.filter(item => item.index == index)[0];
}

export function loadingImages(images, cb){
    let count = 0;

    images.forEach(img => {
        let _image = new Image()
        _image.onload = function(){
            count++;
            if(count == images.length){
                cb();
            }
        }
        _image.src = img;
    });
}