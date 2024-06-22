const menuBurguer = document.querySelector(".menu-burguer");

menuBurguer.addEventListener("click", function () {
  this.classList.toggle("active");
  let atributoMenu = menuBurguer.getAttribute("data-menu");
  atributoMenu = 
  if (!atributoMenu) {
    console.log('n tem nada')
  } else {
    console.log(atributoMenu)
  }
});
