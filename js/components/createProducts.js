export default function createProducts(json) {
  const container = document.querySelector(".product-container");
  const imgUrl = "http://localhost:1337";
  container.innerHTML = "";

  json.forEach(function (product) {
    container.innerHTML += `      
                                  <div class="card">            
                                        <div class="card-image">
                                            <img class="cardImg" src="${imgUrl}${product.Img.url}"></img>
                                        </div>
                                        <div class="card-text">
                                             <h4>${product.Name}</h4>
                                             <p>Short info section will come!</p>
                                        </div>
                                        
                                     
                                        <div class="card-stats">
                                            <div class="stat"> 
                                                <div class="value">420</div>
                                                <div class="type">likes</div>
                                            </div>
                                              <div class="stat button"> 
                                                   <a class="value" href="detail.html?id=${product.id}">
                                           Read more
                                        </a>
                                            </div>
                                              <div class="stat"> 
                                                <div class="value">32</div>
                                                <div class="type">reviews</div>
                                            </div>
                                        </div>
                                  </div>`;
  });
}
