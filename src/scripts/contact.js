export default function contact() {
  document.addEventListener("DOMContentLoaded", function (e) {
    e.preventDefault();
    
    const dropdown = document.querySelector(".dropdown");
    const dropdownContent = document.querySelector(".dropdown-content");
    const event = ["mouseenter", "click"];

    event.forEach((ev) => {
      dropdown.addEventListener(ev, function () {
        dropdownContent.style.display = "block";
      });
    });

    dropdown.addEventListener("mouseleave", function () {
      dropdownContent.style.display = "none";
    });
  });
}
