export default function menu() {
  const dataList = document.querySelector("[data-list-header]");
  const dataNavigationHeader = document.querySelector("[data-navigation-header]");
  const menuBurguer = document.querySelector(".menu-burguer");

  $(function () {
    $(".menu-burguer").click(function (e) {
      e.stopPropagation();

      $(this).toggleClass("open");

      if ($(this).hasClass("open")) {
        dataList.style.display = "flex";
        dataNavigationHeader.style.display = "block";
      } else {
        dataList.style.display = "none";
        dataNavigationHeader.style.display = "none";
      }
    });

    $(document).click(function (e) {
      if (!menuBurguer.contains(e.target) && !dataList.contains(e.target)) {
        $(".menu-burguer").removeClass("open");
        if ($(window).width() <= 900) {
          dataList.style.display = "none";
          dataNavigationHeader.style.display = "none";
        }
      }
    });

    $(window).resize(function () {
      if ($(window).width() > 900) {
        dataList.style.display = "flex";
        dataNavigationHeader.style.display = "block";
      } else {
        if (!$(".menu-burguer").hasClass("open")) {
          dataList.style.display = "none";
          dataNavigationHeader.style.display = "none";
        }
      }
    });
  });
}
