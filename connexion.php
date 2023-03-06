<?php
require_once ('Class/User.php');
session_start();

if(!empty($_POST))
{
    $login = htmlspecialchars(trim($_POST['login']));
    $password = htmlspecialchars(trim($_POST['password']));

    $user = new User();
    $user->userConnexion($login, $password);

    var_dump($_SESSION['user']);


}

?>

<form class="flex-form" id="formCon" method="POST">
    <label class="space" for="login">Login</label>
    <input class="space" type="text" name="login" id="login" placeholder="Veuiller entrer votre login">

    <label class="space" for="password">Mot de passe</label>
    <input class="space" type="password" name="password" id="password" placeholder="Veuillez entrer votre mot de passe">

    <input class="space" type="submit" id="buttonCon" name="inscription" value="Connexion">
</form>