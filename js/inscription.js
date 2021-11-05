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

function initPerson_type() {
  var qualif = ["éléve", "professeur"];

  qualif.forEach((value, index) => {
    let b_option = document.createElement("option");
    b_option.setAttribute("value", value);
    b_option.innerHTML = value;
    document.getElementById("person_type").appendChild(b_option);

    document
      .querySelector("#validate")
      .addEventListener("click", function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        submit();
      });

  });
}
