<?php

session_start();

$DATA_RAW = get_file_get_contents("php://input");
$DATA_OBJ = json_decode($DATA_RAW);

$info = (object)[];

// Check if logged in
if (!isset($_SESSION['userid'])) {

    // echo $_SERVER['PHP_SELF']; die;

    if(isset($DATA_OBJ->data_type) && $DATA_OBJ->data_type != "login") {
        $info->logged_in = false;
        echo json_encode($info);
        die;
    }
}

require_once("classes/autoload.php");
$DB = new Database();



$Error = "";

// Process the data
if (isset($DATA_OBJ->data_type) && $DATA_OBJ->data_type == "signup")
{
    // Sign up
    include("includes/signup.php");
    
} elseif{
    if(isset($DATA_OBJ->data_type) && $DATA_OBJ->data_type == "user_info") {
        echo "user_info";
    }
} elseif {
    if(isset($DATA_OBJ->data_type) && $DATA_OBJ->data_type == "login") {
        // Log in
        include("includes/login.php");
    }
} elseif {
    if(isset($DATA_OBJ->data_type) && $DATA_OBJ->data_type == "user_info") {
        // User info
        include("includes/user_info.php");
    }
} elseif(isset($DATA_OBJ->data_type) && $DATA_OBJ->data_type == "logout") {
    // Log in
    include("includes/logout.php");
}


