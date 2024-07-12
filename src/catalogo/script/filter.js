let input = document.querySelector("input");
const btn = document.querySelector("button");
const cards = document.querySelectorAll(".squares");

// btn.addEventListener("click", (e) => {}
input.addEventListener("input", (e) => {
    e.preventDefault();
    
    if (input.value.trim().toLowerCase() !== "") {
        cards.forEach((card) => {
            let title = card.querySelector(".infoInitial > span");
            title = title.innerText.trim().toLowerCase();

            if (title.includes(input.value.trim().toLowerCase())) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    } else {
        cards.forEach((card) => {
            card.style.display = "block";
        });
    }
});
