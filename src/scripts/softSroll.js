const { log } = console;

export default function softscroll() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  linksInternos.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(`a[href="${href}"]`);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}
