const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const sidebar = document.querySelector(".sidebar"); // pode não existir
const nav = document.querySelector(".navitems");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    if (sidebar) {
      sidebar.classList.toggle("show");
    }

    nav.classList.toggle("show");

    const show = nav.classList.contains("show");
    closeIcon.style.display = show ? "block" : "none";
    menuIcon.style.display = show ? "none" : "block";
  });
}
