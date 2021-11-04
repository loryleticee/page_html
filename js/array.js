function showArray() {
    $.ajax({
        url: "../vues/array.html", 
        type: "GET",
        success: function(response) {
            document.getElementById("container").innerHTML = response;
            document.querySelector("#validate").addEventListener('click', function(ev) {
                ev.preventDefault();
                ev.stopPropagation();
                submit()
            })
        }
    }) 
}
    
