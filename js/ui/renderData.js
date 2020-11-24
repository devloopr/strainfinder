export function renderData(dataToRender) {
  const productContainer = document.querySelector(".product-container");
  productContainer.innerHTML = "";

  dataToRender.forEach(function (products) {
    productContainer.innerHTML += `
                   <div class="card">
                      <div class="img-container">
                        <img src="${products.img}" width="200px"/>
                      </div>
                         <h4>${products.name}</h4>
                        <h5>${products.occupation}</h5>
                      </div>
    `;
  });
}
