document.addEventListener("DOMContentLoaded", () => {

  /* ================= CONFIG ================= */
  const ITEMS_PER_PAGE = 10;
  let currentPage = 1;

  /* ================= STATE ================= */
  const state = {
    category: "All",   // All | Indian | Chinese ...
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
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (state.sort === "high") {
      filteredProducts.sort((a, b) => b.price - a.price);
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

    const hasVariants = Array.isArray(item.variants) && item.variants.length > 1;

    card.innerHTML = `
      <div class="food-info">
        <h4>${item.name}</h4>

        ${
          hasVariants
            ? `
            <select class="variant-select" data-id="${item.id}">
              <option value="">Select Size</option>
              ${item.variants
                .map(
                  v =>
                    `<option value="${v.price}">
                      ${v.label} – ₹${v.price}
                    </option>`
                )
                .join("")}
            </select>
            `
            : `<div class="price">₹${item.variants[0].price}</div>`
        }

        <button 
          data-id="${item.id}" 
          ${hasVariants ? "disabled" : ""}
          onclick="handleAddToCart(${item.id})"
        >
          Add to Cart
        </button>
      </div>
    `;

    fragment.appendChild(card);
  });

  grid.appendChild(fragment);

  initVariantListeners();
  syncMenuButtons();
}
document.dispatchEvent(new Event("menuRendered"));



  /* ================= PAGINATION ================= */
  function renderPagination() {
  pagination.innerHTML = "";

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;

    if (i === currentPage) {
      btn.classList.add("active");
    }

    btn.addEventListener("click", () => {
      if (i === currentPage) return; // prevent useless re-render

      currentPage = i;
      renderMenu();
      renderPagination(); // keep active state synced

      // Optional: smooth scroll only to menu, NOT page top
      document
        .getElementById("menuGrid")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    pagination.appendChild(btn);
  }
}

  /* ================= CATEGORY ================= */
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".filter-btn.active")?.classList.remove("active");
      btn.classList.add("active");
      state.category = btn.dataset.filter;
      applyFilters();
    });
  });

  /* ================= DIET ================= */
 /* ================= DIET ================= */
vegBtn.addEventListener("click", () => {
  state.diet = state.diet === "Veg" ? "All" : "Veg";
  setDietUI(state.diet === "Veg" ? vegBtn : null);
  applyFilters();
});

nonVegBtn.addEventListener("click", () => {
  state.diet = state.diet === "Non-Veg" ? "All" : "Non-Veg";
  setDietUI(state.diet === "Non-Veg" ? nonVegBtn : null);
  applyFilters();
});

function setDietUI(activeBtn) {
  vegBtn.classList.remove("active");
  nonVegBtn.classList.remove("active");
  if (activeBtn) activeBtn.classList.add("active");
}


  /* ================= PRICE SORT ================= */
  priceSort.addEventListener("change", e => {
    state.sort = e.target.value;
    applyFilters();
  });

  /* ================= RECOMMENDED ================= */
  function renderRecommended() {
    if (!recommendGrid) return;

    const recommended = [...products]
      .filter(p => p.rating >= 4.5)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4);

    recommendGrid.innerHTML = "";

    recommended.forEach(item => {
      const card = document.createElement("div");
      card.className = "food-card";

      card.innerHTML = `
        <img src="${item.image}" loading="lazy" alt="${item.name}">

        ${item.badge ? `<span class="badge">${item.badge}</span>` : ""}

        <div class="food-info">
          <h4>${item.name}</h4>

          <div class="meta">
            <span class="rating">⭐ ${item.rating}</span>
            <span class="price">₹${item.price}</span>
          </div>

          <button onclick="addToCart(${item.id})">
            Add to Cart
          </button>
        </div>
      `;

      recommendGrid.appendChild(card);
    });

    if (typeof syncMenuButtons === "function") {
      syncMenuButtons();
    }
  }

  /* ================= INIT ================= */
  applyFilters();
  renderRecommended();

});
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

function handleAddToCart(id) {
  const btn = document.querySelector(`button[data-id="${id}"]`);
  const price = btn.dataset.price ? Number(btn.dataset.price) : null;

  addToCart(id, price);
}
const categoryFiltersEl = document.getElementById("categoryFilters");

function renderCategoryFilters() {
  const categories = ["All", ...new Set(products.map(p => p.category))];

  categoryFiltersEl.innerHTML = categories
    .map(
      cat => `<button class="filter-btn ${cat === "All" ? "active" : ""}"
        data-filter="${cat}">${cat}</button>`
    )
    .join("");

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".filter-btn.active")?.classList.remove("active");
      btn.classList.add("active");
      state.category = btn.dataset.filter;
      applyFilters();
    });
  });
}
function renderRecommended() {
  const grid = document.getElementById("recommendGrid");
  if (!grid) {
    console.warn("❌ recommendGrid not found");
    return;
  }

  if (!Array.isArray(products) || products.length === 0) {
    console.warn("❌ products empty");
    return;
  }

  grid.innerHTML = "";

  // Always show something – safe logic
  const recommended = products.slice(0, 4);

  recommended.forEach(item => {
    const price = item.variants?.[0]?.price ?? 0;

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

    grid.appendChild(card);
  });

  if (typeof syncMenuButtons === "function") {
    syncMenuButtons();
  }

  console.log("✅ Recommended rendered:", recommended.length);
}
window.addEventListener("load", () => {
  renderRecommended();
});
