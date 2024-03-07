import { createTableHead } from "./components.js";

// Сортировка дат
function compare(a, b) {
  var dateA = new Date(a.date);
  var dateB = new Date(b.date);

  return dateB - dateA;
}

function sortListItemDate() {
  const items = JSON.parse(localStorage.getItem("items"));
  const sortItems = items.sort(compare);
  renderSortItem(sortItems);
  console.log(sortItems);
  localStorage.setItem("items", JSON.stringify(sortItems));
}

// Сортировка по названию
function sortListItemTitle(sortEl) {
  const items = JSON.parse(localStorage.getItem("items"));
  const sortItems = items.sort((a, b) => (a[sortEl] > b[sortEl] ? 1 : -1));
  renderSortItem(sortItems);
  localStorage.setItem("items", JSON.stringify(sortItems));
}

// Сортировка по номеру, полке

function sortListItemNum(sortEl) {
  const items = JSON.parse(localStorage.getItem("items"));
  const sortItems = items.sort((a, b) => {
    return a[sortEl] - b[sortEl];
  });
  renderSortItem(sortItems);
  localStorage.setItem("items", JSON.stringify(sortItems));
}

function renderSortItem(sortItems) {
  let num = 0;

  function getId() {
    return num++;
  }
  const table = document.querySelector(".table");
  table.innerHTML = ``;
  table.append(createTableHead());
  sortItems.forEach((item) => {
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
}

export function sortItems(sortItems) {
  switch (sortItems) {
    case "shave":
      sortListItemNum(sortItems);
      break;
    case "number":
      sortListItemNum(sortItems);
      break;
    case "date":
      sortListItemDate(sortItems);
      break;
    default:
      sortListItemTitle(sortItems);
  }
}
