/**
 * Created by Administrator on 2016/9/9.
 */

$(function () {
    var name = $(".name input");
    var password = $(".password input");
    var sure = $(".sure input");
    var value;
    var register = $("#register");
    var regEmail = /^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    //var regEmail =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    name.blur(function () {
        if (!regEmail.test(this.value)) {
            wrong(name);
        } else {
            right(name);
        }
    });
    name.focus(function () {
        click(name);
    });
    password.blur(function () {
        if (this.value.length < 6) {
            wrong(password);
        } else {
            value = this.value;
            right(password);
        }
    });
    password.focus(function () {
        click(password);
    });
    sure.blur(function () {
        if (this.value !== value) {
            wrong(sure);
        } else {
            right(sure);
        }
    });
    sure.focus(function () {
        click(sure);
    });
    register.click(function () {
localStorage.setItem("name",name.val());
sessionStorage.setItem("name",name.val());
localStorage.setItem("password",password.val());
        if (!regEmail.test(name.val())) {
            wrong(name);
            return false;
        }
        if (password.val().length < 6) {
            wrong(password);
            return false;
        }
        if (sure.val() !== password.val()) {
            wrong(sure);
            return false;
        }
        if(register.hasClass("disable")){
            return false;
        }
        register.addClass("disable")
            .val("正在注册，请稍候...");
        $.ajax({
            type: "post",
            url: "register.php",
            data: {
                name: name.val(),
                password: password.val()
            },
            dataType: "json",
            success: function (data) {
                console.log(data);
                register.removeClass("disable").val(data.msg);
                name.val("");
                password.val("");
                sure.val("");
                $(".glyphicon-ok").fadeOut(10);
                window.location.href="index.html";
            }
        })
    })

})
var wrong = function (ele) {
    ele.addClass("border");
    setTimeout(function () {
        ele.removeClass("border")
    }, 1200);
    ele.siblings(".glyphicon-remove").fadeIn(500).delay(500).fadeOut(100);
};
var right = function (ele) {
    ele.siblings(".glyphicon-ok").fadeIn(500);
}
var click = function (ele) {
    ele.removeClass("border");
    ele.siblings(".glyphicon-remove").css("display","none");
    ele.siblings(".glyphicon-ok").css("display","none");
}