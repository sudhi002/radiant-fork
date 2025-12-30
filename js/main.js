/* =====================================================
   MAIN.JS — UI HELPERS ONLY (REFINED)
   ===================================================== */

/* ================= DOM READY ================= */
document.addEventListener("DOMContentLoaded", () => {
  initCartToggle();
  initGlobalModalHandlers();
});

/* ================= MOBILE CART TOGGLE ================= */
function initCartToggle() {
  const toggleBtn = document.querySelector(".cart-toggle");
  const cartEl = document.getElementById("cart");

  if (!toggleBtn || !cartEl) return;

  toggleBtn.addEventListener("click", () => {
    if (window.innerWidth <= 900) {
      cartEl.classList.toggle("active");
    }
  });

  // Ensure cart closes on desktop resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      cartEl.classList.remove("active");
    }
  });
}

/* ================= GLOBAL MODAL HANDLERS ================= */
function initGlobalModalHandlers() {
  const modal = document.getElementById("checkoutModal");
  if (!modal) return;

  // ESC key closes checkout
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal.style.display === "flex") {
      closeCheckout();
    }
  });

  // Click outside modal closes checkout
  modal.addEventListener("click", e => {
    if (e.target === modal) {
      closeCheckout();
    }
  });
}

/* ================= AFTER MENU RENDER ================= */
/* Keeps menu buttons synced with cart state */
document.addEventListener("menuRendered", () => {
  if (typeof syncMenuButtons === "function") {
    syncMenuButtons();
  }
});
