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

function showWeather() {
    let city = document.getElementById("cities").value;
    let token = "25559ba9549cdf970b482a35d3313cac";
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+token;
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        success: function (response) {
            showDatas(response, city);
        },
        error: function (err) {
            console.log("error", err)
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

function showDatas(datas, city) {
    console.log("city", city)
    // console.log("OBJECT: ", datas.weather[0])

    let object_to_array = Object.entries(datas.weather[0]);
    console.log("ARRAY: ", object_to_array)

    //Element dans lequel j'affiche les resultats
    let target = document.getElementById("container");

    let key_selected = ["clearsky", "brokenclouds", "fewclouds", "overcastclouds"];

    let assoc_array =  {
        "brokenclouds" : "<i class='fas fa-cloud-sun fa-10x'></i>",
        "fewclouds" : "<i class='fas fa-cloud-rain fa-10x'></i>",
        "clearsky" : "<i class='fas fa-sun fa-10x'></i>",
        "overcastclouds" : "<i class='fas fa-cloud-showers-heavy fa-10x'></i>",
    }
    
    for( let [key, value] of object_to_array ) {
        value = String(value).toLowerCase().replace(' ', '');
        if( key_selected.includes(value) ) {
            console.log("value", value)
            console.log("TTT",assoc_array[value])
            let new_paragraph = document.createElement('div');
            new_paragraph.setAttribute('style', "display:flex;justify-content:center;align-content:center;")
            new_paragraph.setAttribute('class', 'main-weather')
            new_paragraph.innerHTML =  "<span>" + city.toUpperCase() + " " + assoc_array[value] + "</span>";
            target.appendChild(new_paragraph);
        }
    }

}

