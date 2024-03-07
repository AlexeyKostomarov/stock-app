// import { createHomePage } from "./createHomePage.js";
// import { handleFormSubmit } from "./submitForm.js";

// Возвращаем заголовки
export function createTitleEl(text, classEl) {
  const title = document.createElement("h1");
  title.classList.add(classEl);
  title.textContent = text;
  return title;
}

// Возвращаем инпут
export function createInputEl(type, placeholder, id) {
  const input = document.createElement("input");
  input.classList.add("stock__form_input");
  input.placeholder = placeholder;
  input.required = true;
  input.type = type;
  input.id = id;
  return input;
}

// Возвращаем кнопку отправки формы
export function createSubmitButton() {
  const button = document.createElement("button");
  button.classList.add("stock__form_submit");
  button.type = "submit";
  button.textContent = "Отправить";

  return button;
}

// Возвращаем кнопку
export function createButtonFromHomePage(text, classEl) {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add(classEl);

  return button;
}

// Возвращаем шапку
export function createHomePageHeader() {
  const headerEl = document.createElement("header");
  headerEl.classList.add("header");
  headerEl.append(
    createTitleEl("Склад", "header__title"),
    createButtonFromHomePage("Добавить запись", "header__button_add")
  );
  return headerEl;
}

// Возвращаем шапку таблицы
export function createTableHead() {
  const tableRow = document.createElement("tr");

  tableRow.innerHTML = `
  <th class="table-title" data='title'>Название</th>
  <th class="table-shave" data='shave'>Полка</th>
  <th class="table-weight" data='number'>Вес</th>
  <th class="table-date" data='date'>Время хранения</th>
  <th></th>
  `;

  return tableRow;
}

export function createLoaderEl() {
  const loaderEl = document.createElement("div");
  loaderEl.classList.add("loader");

  for (let i = 1; i <= 3; i++) {
    const divEl = document.createElement("div");
    loaderEl.append(divEl);
  }

  return loaderEl;
}
