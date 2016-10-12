$(function () {
    if(sessionStorage.getItem("name")&&sessionStorage.getItem("name")!="undefined"){
        $(".login").html("我的订单");
        $(".register").html("退出");
    }
    if($(".register").html()==="退出"){
        $(".register").click(function () {
            window.location.href="login.html";
            sessionStorage.removeItem("name");
        })
    }else{
        $(".register").click(function () {
            window.location.href="register.html";
            sessionStorage.removeItem("name");
        })
    }
    if($(".login").html()==="我的订单"){
        $(".login").click(function () {
            return false;
        })
    }
    menu();
    list();
    openVideo();
    closeVideo();
    closeOrganization();
    openOrganization();
    firstChoiceBanner();
    international();
    //调用标签提示
    $('[data-toggle="tooltip"]').tooltip();
});

//超小屏时菜单栏
var menu = function () {
    $(".right-list").click(function () {
        if ($(".menu").hasClass("close")) {
            $(".menu").removeClass("close");
        } else {
            $(".menu").addClass("close");
        }
    })
};
var list = function () {
    $(".title-travel").click(function () {
        if ($(".list-travel").hasClass("close")) {
            $(".list-travel").removeClass("close");
        } else {
            $(".list-travel").addClass("close");
        }
    });
    $(".title-we").click(function () {
        if ($(".list-we").hasClass("close")) {
            $(".list-we").removeClass("close");
        } else {
            $(".list-we").addClass("close");
        }
    })
};
//视频图片开关视频
var openVideo = function () {
    $(".video a").click(function () {
        $(".video a").addClass("close");
        $(".video img").fadeOut(function () {
            $(".video").css("background", "#000");
            $(".lazy").animate({
                "width": "80%"
            }, 1500, function () {
                $(".lazy").attr("controls", "controls")
            });
        });

    });
};
var closeVideo = function () {
    $(".lazy").click(function () {
        $(".lazy").animate({
            "width": "0"
        }, 500, function () {
            $(".video").css("background", "#fff");
            $(".video img").fadeIn(1500, function () {
                $(".video a").removeClass("close");

            });

        });
    });
};
//旅行组织有无
var openOrganization = function () {
    $(".answer a").click(function () {
        $(".organization").fadeIn("close");
    });
}
var closeOrganization = function () {
    $(".closeBtn").on("click", function () {
        $(".organization").fadeOut(1000);
    })
};
//过渡
var addTransition = function (ele) {
    ele.style.transition = "all 1s";
    ele.style.webkitTransition = "all 1s";
};
var removeTransition = function (ele) {
    ele.style.transition = "none";
    ele.style.webkitTransition = "none";
}
//首选轮播图
var firstChoiceBanner = function () {
    var ul = document.querySelector(".change");
    var lis = ul.querySelectorAll("li");
    var changeOpacity = function (index) {
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = "";
        }
        lis[index].className = "appear";
    }
    var index = 0;
    setInterval(function () {
        index++;
        if (index === 4) {
            index = 0;
        }
        addTransition(lis[index]);
        changeOpacity(index);
    }, 5000);
    var changeFirstChoice = function () {
        var leftChange = document.querySelector(".firstChoice .glyphicon-menu-left");

        var rightChange = document.querySelector(".firstChoice .glyphicon-menu-right");
        leftChange.onclick = function () {
            index--;
            console.log(index);
            if (index < 0) {
                index = 3;
            }
            addTransition(lis[index]);
            changeOpacity(index);
        };
        rightChange.onclick = function lunbo() {
            index++;
            if (index > 3) {
                index = 0;
            }
            console.log(index);

            addTransition(lis[index]);
            changeOpacity(index);
        };
    }
    changeFirstChoice();
}

function international() {
    var mySwiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay: 3000,
        effect: 'coverflow',
        loop: true
    });
}
