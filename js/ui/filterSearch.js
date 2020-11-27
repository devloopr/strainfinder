import { renderData } from "./renderData.js";

export function filterSearch(data) {
  const search = document.querySelector(".search");
  const searchError = document.querySelector(".error-filter");

  search.onkeyup = function (event) {
    console.log(event);

    const searchValue = event.target.value.trim().toLowerCase();

    const filteredData = data.filter(function (product) {
      if (product.name.toLowerCase().indexOf(searchValue) > -1) {
        return true;
      }
    });

    renderData(filteredData);
  };
}
