export default function menu() {
    const dataList = document.querySelector("[data-list-header]");
    const dataNavigationHeader = document.querySelector("[data-navigation-header]");
    // const menuBurguer = document.querySelector(".menu-burguer");
  
    $(function () {
      $(".menu-burguer").click(function (e) {
        e.stopPropagation();
  
        $(this).toggleClass("open");
  
        dataList.style.display = "none";
  
        if ($(this).hasClass("open")) {
          dataList.style.display = "flex";
          dataNavigationHeader.style.display = "block";
        } else {
          dataList.style.display = "none";
          dataNavigationHeader.style.display = "none";
        }
      });
  
      $(window).resize(function () {
        if ($(window).width() > 900) {
          dataList.style.display = "flex";
          dataNavigationHeader.style.display = "block";
        } else {
          dataList.style.display = "none";
          dataNavigationHeader.style.display = "none";
          $(".menu-burguer").removeClass("open");
        }
      });
  
      $(document).click(function (e) {
        if (!$(e.target).closest(".menu-burguer, [data-list-header], [data-navigation-header]").length) {
          dataList.style.display = "none";
          dataNavigationHeader.style.display = "none";
          $(".menu-burguer").removeClass("open");
        }
      });
    });
  }
  