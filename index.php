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
    <header>
        <h1>
            Accueil
        </h1>
        <!-- Ici ma barre de navigation (navbar) -->
    </header>
    <main>
        <section class="position-left">
            <div >
                Ici mon menu de gauche
            </div>
            <button id="changeColor" onclick="changeColor()">Changer la couleur</button>

        </section>

        <section id="container">
            Ici mon contenu principale
        </section>

        <section>
            Ma grille
            <div class="grid-container">
                <div class="item1">1</div>
                <div class="">2</div>
                <div class="">3</div>
                <div class="">4</div>
                <div class="">5</div>
                <div class="">6</div>
                <div class="">7</div>
                <div class="">8</div>
                <div class="">9</div>
            </div>
        </section>

        <hr>

        <section>
            Mon tableau d'article

            <table border="1" class="article-tab">
                <tr>
                    <th>Référence</th>
                    <th>Nom</th>
                    <th>taille</th>
                    <th>Prix</th>
                </tr>
                <tr>
                    <td>0001</td>
                    <td>T-shirt Nike</td>
                    <td>M</td>
                    <td>50€</td>
                </tr>
            </table>

            <div style="margin-bottom: 20px;"> </div>

            <hr>

        </section>

        <section>
            Formulaire d'inscription
            <form action="formulaire.php" method="post" >
                <label> Nom </label>
                <input type="text" name="lastname" id="lastname" maxlength="15" required/>
                </br>
                <label> Prénom </label>
                <input type="firstname" name="firstname" id="firstname" maxlength="255" required/>
                </br>
                <label> Age </label>
                <input type="number" name="age" id="age" min="18" max="90" required/>
                </br>
                <label> Adresse </label>
                <input type="text" name="address" id="address" maxlength="100" required/>
                </br>
                <label> Qualification </label>
                </br>
                <select name="person_type" id="person_type">
                    
                </select>

                <input type="submit" id="validate" value="Valider" />
            </form>
        </section>
        <div>
            <small> Contenu de mon site</small>
        </div>
    </main>
</body>

<footer>
    <script>
        function changeColor() {
            let color = ['red', 'blue', 'green', 'rgb(100, 255, 10)',];
            let random_number = Math.floor( Math.random() * color.length )
            let selected_color = color[random_number];
            document.getElementsByClassName('position-left')[0].style.backgroundColor = selected_color;
        }

        document.querySelector("#validate").addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            submit();
        })


        function submit() {
            nom = document.getElementById('lastname').value;
            prenom = document.getElementById('firstname').value;
            address = document.getElementById('address').value;
            age = document.getElementById('age').value;
            qualif = document.getElementById('person_type').value;

            console.log(nom, prenom ,address ,age, qualif)
        }
        
    </script>

    <div>
        &copy; Alaji 2021
    </div>
</footer>

</html>