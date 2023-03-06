<?php
class User
{
    private ?PDO $connect;
    private ?int $id = NULL;
    private ?string $login = NULL;

    private ?string $password = NULL;

    public function __construct()
    {
        $usernameDB = "root";
        $passwordDB = "";



        try {
            $this->connect = new PDO("mysql:host=localhost;dbname=clicker", $usernameDB, $passwordDB);
            // set the PDO error mode to exception
            $this->connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }



    public function userRegister($login, $password)
    {
            $count = $this->connect->prepare("SELECT * FROM utilisateurs WHERE login = :login");
            $count->execute([
                ":login" => $login
            ]);
            $verif = $count->rowCount();

            if($verif < 1)
            {
                $crypt_password = password_hash($password, PASSWORD_DEFAULT);

                $req = $this->connect->prepare("INSERT INTO utilisateurs (`login`, `password`) VALUES (:login, :password)");
                $req->execute([
                    ":login" => $login,
                    ":password" => $crypt_password
                ]);
            }

    }

    public function userConnexion($login, $password) {
        $count = $this->connect->prepare("SELECT * FROM utilisateurs WHERE login = :login");
        $count->execute([
            ":login" => $login
        ]);

        $verif = $count->rowCount();
        $user = $count->fetch(PDO::FETCH_ASSOC);


        if($verif == 1)
        {
            if(password_verify($password, $user['password']))
            {
                $_SESSION['user'] = array("id" => $user['id'],"login" => $user['login'], "password" => $user['password']);
            }
            else
            {
                echo "Le mot de passe ou le login est incorrect";
            }
        }
        else
        {
            echo "Le login ou le mot de passe est incorrect";
        }
    }
    public function setId(?int $id): void
    {
        $this->id = $id;
    }

    public function setLogin(?string $login): void
    {
        $this->login = $login;
    }

    public function setPassword(?string $password): void
    {
        $this->password = $password;
    }

    /**
     * @param string|null $confpassword
     */
    public function setConfpassword(?string $confpassword): void
    {
        $this->confpassword = $confpassword;
    }


    public function getId(): ?int
    {
        return $this->id;
    }


    public function getLogin(): ?string
    {
        return $this->login;
    }


    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function getConfPassword(): ?string
    {
        return $this->confpassword;
    }

}