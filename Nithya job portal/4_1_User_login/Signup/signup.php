<?php 

include_once $_SERVER['DOCUMENT_ROOT'].'\userclass.php';

if(registration::getreg($_POST["name"],$_POST["number"],$_POST["email"],$_POST["password"],$_POST["worktype"])){
    ?> <script>window.alert("Sign Up Success!")</script><?php
    header("Location: ../../home.html");
}else{
    ?> <script>window.alert("Sign Up Failed!")</script><?php

}

