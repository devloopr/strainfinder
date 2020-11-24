export function renderData(dataToRender) {
  const productContainer = document.querySelector(".product-container");
  productContainer.innerHTML = "";

  dataToRender.forEach(function (products) {
    productContainer.innerHTML += `
                   <div class="card">
                      <div class="img-container">
                        <img src="${products.img}" width="200px"/>
                      </div>
                         <h4 class="card-text">${products.name}</h4>
                        <p class="card-text">${products.occupation}</p>
                      </div>
    `;
  });
}
