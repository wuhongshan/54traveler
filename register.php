<?php
/**
 * Created by PhpStorm.
 * User: guoshaomin
 * Date: 16/9/15
 * Time: 下午12:55
 */

error_reporting(0);
header('Content-Type: application/json');

$userName = $_REQUEST['name'];
$pwd = $_REQUEST['password'];

if (empty($userName) || empty($pwd)) {
    $errData = array(
        'code' => 1,
        'msg' => '注册用户名或密码不能为空',
        'data' => array(),
    );

    _echo($errData);
} else {
    $errData = array(
        'code' => 0,
        'msg' => '恭喜您注册成功,请登录!',
        'data' => array(
            'name' => $userName,
            'password' => $pwd,
        ),
    );
    _echo($errData);
}

function _echo($errData) {
    $resJson = json_encode($errData);
    echo $resJson;
}
sleep(3);