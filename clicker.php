<?php
session_start();

if(isset($_SESSION['user'])) {
?>
<!doctype html>
<html lang="fr">
<head>
    <?php require_once ('_include/head.php') ?>
    <script defer src="_include/clicker.js"></script>
    <script defer src="_include/deconnexion.js"></script>
    <title>Clicker</title>
</head>
<body>
    <header>
        <?php require_once('_include/header.php') ?>
    </header>
    <main>
        <article class="clicker-place">
            <h1 class="title">BIENVENUE SUR DRAGONCLICKER</h1>
        </article>
        <article id="place-multiplicateur">

        </article>
        <article class="clicker-place">
        <div class="click-place" id="clicker">
            <lottie-player id="gif" src="https://assets1.lottiefiles.com/packages/lf20_1mvhccet.json" background="transparent"  speed="1"  style="width: 300px; height: 300px;" loop autoplay></lottie-player>
        </div>

        </article>
        <article class="flex-item">
            <div class="center" id="multiplicateur-shop">

            </div>
            <div class="center" id="littleItem">

            </div>
            <div class="center" id="middleItem">

            </div>
            <div class="center" id="bigItem">

            </div>
        </article>
        <article class="reset-place">
            <div id="reset">

            </div>

        </article>
    </main>
    <footer>

    </footer>
</body>
</html>
<?php
}
else
{
    header("location:index.php");
}
?>
