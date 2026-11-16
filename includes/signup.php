<?php
    $data = false;
    $data['userid'] = $DB->generate_id();
    $data['date'] = date("Y-m-d H:i:s") ;

    // Validate username
    $data['username'] = $DATA_OBJ->username;
    if(empty($DATA_OBJ->username))
    {
        $Error .= "Please enter a valid username . <br>";
    } else {
        if (strlen($DATA_OBJ->username) < 3) {
            $Error .= "username must be at least 3 characters long. <br>";
        }
        if (preg_match("/([^[a-z A-Z]*$])/", $DATA_OBJ->username)) {
            $Error .= "username must be at least 3 characters long. <br>";
        }
    }

    // Validate email
    $data['email'] = $DATA_OBJ->email;
    if(empty($DATA_OBJ->email))
    {
        $Error .= "Please enter a valid email . <br>";
    } else {
        if (strlen($DATA_OBJ->email) < 3) {
            $Error .= "Email must be at least 3 characters long. <br>";
        }
        if (preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $DATA_OBJ->email)) {
            $Error .= "Please enter a valid email. <br>";
        }
    }

    // Validate password
    $data['password'] = $DATA_OBJ->password;
    if(empty($DATA_OBJ->password))
    {
        $Error .= "Please enter a valid password . <br>";
    } else {
        if (strlen($DATA_OBJ->password) < 8) {
            $Error .= "password must be at least 8 characters long. <br>";
        }
        if (preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $DATA_OBJ->password)) {
            $Error .= "Please enter a valid password. <br>";
        }
    }

    if($Error == "") {
        $query = "insert into users (userid, username, email, password, date) values (:userid, :username, :email, :password, :date"
        //$result = $DB->write($query);
        
        if($result) {
            echo "Your profile was created";
            $info->data_type = "info";
            echo json_encode($info);
        } else {
            echo "You profile was NOT created";
            $info->data_type = "error";
            echo json_encode($info);
        }
    } else {
        $info->message = $Error;
        $info->data_type = "error";
        echo json_encode($info);
    }
?>