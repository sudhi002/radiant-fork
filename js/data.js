const products = [

/* =========================
   STARTERS – VEG
========================= */
{ id: 101, name: "Gobi Manchurian", category: "Starters", subCategory: "Veg", variants: [{ label: "Full", price: 75 }] },
{ id: 102, name: "French Fries (250 gm)", category: "Starters", subCategory: "Veg", variants: [{ label: "Full", price: 69 }] },
{ id: 103, name: "Veg Nuggets (6 pcs)", category: "Starters", subCategory: "Veg", variants: [{ label: "Full", price: 59 }] },
{ id: 104, name: "Potato Smiles (6 pcs)", category: "Starters", subCategory: "Veg", variants: [{ label: "Full", price: 49 }] },
{ id: 105, name: "Paneer Chilli (Dry)", category: "Starters", subCategory: "Veg", variants: [{ label: "Full", price: 89 }] },
{ id: 106, name: "Paneer Chilli (Gravy)", category: "Starters", subCategory: "Veg", variants: [{ label: "Full", price: 89 }] },
{ id: 107, name: "Gobi Chilli (Dry)", category: "Starters", subCategory: "Veg", variants: [{ label: "Full", price: 59 }] },
{ id: 108, name: "Gobi Chilli (Gravy)", category: "Starters", subCategory: "Veg", variants: [{ label: "Full", price: 59 }] },

/* =========================
   NOODLES
========================= */
{ id: 201, name: "Veg Hakka Noodles", category: "Noodles", subCategory: "Veg", variants: [{ label: "Full", price: 110 }] },
{ id: 202, name: "Chicken Hakka Noodles", category: "Noodles", subCategory: "Non-Veg", variants: [{ label: "Full", price: 129 }] },
{ id: 203, name: "Egg Hakka Noodles", category: "Noodles", subCategory: "Non-Veg", variants: [{ label: "Full", price: 125 }] },
{ id: 204, name: "Paneer Hakka Noodles", category: "Noodles", subCategory: "Veg", variants: [{ label: "Full", price: 139 }] },

/* =========================
   SOUPS – VEG
========================= */
{ id: 301, name: "Veg Manchow Soup", category: "Soups", subCategory: "Veg", variants: [{ label: "Full", price: 50 }] },
{ id: 302, name: "Lemon Coriander Soup", category: "Soups", subCategory: "Veg", variants: [{ label: "Full", price: 45 }] },
{ id: 303, name: "Veg Clear Soup", category: "Soups", subCategory: "Veg", variants: [{ label: "Full", price: 40 }] },

/* =========================
   SANDWICH – VEG
========================= */
{ id: 401, name: "Veg Grill Sandwich", category: "Sandwich", subCategory: "Veg", variants: [{ label: "Full", price: 69 }] },
{ id: 402, name: "Veg Cheese Grill Sandwich", category: "Sandwich", subCategory: "Veg", variants: [{ label: "Full", price: 89 }] },
{ id: 403, name: "Paneer Sandwich", category: "Sandwich", subCategory: "Veg", variants: [{ label: "Full", price: 110 }] },
{ id: 404, name: "Paneer Cheese Sandwich", category: "Sandwich", subCategory: "Veg", variants: [{ label: "Full", price: 130 }] },

/* =========================
   VEG ROLLS
========================= */
{ id: 501, name: "Veg Roll", category: "Rolls", subCategory: "Veg", variants: [{ label: "Full", price: 69 }] },
{ id: 502, name: "Veg Cheese Roll", category: "Rolls", subCategory: "Veg", variants: [{ label: "Full", price: 79 }] },
{ id: 503, name: "Paneer Roll", category: "Rolls", subCategory: "Veg", variants: [{ label: "Full", price: 99 }] },
{ id: 504, name: "Paneer Cheese Roll", category: "Rolls", subCategory: "Veg", variants: [{ label: "Full", price: 119 }] },

/* =========================
   BURGER – VEG
========================= */
{ id: 601, name: "Paneer Burger", category: "Burger", subCategory: "Veg", variants: [{ label: "Full", price: 115 }] },
{ id: 602, name: "Veg Crispy Cheese Burger", category: "Burger", subCategory: "Veg", variants: [{ label: "Full", price: 89 }] },
{ id: 603, name: "Veg Paneer Crispy Cheese Burger", category: "Burger", subCategory: "Veg", variants: [{ label: "Full", price: 119 }] },
{ id: 604, name: "Veg Burger", category: "Burger", subCategory: "Veg", variants: [{ label: "Full", price: 79 }] },

/* =========================
   MOMOS – VEG (6 pcs)
========================= */
{ id: 901, name: "Veg Steam Momos", category: "Momos", subCategory: "Veg", variants: [{ label: "6 pcs", price: 49 }] },
{ id: 902, name: "Veg Steam Schezwan Momos", category: "Momos", subCategory: "Veg", variants: [{ label: "6 pcs", price: 60 }] },
{ id: 903, name: "Veg Fried Schezwan Momos", category: "Momos", subCategory: "Veg", variants: [{ label: "6 pcs", price: 65 }] },
{ id: 904, name: "Veg Peri Peri Steam Momos", category: "Momos", subCategory: "Veg", variants: [{ label: "6 pcs", price: 55 }] },

/* =========================
   PIZZAS – VEG
========================= */
{
  id: 1001, name: "Corn Capsicum Pizza", category: "Pizza", subCategory: "Veg",
  variants: [
    { label: "Regular", price: 99 },
    { label: "Medium", price: 149 },
    { label: "Large", price: 199 }
  ]
},
{
  id: 1002, name: "Paneer Loaded Pizza", category: "Pizza", subCategory: "Veg",
  variants: [
    { label: "Regular", price: 159 },
    { label: "Medium", price: 239 },
    { label: "Large", price: 329 }
  ]
},
{
  id: 1003, name: "Cheese Pizza", category: "Pizza", subCategory: "Veg",
  variants: [
    { label: "Regular", price: 89 },
    { label: "Medium", price: 129 },
    { label: "Large", price: 189 }
  ]
},
{
  id: 1004, name: "Paneer Tikka Pizza", category: "Pizza", subCategory: "Veg",
  variants: [
    { label: "Regular", price: 139 },
    { label: "Medium", price: 199 },
    { label: "Large", price: 289 }
  ]
},

/* =========================
   HOT BEVERAGES
========================= */
{
  id: 1501, name: "Tea", category: "Hot Beverages", subCategory: "Hot",
  variants: [
    { label: "Small", price: 15 },
    { label: "Large", price: 20 }
  ]
},
{
  id: 1502, name: "Masala Tea", category: "Hot Beverages", subCategory: "Hot",
  variants: [
    { label: "Small", price: 30 },
    { label: "Large", price: 35 }
  ]
},

/* =========================
   ICE CREAM
========================= */
{ id: 1601, name: "Raj Bhog Ice Cream", category: "Ice Cream", subCategory: "Dessert", variants: [{ label: "Scoop", price: 30 }] },
{ id: 1602, name: "Belgium Chocolate Ice Cream", category: "Ice Cream", subCategory: "Dessert", variants: [{ label: "Scoop", price: 30 }] },

/* =========================
   RADIANT FORK SPECIAL ICE CREAM
========================= */
{ id: 1701, name: "Gadbad Ice Cream", category: "Special Ice Cream", subCategory: "Dessert", variants: [{ label: "Full", price: 99 }] }

];

window.products = products;
