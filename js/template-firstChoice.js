/**
 * Created by Administrator on 2016/9/5.
 */
//旅游首选模拟后台加载
var firstChoiceList=[
    {
        img:"images/201608250634145.jpg",
        p1:"全新路线·绝色秋日",
        p2:"秘境川西——聆听雪山之下的田园牧歌"
    },
    {
        img:"images/2016081808061047.jpg",
        p1:"全新国际路线】看地球另一边的人是如何疯狂生活着的~",
        p2:"缤纷墨西哥——从古玛雅文明到加勒比海岸！"
    },
    {
        img:"images/2016081803172554.jpg",
        p1:"全新长途旅行！从丝绸之路到喀喇昆仑——",
        p2:"跟着稻稻一起闯南疆！"
    },
    {
        img:"images/2016070403110067.jpg",
        p1:"稻稻招人啦",
        p2:"Join US —— 各类全职、兼职岗位来袭!"
    }
];
template.helper('getJquery', function () {
    return $;
});
var html=template("firstChoiceTemplate",{model:firstChoiceList});
$(".change").html(html);

