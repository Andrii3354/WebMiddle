const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// той самий API, що й у script.js
const API = "https://my-json-server.typicode.com/<user>/<repo>";

async function loadSeller() {
  const res = await fetch(`${API}/sellers/${id}`);
  const seller = await res.json();

  const block = document.getElementById("seller");

  block.innerHTML = `
    <img src="${seller.avatar}" alt="${seller.name}">
    <h2>${seller.name}</h2>
    <p>Rating: ${seller.rating}</p>
  `;
}

loadSeller().catch(err => {
  console.error("Error loading seller", err);
});

