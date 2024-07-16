export default function menu() {
    const dataList = document.querySelector("[data-list-header]");
    const dataNavigationHeader = document.querySelector(
        "[data-navigation-header]"
    );

    $(function () {
        $("#menu-burguer, #menu-x").click(function () {
            if ($("#menu-burguer").is(":visible")) {
                // Menu está fechado, abrir
                $("#menu-burguer").hide();
                $("#menu-x").show();

                $(".overlay").addClass("active");

                if (dataList) {
                    dataList.style.display = "flex";
                }
                if (dataNavigationHeader) {
                    dataNavigationHeader.style.display = "block";
                }
            } else {
                // Menu está aberto, fechar
                $("#menu-burguer").show();
                $("#menu-x").hide();

                $(".overlay").removeClass("active");

                if (dataList) {
                    dataList.style.display = "none";
                }
                if (dataNavigationHeader) {
                    dataNavigationHeader.style.display = "none";
                }
            }
        });
    });
}
