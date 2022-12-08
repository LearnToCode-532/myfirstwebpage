function validateForm() {
    let name = document.getElementById("name").value;
    let comment = document.getElementById("comment").value;
    var genderinput = document.getElementsByName("gender");
    var gender;
    for (var i = 0; i < genderinput.length; i++) {
      if (genderinput[i].checked) {
        gender = genderinput[i].value;
      }
    }
    if (name == "" || comment == "" || gender == null) {
      alert("All fields are compulsory");
      if (name == "") {
        document.getElementById("name").focus();
      } else if (comment == "") {
        document.getElementById("comment").focus();
      } else {
        document.getElementsByClassName("radiobutton").focus();
      }
    }
  }