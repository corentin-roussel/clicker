<?php
if(isset($_SESSION['user']))
{
?>
    <a class="button-78" id="deconnexion">Déconnexion</a>
<?php }
else {
?>

    <a class="button-78" id="inscription">Inscription</a>
    <a class="button-78" id="connexion">Connexion</a>
<?php
}


