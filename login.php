<?php
/**
 * Created by PhpStorm.
 * User: guoshaomin
 * Date: 16/9/15
 * Time: 下午6:36
 */


error_reporting(0);
$mobile = $_REQUEST['name'];

if (!empty($mobile)) {

    $code = rand(1000, 9999);
    $code = $code.'';

    $errData = array(
        'code' => 0,
        'msg' => '验证码获取成功!',
        'data' => array(
            'mobile' => $mobile,
            'dynamic' => $code,
        ),
    );
    _echo($errData);
} else {
    $errData = array(
        'code' => 1,
        'msg' => '手机号码不正确!',
        'data' => array(),
    );
    _echo($errData);

}

function _echo($errData) {
    $resJson = json_encode($errData);
    echo $resJson;
}