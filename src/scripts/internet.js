export default function internet() {
  const statusText = document.getElementById("status");

  window.addEventListener("offline", (event) => {
    console.log("SEM INTERNET");
    statusText.innerText = "Você está sem internet";
    console.log(event);
  });
}
