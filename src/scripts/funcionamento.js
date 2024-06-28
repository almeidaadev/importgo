export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-week]");
  const daysWeek = funcionamento.dataset.week.split(",").map(Number);
  const timeWeek = funcionamento.dataset.time.split(",").map(Number);

  const nowDate = new Date();
  const dayWeek = nowDate.getDay();
  const nowHours = nowDate.getHours();

  const test = [1, 2, 3, 4, 5].indexOf(dayWeek);
  const weekOpen = daysWeek.indexOf(dayWeek) !== -1;

  const open = (nowHours >= timeWeek[0] && nowHours < timeWeek[1] )
  

  if (weekOpen && open) {
    funcionamento.classList.add("open");
  }
}