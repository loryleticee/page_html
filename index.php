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
    <!-- ADD VUE CDN HERE -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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
            <a href="#signup" onclick="showSignup()">Inscription</a>
            <a href="#array" onclick="showArray()">Tableau</a>
            <a href="#addition" onclick="showAddition()">Addition</a>
            <a href="#multiply" onclick="showMultiply()">Multiplication</a>
            <a href="#api" onclick="showApi()">API</a>
        </nav>
        <!-- Ici ma barre de navigation (navbar) -->
    </header>
    <main class="main">
        <section class="menu-left">
            <button id="changeColor" onclick="changeColor()">Changer la couleur</button>
        </section>
        <div id="container"> SALUT J'AI MODFIFIÉ MON FICHIER INDEX</div>
    </main>
</body>
<footer class="footer">
    <script src="js/array.js"></script>
    <script src="js/function.js"></script>
    <script src="js/init.js"></script>
    <script src="js/inscription.js"></script>
    <script src="js/multiply.js"></script>
    <script src="js/api.js"></script>
    <script src="js/addition.js"></script>
    <div>
        <span id="copyright"> <small>&copy; Alaji 2021</small></span>
    </div>
</footer>
</html>