document.querySelector('#multiply').addEventListener('click', function(ev) {
    let numero1 = document.getElementById('number_1').value;
    let numero2 = document.getElementById('number_2').value;

    // let resultat = numero1 * numero2
    // document.getElementById('resultat').innerHTML = resultat

    let resultat = multiply(numero1, numero2)
    document.getElementById('resultat').innerHTML = resultat
})

// creer une fonction qui reçois deux chiffres et qui renvoit le resultat de leur multiplication
// mettez ce resultat dans une varaible nommée <resultat>
// appeler la fonction et afficher le resultat dans une div avec l'id <resultat>   
// Afficher le resultat de la fonction dans un élément html

function multiply($number_1, $number_2) {
    // $resultat = $number_1 * $number_2; 
    // return $resultat;
    return $number_1 * $number_2;
}

var $resultat = multiply(2, 3);