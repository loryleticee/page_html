// $("button").click(function() {
//     $.ajax({
//         url: "demo_test.txt",
//         success: function(result) {
//             $("#div1").html(result);
//         }
//     });
// });

function changeColor() {
    let color = ['red', 'blue', 'green', 'rgb(100, 255, 10)', ];
    let random_number = Math.floor(Math.random() * color.length)
    let selected_color = color[random_number];
    document.getElementsByClassName('position-left')[0].style.backgroundColor = selected_color;
}

document.querySelector("#validate").addEventListener('click', function(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    submit()
})

document.querySelector('#multiply').addEventListener('click', function(ev) {
    let numero1 = document.getElementById('number_1').value;
    let numero2 = document.getElementById('number_2').value;

    // let resultat = numero1 * numero2
    // document.getElementById('resultat').innerHTML = resultat

    let resultat = multiply(numero1, numero2)
    document.getElementById('resultat').innerHTML = resultat
})


function submit() {
    nom = document.getElementById('lastname').value;
    prenom = document.getElementById('firstname').value;
    address = document.getElementById('address').value;
    age = document.getElementById('age').value;
    qualif = document.getElementById('person_type').value;

    console.log(nom, prenom, address, age, qualif)
}

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

var qualif = ['éléve', 'professeur', ];

qualif.forEach((value, index) => {
    let b_option = document.createElement('option');
    b_option.setAttribute('value', value)
    b_option.innerHTML = value
    document.getElementById('person_type').appendChild(b_option)
});