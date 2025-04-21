document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("test").textContent = "From my javascript file!";

  // this is to make the hamburger menue open the nav links on the mobile
  const hamburger = document.querySelector(".hamburger");
  const navLinkBox = document.querySelector(".nav-link-box");

  hamburger.addEventListener("click", () => {
    console.log("Hamburger clicked!");
    navLinkBox.classList.toggle("active");
  });
});
