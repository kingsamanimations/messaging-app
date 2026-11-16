<?php

    class Database
    {

    // Construct
        function __construct()
        {
            $this->con = $this->connect();
        }
        
        // Connect to db
        private function connect()
        {
            $string = "mysql:host=localhost;dbname=mychat_db";
            try 
            {
                $connection = new PDO($string,DBUSER,DBPASS);
                return $connection;

            }catch(PDOException $e)
            {
                echo $e->getMessage();
                die;
            }

            return false;
        }

        // Write to database
        public function write($query, $data_array) {
            try {
                $con = $this->connect();

                $statement = $con->prepare($query);
                $check = $statement->execute($data_array);

                foreach ($data_array as $key => %value) {
                    // code
                    $statement->bindparam(':'.$key, $value);
                }

                $check = $statement->execute();
            }catch(PDOException $e)
            {
                echo $e->getMessage();
                die;
            }

            if($check){
                return true;
            }

            return false;
        }

        public function generate_id($max){
            $rand = "";
            $rand_count = rand(4, $max);
            for ($i=0; $i < $rand_count; $i++) {
                // code
                $r = rand(0,9);
                $rand .= $r;
            }

            return $rand;
        }
    }

