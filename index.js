let sideNav = document.getElementById("side-nav");
let btn = document.getElementById("menu-btn");

function openMenu() {
  console.log(sideNav.classList)
  sideNav.classList.toggle("close")
}

btn.addEventListener("click", openMenu);
