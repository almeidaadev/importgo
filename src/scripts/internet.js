export default function internet() {
    const statusText = document.getElementById("status");

    window.addEventListener("offline", (event) => {
        const div = document.createElement("div");
        const divMenssage = document.createElement("divMenssage");
        statusText.innerText = "Você está sem internet";
        divMenssage.innerHTML = `
          <span>Você esta sem internet</span> 
          <br /> 
          <span>${statusText}</span>
        `;

        div.appendChild(h1);
    });
}
