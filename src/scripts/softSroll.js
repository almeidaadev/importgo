export default function softscroll() {
  const linksInternos = $('a[href^="#"]');

  linksInternos.on("click", function (event) {
    event.preventDefault();
    const href = $(this).attr("href");
    const section = $(href);
    if (section.length) {
      const topo = section.offset().top;
      $("html, body").animate({ scrollTop: topo }, 500);
    }
  });
}
