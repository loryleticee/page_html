function showApi() {
    $.ajax({
        url: "../vues/api.html",
        type: "GET",
        dataType: "html",
        success: function (response) {
          document.getElementById("container").innerHTML = response;
          getCities();
        },
        error: function () {
            document.getElementById("container").innerHTML = "Une erreur s'est produite";
        }
      });
}


function getCities() {
    let url = "https://countriesnow.space/api/v0.1/countries/cities";
    let country = "France";
    $.ajax({
        url: url,
        type: "POST",
        data: { "country" : country },
        dataType: "json",
        success: function (response) {
            response.data.forEach((element , key) => {
                let tag_option = document.createElement("option");
                tag_option.setAttribute("value", element);
                tag_option.innerHTML = element;
                document.getElementById("cities").appendChild(tag_option);
            })
        },
        error: function (err) {
            console.log("error", err)
        }
      });
}
