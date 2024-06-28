export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-week]");
  const daysWeek = funcionamento.dataset.week.split(",").map(Number);
  const timeWeek = funcionamento.dataset.time.split(",").map(Number);

  const nowDate = new Date();
  const dayWeek = nowDate.getDay();
  const nowHours = nowDate.getHours();
}
