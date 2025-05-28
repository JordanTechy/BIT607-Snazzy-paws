//This is to controll the pop up in the booking page

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM LOADED");

  const bookingForm = document.getElementById("booking-form");

  bookingForm.addEventListener("submit", function (event) {
    // prevent the form from submitting so i can use this script first
    event.preventDefault();
  });
});

function handleSubmitBtn() {
  const bookingForm = document.getElementById("booking-form");
  if (bookingForm.checkValidity()) {
    console.log("validated");
    // Using bootstrap built in javascipt get the bootstrap model and show it
    const modal = new bootstrap.Modal(document.getElementById("booking-popup"));
    // get the form data and set it in the popup model
    setPopupValues();
    modal.show();
  } else {
    console.log("not validated");
  }
}

function setPopupValues() {
  // set the pop up to flex to show it
  // document.getElementById("booking-popup").style.display = "flex";
  try {
    // get all the values from the form and set them there ids
    // Name
    var name = document.getElementById("name").value;
    var popupName = document.getElementById("popup-name");
    popupName.innerHTML = name;
    // Pet Name
    var petName = document.getElementById("pet-name").value;
    var popupPetName = document.getElementById("popup-pet-name");
    popupPetName.innerHTML = petName;
    // Pet Type
    var petBreed = document.getElementById("pet-breed").value;
    var popupPetBreed = document.getElementById("popup-pet-breed");
    popupPetBreed.innerHTML = petBreed;
    // pet age
    var petAge = document.getElementById("pet-age").value;
    var popupPetAge = document.getElementById("popup-pet-age");
    popupPetAge.innerHTML = petAge;

    //email
    var email = document.getElementById("email").value;
    var popupEmail = document.getElementById("popup-email");
    popupEmail.innerHTML = email;
    //service
    var popupService = document.getElementById("popup-service");
    var selectedService =
      document.getElementById("service").selectedOptions[0].text;
    console.log(selectedService);
    popupService.innerHTML = selectedService;

    //date
    var date = document.getElementById("date").value;
    var popupDate = document.getElementById("popup-date");
    popupDate.innerHTML = date;
    //time
    var time = document.getElementById("time").value;
    var popupTime = document.getElementById("popup-time");
    popupTime.innerHTML = time;

    console.log(name);
  } catch (error) {
    console.error("Error: ", error);
  }
}

function handleYes() {
  // if user clicks yes then we will just use the alert to confirm
  alert(
    "Success your booking has been submitted you will get an email confirmation soon\n"
  );
  // sent the user back to the home page

  const bookingForm = document.getElementById("booking-form");
  // difference here is submitting the form will reset the page closing the model
  bookingForm.submit(); // this will reset the form and the model will close
}

function handleNo() {
  // Dont need to use this now as the bootstrap has a close
}
