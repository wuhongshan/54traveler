<?php
/**
 * Created by PhpStorm.
 * User: guoshaomin
 * Date: 16/9/15
 * Time: 下午12:40
 */

//error_reporting(0);
//header('Content-Type: application/json');
$json = json_decode(file_get_contents('login.json'),true);

echo json_encode($json);
/*
$userName = $_REQUEST['name'];
$pwd = $_REQUEST['password'];

if (empty($userName) || empty($pwd)) {
    $errData = array(
        'code' => 1,
        'msg' => '用户名或密码不能为空',
        'data' => array(),
    );
    _echo($errData);
}

if ($userName == 'guoshaomin' && $pwd == 'aiwuhongshan') {
    $errData = array(
        'code' => 0,
        'msg' => '登录成功',
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
//输出内容
*/
