<?php 

include_once $_SERVER['DOCUMENT_ROOT'].'\database.php';

class registration{

    public static function getreg($name,$contact_number,$email,$password,$worktype)

    {  
        $conn = database::getConnection();

        $sql="INSERT INTO `signup`(`name`,`contact_number`,`email`,`password`,`worktype`)
        VALUES('$name','$contact_number','$email','$password','$worktype')";
        
        if($conn->query($sql) == true){
            
            return true;
        }
        else{
            return false;
        }   
    }

    public static function getData($table, $email)
    {
        $conn = database::getconnection();
        $sql = "SELECT * FROM `$table` WHERE `email` = '$email';
";
        $result = $conn->query($sql);
        return $result->fetch_all(MYSQLI_ASSOC);
    }



}