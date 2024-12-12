<?php
$conn = null;
$conn = checkDbConnection();
$level = new Level($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("levelid", $_GET)) {
    checkPayload($data);

    $level->level_aid = $_GET['levelid'];
    $level->level_title = checkIndex($data, "level_title");

    $level->level_datetime = date("Y-m-d H:i:s");
    // $level_title_old = strtolower($data["level_title_old"]);
    // checkId($level->level_aid);
    // compareName($level, $level_title_old, $level->level_title);

    $query = checkUpdate($level);
    returnSuccess($level, "level", $query);
}

checkEndpoint();