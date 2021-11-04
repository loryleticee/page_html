function showSignup() {
    $.ajax({
        url: "../vues/inscription.html", 
        type: "GET",
        success: function(response) {
            document.getElementById("container").innerHTML = response;
            initPerson_type()
        }
    })
}
showSignup()
