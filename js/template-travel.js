/**
 * Created by Administrator on 2016/9/5.
 */
//微旅行模拟后台加载
var travelList=[
    {
        img:"images/2016090502373045.jpg",
    },
    {
        img:"images/2016090502442147.jpg",
    },
    {
        img:"images/2016090503000423.jpg",
    }
];
template.helper('getJquery', function () {
    return $;
});
var content=template("travelTemplate",{model:travelList});
$(".mini .swiper-wrapper").html(content);