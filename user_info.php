<?php

$info = (object)[];

    $data = false;

    // Validate info
    $data['userid'] = $_SESSION['userid'];

    if ($Error == "") {

    $query = "select * from users where email = :email limit 1";
    $result = $DB->read($query, $data);

    if(is_array($result)){
        $result = $result[0];
        $result->data_type = "user_info";
        echo json_encode($result);
    } else {
        $info->message = "Wrong username";
        $info->data_type = "error";
        echo json_encode($info);
    }
    }