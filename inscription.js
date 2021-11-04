var qualif = ['éléve', 'professeur', ];

qualif.forEach((value, index) => {
    let b_option = document.createElement('option');
    b_option.setAttribute('value', value)
    b_option.innerHTML = value
    document.getElementById('person_type').appendChild(b_option)
});