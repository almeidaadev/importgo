// const menuBurguer = document.querySelector(".menu-burguer");

// menuBurguer.addEventListener("click", function () {
//   this.classList.toggle("active");
//   let atributoMenu = menuBurguer.getAttribute("data-menu");
//   atributoMenu =
//   if (!atributoMenu) {
//     console.log('n tem nada')
//   } else {
//     console.log(atributoMenu)
//   }
// });

const iconMenu = document.querySelector(".menu-burguer");
const dataList = document.querySelector("[data-list-header]");


iconMenu.addEventListener("click", function () {
  if (this.classList.contains("open")) {
    this.classList.remove("open");
    dataList.style.display = "block"
  } else {
    this.classList.add("open");
    dataList.style.display = "none"
  }
}, false);
