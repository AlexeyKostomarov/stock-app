import { createLoaderEl } from "./components.js";

export async function navigate(element) {
  const appEl = document.querySelector("#app");
  appEl.innerHTML = ``;

  const loaderEl = createLoaderEl();
  appEl.append(loaderEl);

  switch (element) {
    case "formPage":
      const formPage = await import("./createFormElement.js");
      formPage.default();
      loaderEl.remove();
      break;
    default:
      const homePage = await import("./createHomePage.js");
      homePage.default();
      loaderEl.remove();
  }
}
