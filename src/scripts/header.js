export default function menu() {
  const dataList = document.querySelector("[data-list-header]");

  $(function () {
    $(".menu-burguer").click(function () {
      this.classList.toggle("open");
      dataList.style.display = "none";

      if (this.classList.contains("open")) {
        dataList.style.display = "flex";
      } else {
        dataList.style.display = "none";
      };
    });

    $(window).resize(function () {
      if ($(window).width() > 900) {
        dataList.style.display = "flex";
      } else {
        dataList.style.display = "none";
      }
    });
  });
};