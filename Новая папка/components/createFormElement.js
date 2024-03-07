import {
  createInputEl,
  createSubmitButton,
  createTitleEl,
} from "./components.js";
import { navigate } from "./navigate.js";
import { handleFormSubmit } from "./submitForm.js";

// Возвращаем форму
export default function createFormEl() {
  const appEl = document.querySelector("#app");
  const formEl = document.createElement("form");
  formEl.classList.add("stock__form");
  formEl.append(createTitleEl("Добавить запись", "stock__form_title"));
  formEl.append(
    createInputEl("text", "Название", "title"),
    createInputEl("text", "Полка", "shave"),
    createInputEl("number", "Номер", "number"),
    createInputEl("date", "Дата", "date")
  );
  formEl.append(createSubmitButton());
  appEl.append(formEl);

  document.querySelector(".stock__form").addEventListener("submit", (e) => {
    e.preventDefault();
    handleFormSubmit();
  });
}
