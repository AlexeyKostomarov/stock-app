import { createHomePageHeader, createTableHead } from "./components.js";
import { renderTable } from "./renderTable.js";
import { navigate } from "./navigate.js";

// Возвращаем домашнюю страницу
export default function createHomePage() {
  const appEl = document.querySelector("#app");

  const table = document.createElement("table");
  table.classList.add("table");
  document.querySelector("#app").append(createHomePageHeader(), table);
  table.append(createTableHead());

  renderTable();

  document
    .querySelector(".header__button_add")
    .addEventListener("click", () => {
      appEl.innerHTML = ``;
      navigate("formPage");
    });
}
