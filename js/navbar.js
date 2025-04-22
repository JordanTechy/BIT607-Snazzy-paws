document.addEventListener("DOMContentLoaded", function () {

  // this is to make the hamburger menue open the nav links on the mobile
  const hamburger = document.querySelector(".hamburger");
  const navLinkBox = document.querySelector(".nav-link-box");
  const icon = document.querySelector(".hamburger img");
  
  hamburger.addEventListener("click", () => {
    console.log("Hamburger clicked!");
    navLinkBox.classList.toggle("active");

    // Toggle icon because i want to show a x for accessability
    // to show the menue can be closed with a X 
    if (icon.src.includes("burger-menu.svg")) {
      icon.src = "./images/burger-menu-close.svg";
    } else {
      icon.src = "./images/burger-menu.svg";
    }
  });

  // For the nav bar hamburger to close and go back to normal if the user
  // has clicked in the hamburger

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      navLinkBox.classList.remove("active");
      icon.src = "./images/burger-menu.svg";

    }
  });
});
