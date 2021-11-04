<!DOCTYPE html>
<html lang="fr">
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, , maximum-scale=1">
    <meta name="description" content="Mon site e-commerce de vente de chaussure">
    <meta name="keywords" content="chaussure, e-commerce, vente, chausette">
    <meta name="author" content="Lory LÉTICÉE">
    <link rel="stylesheet" href="./style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <title>
        Bienvenue - Accueil
    </title>
</head>
<body>
    <header class="header">
        <h1 class="header-title">
            Accueil
        </h1>
        <nav class="header-nav">
            <a href="#" onclick="showSignup()">Inscription</a>
            <a href="#" onclick="showArray()">Tableau</a>
            <a href="#" onclick="showMultiply()">Multiplication</a>
        </nav>
        <!-- Ici ma barre de navigation (navbar) -->
    </header>
    <main class="main">
        <section class="menu-left">
            <button id="changeColor" onclick="changeColor()">Changer la couleur</button>
        </section>
        <div id="container"></div>
    </main>
</body>
<footer class="footer">
    <script src="js/array.js"></script>
    <script src="js/function.js"></script>
    <script src="js/init.js"></script>
    <script src="js/inscription.js"></script>
    <script src="js/multiply.js"></script>
    <div>
        &copy; Alaji 2021
    </div>
</footer>
</html>