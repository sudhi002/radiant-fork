/* =====================================================
   CART + CHECKOUT CONTROLLER (FINAL MERGED VERSION)
   ===================================================== */

/* ===================== CART STATE ===================== */
let cart = JSON.parse(localStorage.getItem("radiantCart")) || [];

/* ===================== DOM ===================== */
const cartItemsEl = document.getElementById("cartItems");
const cartCountEl = document.getElementById("cartCount");
const totalEl = document.getElementById("total");
const checkoutBtn = document.getElementById("checkoutBtn");

/* ===================== STORAGE ===================== */
function saveCart() {
  localStorage.setItem("radiantCart", JSON.stringify(cart));
}

/* ===================== TOTALS ===================== */
function getTotalQty() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function getTotalPrice() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

/* ===================== CART OPS ===================== */
function addToCart(id, customPrice = null) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const price = customPrice ?? product.variants[0].price;

  const item = cart.find(i => i.id === id && i.price === price);

  if (item) {
    item.qty++;
  } else {
    cart.push({
      id,
      name: product.name,
      price,
      qty: 1
    });
  }

  saveCart();
  renderCart();
  syncMenuButtons();
}
/* ===================== QTY CHANGE ===================== */
function changeQty(id, price, delta) {
  const item = cart.find(i => i.id === id && i.price === price);
  if (!item) return;

  item.qty += delta;

  if (item.qty <= 0) {
    cart = cart.filter(i => !(i.id === id && i.price === price));
  }

  saveCart();
  renderCart();
  syncMenuButtons();
}



/* ===================== RENDER CART ===================== */
function renderCart() {
  if (!cartItemsEl || !cartCountEl || !totalEl || !checkoutBtn) return;

  cartItemsEl.innerHTML = "";

  if (!cart.length) {
    cartItemsEl.innerHTML = `
      <p class="cart-empty">
        🛒 Your cart is empty<br>
        <small>Add items from the menu</small>
      </p>
    `;
    cartCountEl.textContent = "0 items";
    totalEl.textContent = "Total: ₹0";
    checkoutBtn.disabled = true;
    return;
  }

  cart.forEach(item => {
    const row = document.createElement("div");
    row.className = "cart-row";
   row.innerHTML = `
  <div>
    <strong>${item.name}</strong><br>
    <small>₹${item.price} × ${item.qty}</small>
  </div>
  <div class="qty">
    <button onclick="changeQty(${item.id}, ${item.price}, -1)">−</button>
    <span>${item.qty}</span>
    <button onclick="changeQty(${item.id}, ${item.price}, 1)">+</button>
  </div>
`;

    cartItemsEl.appendChild(row);
  });

  cartCountEl.textContent = `${getTotalQty()} items`;
  totalEl.textContent = `Total: ₹${getTotalPrice()}`;
  checkoutBtn.disabled = false;
}

/* ===================== SYNC MENU ===================== */
function syncMenuButtons() {
  document.querySelectorAll(".food-card button[data-id]").forEach(btn => {
    const id = Number(btn.dataset.id);
    const exists = cart.some(i => i.id === id);
    btn.textContent = exists ? "Added ✓" : "Add to Cart";
    btn.classList.toggle("added", exists);
    btn.disabled = exists;
  });
}

/* ===================== CHECKOUT MODAL ===================== */
function openCheckout() {
  const modal = document.getElementById("checkoutModal");
  if (!modal) return;

  modal.classList.add("active");

  const payAmountEl = document.getElementById("payAmount");
  if (payAmountEl) payAmountEl.textContent = `₹${getTotalPrice()}`;
}

function closeCheckout() {
  const modal = document.getElementById("checkoutModal");
  if (!modal) return;

  modal.classList.remove("active");

  // reset to address step when closed
  backToAddress();
}


/* ===================== CHECKOUT STEPS ===================== */
function goToPayment() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const location = JSON.parse(localStorage.getItem("radiantLocation"));

  if (!name || !phone || !address) {
    alert("Please fill all fields");
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    alert("Invalid phone number");
    return;
  }

  localStorage.setItem(
    "radiantAddress",
    JSON.stringify({ name, phone, address, location })
  );

  document.getElementById("step-address").classList.add("hidden");
  document.getElementById("step-payment").classList.remove("hidden");
}
function backToAddress() {
  const stepAddress = document.getElementById("step-address");
  const stepPayment = document.getElementById("step-payment");

  if (!stepAddress || !stepPayment) return;

  stepPayment.classList.add("hidden");
  stepAddress.classList.remove("hidden");
}


