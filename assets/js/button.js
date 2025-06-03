const postBody = document.querySelector(".postBody");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const sidebar = document.querySelector(".sidebar");

function toggleMenu() {
  if (sidebar.classList.contains("show")) {
    sidebar.classList.remove("show");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    sidebar.classList.add("show");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}



hamburger.addEventListener("click", toggleMenu);