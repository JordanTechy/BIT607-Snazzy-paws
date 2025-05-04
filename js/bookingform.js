document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM LOADED");

  const signUpForm = document.getElementById("signup-form");

  signUpForm.addEventListener("submit", function (event) {
    // prevent the form from submitting so i can use this script first
    event.preventDefault();
    // get all the forms values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var postCode = document.getElementById("postCode").value;
    // build the message string for the alert box

    var message = `Name: ${name}\nEmail: ${email}\nPassword: ${password}\nPassword2: ${password2}\nAddress: ${address}\nCity: ${city}\nPost Code: ${postCode}`;
    // check if the passwords match
    if (password !== password2) {
      alert("! Passwords must match ! \n" + message);
      document.getElementById("password").value = "";
      document.getElementById("password2").value = "";
    } else {
      alert("Success here is your log in information\n" + message);
      // reset the form after submit if succesfull
      signUpForm.reset();
    }
  });
});