/* ===================== PAYMENT HANDLER ===================== */
function handlePayment() {
  const payment = document.querySelector('input[name="payment"]:checked')?.value;
  if (!payment) return alert("Select payment method");

  payment === "COD" ? placeOrder() : startRazorpayPayment();
}

/* ===================== COD ===================== */
function placeOrder() {
  if (!cart.length) {
    alert("Cart is empty");
    return;
  }

  const addressData = JSON.parse(localStorage.getItem("radiantAddress"));
  if (!addressData) {
    alert("Please enter delivery address");
    backToAddress();
    return;
  }

  // ✅ snapshot BEFORE clearing
  const orderItems = [...cart];

  console.log("ORDER:", {
    items: orderItems,
    total: getTotalPrice(),
    payment: "Cash on Delivery",
    address: addressData,
    date: new Date().toISOString()
  });

  // ✅ WhatsApp notification FIRST
  sendOrderToWhatsApp(orderItems, "COD");

  // ✅ then clear cart & close modal
  finishOrder();
}



/* ===================== RAZORPAY ===================== */
function startRazorpayPayment() {
  const options = {
    key: "rzp_test_BNl1H6MhAEocjj",
    amount: getTotalPrice() * 100,
    currency: "INR",
    name: "Radiant Fork",
    description: "Food Order",
    theme: { color: "#d4af37" },
   handler: function (response) {
  alert("Payment Successful!");

  const orderItems = [...cart];
  sendOrderToWhatsApp(orderItems, "ONLINE", response.razorpay_payment_id);

  finishOrder();
}

  };
  new Razorpay(options).open();
}

/* ===================== FINALIZE ===================== */
function finishOrder() {
  cart = [];
  saveCart();
  renderCart();
  syncMenuButtons();
  closeCheckout();
}


/* ===================== WHATSAPP ===================== */
function sendOrderToWhatsApp(items, paymentMode = "COD", paymentId = null) {
  const addressData = JSON.parse(localStorage.getItem("radiantAddress"));
  const location = addressData?.location;

  const DELIVERY_CHARGE = 20;
  const itemsTotal = getTotalPrice();
  const finalTotal = itemsTotal + DELIVERY_CHARGE;

  let msg = `🧾 *Radiant Fork Order*\n\n`;

  msg += `👤 Name: ${addressData.name}\n`;
  msg += `📞 Phone: ${addressData.phone}\n`;
  msg += `🏠 Address: ${addressData.address}\n`;

  if (location) {
    msg += `📍 Location: https://maps.google.com/?q=${location.lat},${location.lng}\n`;
  }

  msg += `\n🍽️ *Items Ordered*\n`;
  items.forEach(i => {
    msg += `• ${i.name} × ${i.qty} – ₹${i.price * i.qty}\n`;
  });

  msg += `\n🧾 Subtotal: ₹${itemsTotal}\n`;
  msg += `🚚 Delivery Charge: ₹${DELIVERY_CHARGE}\n`;
  msg += `💰 *Total Payable: ₹${finalTotal}*\n`;
  msg += `💳 Payment: ${paymentMode}`;

  if (paymentId) {
    msg += `\n🧾 Payment ID: ${paymentId}`;
  }

  window.open(
    `https://wa.me/919008215651?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
}






/* ===================== INIT ===================== */
renderCart();
syncMenuButtons();
/* ===================== BIND CHECKOUT BUTTON ===================== */
if (checkoutBtn) {
  checkoutBtn.addEventListener("click", openCheckout);
}
function generateOrderId() {
  const now = new Date();
  const date = now.toISOString().slice(0,10).replace(/-/g, "");
  const time = now.toTimeString().slice(0,8).replace(/:/g, "");
  return `RF-${date}-${time}`;
}
function fetchCurrentLocation() {
  if (!navigator.geolocation) {
    alert("Geolocation not supported");
    return;
  }

  const addressField = document.getElementById("address");
  addressField.value = "Fetching location...";

  navigator.geolocation.getCurrentPosition(
    position => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      localStorage.setItem(
        "radiantLocation",
        JSON.stringify({ lat, lng })
      );

      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      )
        .then(res => res.json())
        .then(data => {
          addressField.value =
            data.display_name || `Lat: ${lat}, Lng: ${lng}`;
        })
        .catch(() => {
          addressField.value = `Lat: ${lat}, Lng: ${lng}`;
        });
    },
    () => {
      alert("Location permission denied");
      addressField.value = "";
    }
  );
}
