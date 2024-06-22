const iconMenu = document.querySelector(".menu-burguer");
const dataList = document.querySelector("[data-list-header]");

$(function () {
  $(".menu-burguer").click(function () {
    if (this.classList.contains("open")) {
      this.classList.remove("open");
    } else {
      this.classList.add("open"); 
    }
  });
});
