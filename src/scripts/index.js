const iconMenu = document.querySelector(".menu-burguer");
const dataList = document.querySelector("[data-list-header]");

dataList.style.display = "none";

$(function () {
  $(".menu-burguer").click(function () {
    if (this.classList.contains("open")) {
      this.classList.remove("open");
      dataList.style.display = "none";
    } else {
      this.classList.add("open");
      dataList.style.display = "block";
    }
  });
});
