<?php 

class database{

    public static $getdatabase=NULL;

    public static function getconnection(){

        if(database::$getdatabase==NULL){

            $server="localhost";
            $username="raju";
            $userpass="Raju@1234";
            $db_name="job";

            $conn=new mysqli($server,$username,$userpass,$db_name);

            if($conn->connect_error==true){
                return false;
            }
            else{

                database::$getdatabase = $conn;
            
                                return $conn;
                

            }
        }
        else{
            return database::$getdatabase;
        }




    }
}
