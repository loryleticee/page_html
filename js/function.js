function changeColor() {
    let color = ['#f79489', '#f9f1f0', '#fadcd9', '#f8afa6', ];
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