// ================= GSAP SETUP =================
gsap.registerPlugin(ScrollTrigger);

/* ---------------- NAVBAR ---------------- */
if (document.querySelector(".logo")) {
  gsap.from(".logo", {
    y: -20,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });
}

/* ---------------- FILTER BAR ---------------- */
if (document.querySelector(".filter-bar")) {
  gsap.from(".filter-bar button", {
    y: -10,
    opacity: 0,
    stagger: 0.08,
    duration: 0.6,
    ease: "power2.out"
  });
}

/* ---------------- SEARCH & SORT ---------------- */
gsap.from(".search-box, .price-sort", {
  y: -10,
  opacity: 0,
  delay: 0.2,
  duration: 0.6,
  ease: "power2.out"
});

/* ---------------- MENU CARDS (DYNAMIC) ---------------- */
function animateMenuCards() {
  gsap.from(".food-card", {
    scrollTrigger: {
      trigger: ".menu-grid",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 30,
    opacity: 0,
    stagger: 0.08,
    duration: 0.6,
    ease: "power2.out"
  });
}

/* Call once on load */
animateMenuCards();

/* Re-run animation AFTER menu re-renders */
document.addEventListener("menuRendered", () => {
  ScrollTrigger.refresh();
  animateMenuCards();
});

/* ---------------- CART ---------------- */
if (document.querySelector(".cart")) {
  gsap.from(".cart", {
    scrollTrigger: {
      trigger: ".cart",
      start: "top 90%"
    },
    x: 40,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  });
}

/* ---------------- RECOMMENDED ---------------- */
if (document.querySelector("#recommendGrid")) {
  gsap.from("#recommendGrid .food-card", {
    scrollTrigger: {
      trigger: "#recommendGrid",
      start: "top 85%"
    },
    y: 30,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6,
    ease: "power2.out"
  });
}

/* ---------------- MODAL ---------------- */
function animateModalOpen() {
  gsap.from(".modal-box", {
    scale: 0.9,
    opacity: 0,
    duration: 0.3,
    ease: "power2.out"
  });
}
