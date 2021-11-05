function showArray() {
    $.ajax({
        url: "../vues/array.html", 
        type: "GET",
        success: function(response) {
            document.getElementById("container").innerHTML = response;
        }
    }) 
}
    
