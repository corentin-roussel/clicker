<?php
require_once ("Class/User.php");
session_start();



if(!empty($_POST)) {
    $login = htmlspecialchars(trim($_POST['login']));
    $password = htmlspecialchars(trim($_POST['password']));
    $confpassword = htmlspecialchars((trim($_POST['confpassword'])));

    $user = new User();

    if($password === $confpassword)
    {
        $user->userRegister($login, $password);
    }
    else
    {
        echo "Le mot de passe et la confirmation du mot de passe et identiques";
    }

}



?>

<form class="flex-form" id="formReg" method="POST">
    <label class="space" for="login">Login</label>
    <input class="space" type="text" name="login" id="login" placeholder="Veuiller entrer votre login">

    <label class="space" for="password">Mot de passe</label>
    <input class="space" type="password" name="password" id="password" placeholder="Veuillez entrer votre mot de passe">

    <label class="space" for="confpassword">Confirmation de mot de passe</label>
    <input class="space" type="password" name="confpassword" id="confpassword" placeholder="Veuillez entrer votre confirmation de mot de passe">

    <input class="space" type="submit" id="buttonReg" name="inscription" value="Inscription">
</form>
