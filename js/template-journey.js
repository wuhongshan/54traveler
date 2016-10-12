/**
 * Created by Administrator on 2016/9/13.
 */
//长途旅行模拟后台加载
var journeyList=[
    {
        img:"images/2016081803121063.jpg",
    },
    {
        img:"images/2016082506410426.jpg",
    },
    {
        img:"images/2016090902274980.jpg",
    },
    {
        img:"images/2016090902231943.jpg",
    }
];
template.helper('getJquery', function () {
    return $;
});
var inner=template("journeyTemplate",{model:journeyList});
$(".journey .swiper-wrapper").html(inner);