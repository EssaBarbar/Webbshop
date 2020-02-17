    <?php

    class Database {
        private $connection;


        function __construct() {
            $dsn = 'mysql:host=localhost;dbname=enjoy';
            $user = 'root';
            $password = 'root';
            $this->connection = new PDO($dsn, $user, $password);
            $this->connection->exec("set names utf8");
        }
    }

    // class Database {

    //     // public function connect()
    //     // {
    //     //     $dsn = 'myssql:host=;localhost;dbname=enjoy';
    //     //     $user = 'root';
    //     //     $password = 'root';
    //     //     $this->db = new PDO($dsn,$user, $password);
    //     //     $this->db->exec("set names utf8");
    //     // }
       
    // //     private $host = 'localhost';
    // //     private $db_name = 'enjoy';
    // //     private $username = 'root';
    // //     private $password = 'root';
    // //     private $conn;

    // //     public function connect() {
    // //         $this->conn = null;

    // //         try {
    // //             $this->conn = new PDO('mysql:host=' .$this->host .';dbname= ' . $this->db_name,
    // //             $this->username, $this->password);
    // //             $this->conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    // //         } catch(PDOException $e) {
    // //             echo 'Connection Error: ' . $e->getMessage();
    // //         }
    // //         return $this->conn;
    // //     }
    // // }
    ?>
