import { navigate } from "./components/navigate.js";

document.addEventListener("DOMContentLoaded", function () {
  navigate();
});

// Реализуем удаление элементов

const buttonsDelete = document.querySelectorAll(".table__button_delete");
const itemsProd = JSON.parse(localStorage.getItem("items"));
buttonsDelete.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    console.log([button.id]);
    itemsProd.splice([button.id], 1);
    localStorage.setItem("items", JSON.stringify(itemsProd));

    e.target.closest("tr").classList.add("tr__hidden");
  });
});
