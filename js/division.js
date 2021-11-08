function showdivision() {
    $.ajax({
        url: "../vues/division.html",
        dataType: "html",
        success: function (response) {
            document.getElementById("container").innerHTML = response
        },
        error: function (error) {
            console.log("error:", error)
        }
    })
}

function division() {
    let numero1 = parseInt(document.getElementById("number_1").value);
    let numero2 = parseInt(document.getElementById("number_2").value);

    let tag_small  = "<small>" + numero1 + '+' + numero2 + "</small>"
    document.getElementById("resultat").innerHTML = tag_small + " = " + (numero1 + numero2); 
}

