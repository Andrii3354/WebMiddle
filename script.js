// TODO: замінити на свій логін і репозиторій
const API = "https://my-json-server.typicode.com/<Andrii3354>/<WebMiddle>";

async function loadProducts() {
  const res = await fetch(`${API}/products`);
  const products = await res.json();

  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(prod => {
    container.innerHTML += `
      <article class="product">
        <img src="${prod.img}" alt="${prod.title}">
        <h3>${prod.title}</h3>
        <p><strong>Price:</strong> ${prod.price}$</p>
        <p><strong>Description:</strong> ${prod.description}</p>
        <a href="userProfile.html?id=${prod.sellerId}">Seller profile</a>
        <button>Buy</button>
      </article>
    `;
  });
}

loadProducts().catch(err => {
  console.error("Error loading products", err);
});
