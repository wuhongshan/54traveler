/**
 * Created by Administrator on 2016/9/13.
 */
//国际旅行模拟后台加载
var internationalList=[
    {
        img:"images/201605200542499.jpg",
    },
    {
        img:"images/201608180610025.jpg",
    },
    {
        img:"images/2016060209401884.jpg",
    },
    {
        img:"images/2016062808011735.jpg",
    }
];
template.helper('getJquery', function () {
    return $;
});
var con=template("inertnationalTemplate",{model:internationalList});
$(".international .swiper-wrapper").html(con);