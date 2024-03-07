// Добавляем объект в локальное хранилище
export function itemToLocalStorage(item) {
  const items = JSON.parse(localStorage.getItem("items")) || [];
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
}
