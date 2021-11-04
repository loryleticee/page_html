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
    document.getElementsByClassName('menu-left')[0].style.backgroundColor = selected_color;
}

function submit() {
    nom = document.getElementById('lastname').value;
    prenom = document.getElementById('firstname').value;
    address = document.getElementById('address').value;
    age = document.getElementById('age').value;
    qualif = document.getElementById('person_type').value;

    console.log(nom, prenom, address, age, qualif)
}