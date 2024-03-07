import { itemToLocalStorage } from "./itemsToLocalStorage.js";
import { navigate } from "./navigate.js";

// Функция отправки формы
export function handleFormSubmit() {
  const title = document.querySelector("#title").value;
  const shave = document.querySelector("#shave").value;
  const number = document.querySelector("#number").value;
  const date = document.querySelector("#date").value;

  const item = {
    title,
    shave,
    number,
    date,
  };

  itemToLocalStorage(item);

  document.querySelector("#app").innerHTML = ``;
  navigate();
}
