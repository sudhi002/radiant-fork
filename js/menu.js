/* ================= MENU.JS ================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ================= CONFIG ================= */
  const ITEMS_PER_PAGE = 10;

  /* ================= STATE ================= */
  let currentPage = 1;

  const state = {
    category: "All",
    diet: "All",       // All | Veg | Non-Veg
    sort: ""           // "" | low | high
  };

  /* ================= DOM ================= */
  const grid = document.getElementById("menuGrid");
  const pagination = document.getElementById("pagination");
  const recommendGrid = document.getElementById("recommendGrid");

  const filterButtons = document.querySelectorAll(".filter-btn");
  const vegBtn = document.getElementById("vegToggle");
  const nonVegBtn = document.getElementById("nonVegToggle");
  const priceSort = document.getElementById("priceSort");

  let filteredProducts = [...products];

  /* ================= FILTER ENGINE ================= */
  function applyFilters() {
    filteredProducts = products.filter(p => {
      const categoryOK =
        state.category === "All" || p.category === state.category;

      const dietOK =
        state.diet === "All" || p.subCategory === state.diet;

      return categoryOK && dietOK;
    });

    if (state.sort === "low") {
      filteredProducts.sort((a, b) => a.variants[0].price - b.variants[0].price);
    }

    if (state.sort === "high") {
      filteredProducts.sort((a, b) => b.variants[0].price - a.variants[0].price);
    }

    currentPage = 1;
    renderMenu();
    renderPagination();
  }

  /* ================= RENDER MENU ================= */
  function renderMenu() {
    grid.innerHTML = "";

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageItems = filteredProducts.slice(start, start + ITEMS_PER_PAGE);

    if (!pageItems.length) {
      grid.innerHTML = "<p>No items found</p>";
      return;
    }

    const fragment = document.createDocumentFragment();

    pageItems.forEach(item => {
      const card = document.createElement("div");
      card.className = "food-card";

      const hasVariants = item.variants && item.variants.length > 1;

      card.innerHTML = `
        <div class="food-info">
          <h4>${item.name}</h4>

          ${
            hasVariants
              ? `
              <select class="variant-select">
                <option value="">Select Size</option>
                ${item.variants
                  .map(v => `<option value="${v.price}">${v.label} – ₹${v.price}</option>`)
                  .join("")}
              </select>
              `
              : `<div class="price">₹${item.variants[0].price}</div>`
          }

          <button ${hasVariants ? "disabled" : ""}
            data-id="${item.id}"
            data-price="${item.variants[0].price}">
            Add to Cart
          </button>
        </div>
      `;

      fragment.appendChild(card);
    });

    grid.appendChild(fragment);

    initVariantListeners();
    initAddToCart();
    syncMenuButtons?.();
  }

  /* ================= PAGINATION ================= */
  function renderPagination() {
    pagination.innerHTML = "";

    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    if (totalPages <= 1) return;

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      if (i === currentPage) btn.classList.add("active");

      btn.addEventListener("click", () => {
        currentPage = i;
        renderMenu();
        renderPagination();
        grid.scrollIntoView({ behavior: "smooth", block: "start" });
      });

      pagination.appendChild(btn);
    }
  }

  /* ================= VARIANTS ================= */
  function initVariantListeners() {
    document.querySelectorAll(".variant-select").forEach(select => {
      select.addEventListener("change", e => {
        const card = e.target.closest(".food-card");
        const btn = card.querySelector("button");

        if (e.target.value) {
          btn.disabled = false;
          btn.dataset.price = e.target.value;
        } else {
          btn.disabled = true;
        }
      });
    });
  }

  /* ================= ADD TO CART ================= */
  function initAddToCart() {
    document.querySelectorAll(".food-card button").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = Number(btn.dataset.id);
        const price = Number(btn.dataset.price);
        addToCart(id, price);
      });
    });
  }

  /* ================= CATEGORY FILTER ================= */
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".filter-btn.active")?.classList.remove("active");
      btn.classList.add("active");
      state.category = btn.dataset.filter;
      applyFilters();
    });
  });

  /* ================= DIET FILTER ================= */
  vegBtn.addEventListener("click", () => {
    state.diet = state.diet === "Veg" ? "All" : "Veg";
    updateDietUI();
    applyFilters();
  });

  nonVegBtn.addEventListener("click", () => {
    state.diet = state.diet === "Non-Veg" ? "All" : "Non-Veg";
    updateDietUI();
    applyFilters();
  });

  function updateDietUI() {
    vegBtn.classList.toggle("active", state.diet === "Veg");
    nonVegBtn.classList.toggle("active", state.diet === "Non-Veg");
  }

  /* ================= PRICE SORT ================= */
  priceSort.addEventListener("change", e => {
    state.sort = e.target.value;
    applyFilters();
  });

  /* ================= RECOMMENDED ================= */
 function renderRecommended() {
  if (!recommendGrid) return;

  recommendGrid.innerHTML = "";

  // Shuffle products randomly
  const shuffled = [...products].sort(() => 0.5 - Math.random());

  // Pick first 4 after shuffle
  const recommended = shuffled.slice(0, 4);

  recommended.forEach(item => {
    const price = item.variants[0].price;

    const card = document.createElement("div");
    card.className = "food-card";

    card.innerHTML = `
      <div class="food-info">
        <h4>${item.name}</h4>
        <div class="price">₹${price}</div>
        <button onclick="addToCart(${item.id}, ${price})">
          Add to Cart
        </button>
      </div>
    `;

    recommendGrid.appendChild(card);
  });

  syncMenuButtons?.();
}


  /* ================= INIT ================= */
  applyFilters();
  renderRecommended();

});


