import { sortItems } from "./sortItems.js";

export function renderTable() {
  // Функция генерирующая id для кнопок
  let num = 0;

  function getId() {
    return num++;
  }

  // Отрисовка элементов на странице
  const items = JSON.parse(localStorage.getItem("items")) || [];
  const table = document.querySelector(".table");
  items.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${item.title}</td>
    <td>${item.shave}</td>
    <td>${item.number}</td>
    <td>${item.date}</td>
    <td><button class="table__button_delete" id=${getId()}>Удалить</button></td>
    `;

    table.append(tr);
  });

  table.addEventListener("click", (e) => {
    if (e.target.className == "table__button_delete") {
      const itemsProd = JSON.parse(localStorage.getItem("items"));
      const itemsProdFilter = itemsProd.filter((el, index) => {
        return index != e.target.id;
      });
      console.log(itemsProdFilter);

      localStorage.setItem("items", JSON.stringify(itemsProdFilter));

      e.target.closest("tr").classList.add("tr__hidden");
    }
  });

  table.addEventListener("click", (e) => {
    console.log(1);
    sortItems(e.target.data);
  });
}
