function showMultiply() {
  $.ajax({
    url: "../vues/multiply.html",
    type: "GET",
    success: function (response) {
      document.getElementById("container").innerHTML = response;
    },
  });
}

// creer une fonction qui reçois deux chiffres et qui renvoit le resultat de leur multiplication
// mettez ce resultat dans une varaible nommée <resultat>
// appeler la fonction et afficher le resultat dans une div avec l'id <resultat>
// Afficher le resultat de la fonction dans un élément html

function multiply() {
  let numero1 = document.getElementById("number_1").value;
  let numero2 = document.getElementById("number_2").value;
  // $resultat = $number_1 * $number_2;
  // return $resultat;
  document.getElementById("resultat").innerHTML = numero1 * numero2;
}
