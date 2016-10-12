/**
 * Created by Administrator on 2016/9/8.
 */
$(function () {

    function nameFuc() {
        if (ID.prop("checked")) {
            userName = localStorage.getItem("name");
            if (name.val() != userName) {
                name.attr("placeholder", "请填入正确信息");
                wrong(name, function () {
                    name.attr("placeholder", "已验证邮箱");
                    return false;
                });
            } else {
                right(name);
            }
        } else {
            userName = /^(13[0-9]|14[57]|15[0-9]|18[0-9])\d{8}$/;
            if (!userName.test(name.val())) {
                name.attr("placeholder", "请填入正确信息");
                wrong(name, function () {
                    name.attr("placeholder", "请输入手机号");
                    return false;
                });
            } else {
                right(name);
            }
        }
    }

    function passwordFuc() {
        psd = localStorage.getItem("password");
        if (password.val() != psd) {
            password.attr("placeholder", "请填入正确密码")
            wrong(password, function () {
                password.attr("placeholder", "密码");
                return false;
            });
        } else {
            right(password);
        }
    }

    function codeFuc() {
        if (code.val() !== codeVal) {
            code.attr("placeholder", "请输入验证码");
            wrong(code, function () {
                code.attr("placeholder", "验证码(区分大小写)");
                return false;
            });
        } else {
            right(code);
        }
    }

    var ID = $(".ID");
    var phone = $(".phone");

    var psd = sessionStorage.getItem("password");
    ID.click(function () {
        phone.prop("checked", false);
        name.attr("placeholder", "已验证邮箱");
        verification.addClass("close");
        password.removeClass("close");
    });
    phone.click(function () {
        ID.prop("checked", false);
        name.attr("placeholder", "请输入手机号");
        password.addClass("close");
        verification.removeClass("close");
    });

    var name = $(".name input");
    var password = $(".password input");
    var verification = $(".verification");
    var code = $(".code input");
    var codeVal = "4qrcce";
    var dynamic = $(".dynamic input");
    var login = $("#login");
    var userName = null;
    var psd = null;
    var mobile = null;
    var codeNum=null;
    name.blur(function () {
        nameFuc();
    });
    name.focus(function () {
        click(name);
    });
    password.blur(function () {
        passwordFuc();
    });
    password.focus(function () {
        click(password);
    });
    code.blur(function () {
        codeFuc();
    });
    code.focus(function () {
        click(code);
    })
    $("button").click(function () {
        userName = /^(13[0-9]|14[57]|15[0-9]|18[0-9])\d{8}$/;
        if (!userName.test(name.val())) {
            name.attr("placeholder", "请填入正确信息");
            wrong(name, function () {
                name.attr("placeholder", "请输入手机号");
            });
            return false;
        }
        if ($(this).hasClass("disable")) {
            return false;
        }
        $.ajax({
            type: "post",
            url: "login.php",
            data: {
                name: name.val()
            },
            dataType: "json",
            beforeSend: function () {
                $("button").addClass("disable").html("正在发送中...");
            },
            success: function (data) {
                 mobile = data.data.mobile;
                codeNum = data.data.dynamic;
                console.log(mobile);
                console.log(codeNum);
                var time = 30;
                var timer = setInterval(function () {
                    time--;
                    if (time <= 0) {
                        $("button").removeClass("disable").html("获取动态密码");
                        clearInterval(timer);
                        return false;
                    }
                    $("button").html(time + "秒后再次获取")
                }, 1000)
            }
        })
    })
    $("#login").click(function () {
        if (ID.prop("checked")) {
            nameFuc();
            passwordFuc();
            if (name.val() === userName && password.val() === psd) {
                name.val("");
                password.val("");
                $(".glyphicon-ok").fadeOut(10);
                sessionStorage.setItem("name",localStorage.getItem("name"));
                window.location.href="index.html";
            }
        } else {
            if(name.val()!=mobile){
                name.siblings(".glyphicon-ok").css("display","none");
                wrong(name);
            }
           if(code.val() != codeVal) {
               wrong(code);
           }
            if(dynamic.val()!=codeNum){
               wrong(dynamic);
            }
            if (name.val()===mobile&&code.val() === codeVal&&dynamic.val()===codeNum) {
                name.val("").siblings(".glyphicon-ok").css("display","none");
                code.val("").siblings(".glyphicon-ok").css("display","none");
                dynamic.val("").siblings(".glyphicon-ok").css("display","none");
                sessionStorage.setItem("name",localStorage.getItem("name"));
                window.location.href="index.html";
            }
        }

    })
})
var wrong = function (ele, callback) {
    ele.addClass("border");
    setTimeout(function () {
        ele.removeClass("border")
    }, 1200);
    ele.siblings(".glyphicon-remove").fadeIn(500).delay(500).fadeOut(100, function () {
        callback && callback();
    });
};
var right = function (ele) {
    ele.siblings(".glyphicon-ok").fadeIn(500);
}
var click = function (ele) {
    ele.removeClass("border");
    ele.siblings(".glyphicon-remove").css("display","none");
    ele.siblings(".glyphicon-ok").css("display","none");
};
