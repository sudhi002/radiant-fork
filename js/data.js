const products = [

/* =========================
   MOMOS – VEG
========================= */
{ id: 201, name: "Veg Steam Momos", category: "Mo-Mo", subCategory: "Veg", variants: [{ label: "Full", price: 49 }] },
{ id: 202, name: "Veg Steam Schezwan Momos", category: "Mo-Mo", subCategory: "Veg", variants: [{ label: "Full", price: 60 }] },
{ id: 203, name: "Veg Fried Schezwan Momos", category: "Mo-Mo", subCategory: "Veg", variants: [{ label: "Full", price: 65 }] },
{ id: 204, name: "Veg Peri Peri Steam Momos", category: "Mo-Mo", subCategory: "Veg", variants: [{ label: "Full", price: 55 }] },

/* =========================
   MOMOS – NON VEG
========================= */
{ id: 205, name: "Chicken Steam Momos", category: "Mo-Mo", subCategory: "Non-Veg", variants: [{ label: "Full", price: 69 }] },
{ id: 206, name: "Chicken Steam Schezwan Momos", category: "Mo-Mo", subCategory: "Non-Veg", variants: [{ label: "Full", price: 75 }] },
{ id: 207, name: "Chicken Fried Momos", category: "Mo-Mo", subCategory: "Non-Veg", variants: [{ label: "Full", price: 75 }] },
{ id: 208, name: "Chicken Fried Schezwan Momos", category: "Mo-Mo", subCategory: "Non-Veg", variants: [{ label: "Full", price: 79 }] },
{ id: 209, name: "Chicken Peri Peri Steam Momos", category: "Mo-Mo", subCategory: "Non-Veg", variants: [{ label: "Full", price: 75 }] },

/* =========================
   PIZZAS – VEG
========================= */
{ id: 301, name: "Corn Capsicum Pizza", category: "Pizza", subCategory: "Veg", variants: [
  { label: "Regular", price: 99 },
  { label: "Medium", price: 149 },
  { label: "Large", price: 199 }
]},
{ id: 302, name: "Paneer Loaded Pizza", category: "Pizza", subCategory: "Veg", variants: [
  { label: "Regular", price: 159 },
  { label: "Medium", price: 239 },
  { label: "Large", price: 329 }
]},
{ id: 303, name: "Cheese Pizza", category: "Pizza", subCategory: "Veg", variants: [
  { label: "Regular", price: 89 },
  { label: "Medium", price: 129 },
  { label: "Large", price: 189 }
]},
{ id: 304, name: "Paneer Tikka Pizza", category: "Pizza", subCategory: "Veg", variants: [
  { label: "Regular", price: 139 },
  { label: "Medium", price: 199 },
  { label: "Large", price: 289 }
]},

{ id: 306, name: "Peri Peri Paneer Tikka Pizza", category: "Pizza", subCategory: "Veg", variants: [
  { label: "Regular", price: 139 },
  { label: "Medium", price: 199 },
  { label: "Large", price: 289 }
]},
{ id: 307, name: "BBQ Paneer Pizza", category: "Pizza", subCategory: "Veg", variants: [
  { label: "Regular", price: 165 },
  { label: "Medium", price: 239 },
  { label: "Large", price: 329 }
]},

/* =========================
   PIZZAS – NON VEG
========================= */
{ id: 308, name: "Peri Peri Chicken Tikka Pizza", category: "Pizza", subCategory: "Non-Veg", variants: [
  { label: "Regular", price: 149 },
  { label: "Medium", price: 219 },
  { label: "Large", price: 299 }
]},
{ id: 309, name: "BBQ Chicken Pizza", category: "Pizza", subCategory: "Non-Veg", variants: [
  { label: "Regular", price: 175 },
  { label: "Medium", price: 249 },
  { label: "Large", price: 339 }
]},
{ id: 310, name: "Chicken Loaded Pizza", category: "Pizza", subCategory: "Non-Veg", variants: [
  { label: "Regular", price: 169 },
  { label: "Medium", price: 249 },
  { label: "Large", price: 339 }
]},
{ id: 311, name: "Crispy Chicken Pizza", category: "Pizza", subCategory: "Non-Veg", variants: [
  { label: "Regular", price: 149 },
  { label: "Medium", price: 219 },
  { label: "Large", price: 299 }
]},
/* =========================
   PIZZA – NON VEG
========================= */
{
  id: 812,
  name: "Chicken Tikka Pizza",
  category: "Pizza",
  subCategory: "Non-Veg",
  variants: [
    { label: "Regular", price: 149 },
    { label: "Medium", price: 219 },
    { label: "Large", price: 299 }
  ]
},


/* =========================
   FRIED RICE – VEG
========================= */
{ id: 401, name: "Veg Fried Rice", category: "Fried Rice", subCategory: "Veg", variants: [{ label: "Full", price: 79 }] },
{ id: 402, name: "Veg Schezwan Fried Rice", category: "Fried Rice", subCategory: "Veg", variants: [{ label: "Full", price: 89 }] },
{ id: 403, name: "Gobi Fried Rice", category: "Fried Rice", subCategory: "Veg", variants: [{ label: "Full", price: 89 }] },
{ id: 404, name: "Gobi Schezwan Fried Rice", category: "Fried Rice", subCategory: "Veg", variants: [{ label: "Full", price: 99 }] },
{ id: 405, name: "Paneer Fried Rice", category: "Fried Rice", subCategory: "Veg", variants: [{ label: "Full", price: 99 }] },
{ id: 406, name: "Paneer Schezwan Fried Rice", category: "Fried Rice", subCategory: "Veg", variants: [{ label: "Full", price: 129 }] },

/* =========================
   FRIED RICE – NON VEG
========================= */
{ id: 407, name: "Chicken Fried Rice", category: "Fried Rice", subCategory: "Non-Veg", variants: [{ label: "Full", price: 115 }] },
{ id: 408, name: "Egg Fried Rice", category: "Fried Rice", subCategory: "Non-Veg", variants: [{ label: "Full", price: 95 }] },
{ id: 409, name: "Egg Chicken Fried Rice", category: "Fried Rice", subCategory: "Non-Veg", variants: [{ label: "Full", price: 115 }] },
{ id: 410, name: "Egg Schezwan Fried Rice", category: "Fried Rice", subCategory: "Non-Veg", variants: [{ label: "Full", price: 115 }] },


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
   STARTERS – NON VEG
========================= */
{ id: 509, name: "Chilli Chicken Dry", category: "Starter", subCategory: "Non-Veg", variants: [{ label: "Full", price: 79 }] },
{ id: 510, name: "Chilli Chicken Gravy", category: "Starter", subCategory: "Non-Veg", variants: [{ label: "Full", price: 79 }] },
{ id: 511, name: "Dragon Chicken", category: "Starter", subCategory: "Non-Veg", variants: [{ label: "Full", price: 119 }] },
{ id: 512, name: "Chicken Lollipop", category: "Starter", subCategory: "Non-Veg", variants: [{ label: "Full", price: 155 }] },
{ id: 513, name: "Green Chilli Chicken", category: "Starter", subCategory: "Non-Veg", variants: [{ label: "Full", price: 79 }] },
{ id: 514, name: "Ginger Chicken", category: "Starter", subCategory: "Non-Veg", variants: [{ label: "Full", price: 125 }] },
{ id: 515, name: "Lemon Chicken", category: "Starter", subCategory: "Non-Veg", variants: [{ label: "Full", price: 99 }] },
{ id: 516, name: "Fried Chicken Lollipop", category: "Starter", subCategory: "Non-Veg", variants: [{ label: "Full", price: 155 }] },
{ id: 517, name: "Chicken Strips", category: "Starter", subCategory: "Non-Veg", variants: [{ label: "Full", price: 99 }] },
{ id: 518, name: "Chicken Nuggets", category: "Starter", subCategory: "Non-Veg", variants: [{ label: "6 Pieces", price: 79 }] },
{ id: 519, name: "Chicken Popcorn", category: "Starter", subCategory: "Non-Veg", variants: [{ label: "12 Pieces", price: 79 }] },
/* =========================
   CHICKEN BUCKETS
========================= */
{ 
  id: 801, 
  name: "Chicken Bucket", 
  category: "Chicken Bucket", 
  subCategory: "Non-Veg", 
  variants: [
    { label: "Half", price: 289 },
    { label: "Full", price: 529 }
  ] 
},


/* =========================
   NOODLES
========================= */
{ id: 601, name: "Veg Hakka Noodles", category: "Noodles", subCategory: "Veg", variants: [{ label: "Full", price: 110 }] },
{ id: 602, name: "Chicken Hakka Noodles", category: "Noodles", subCategory: "Non-Veg", variants: [{ label: "Full", price: 129 }] },
{ id: 603, name: "Egg Hakka Noodles", category: "Noodles", subCategory: "Non-Veg", variants: [{ label: "Full", price: 125 }] },
{ id: 604, name: "Paneer Hakka Noodles", category: "Noodles", subCategory: "Veg", variants: [{ label: "Full", price: 139 }] },

/* =========================
   SOUPS – VEG
========================= */
{ id: 701, name: "Veg Manchow Soup", category: "Soup", subCategory: "Veg", variants: [{ label: "Full", price: 50 }] },
{ id: 702, name: "Lemon Coriander Soup", category: "Soup", subCategory: "Veg", variants: [{ label: "Full", price: 45 }] },
{ id: 703, name: "Veg Clear Soup", category: "Soup", subCategory: "Veg", variants: [{ label: "Full", price: 40 }] },

/* =========================
   SOUPS – NON VEG
========================= */
{ id: 704, name: "Chicken Manchow Soup", category: "Soup", subCategory: "Non-Veg", variants: [{ label: "Full", price: 55 }] },
{ id: 705, name: "Chicken Lemon Coriander Soup", category: "Soup", subCategory: "Non-Veg", variants: [{ label: "Full", price: 50 }] },
{ id: 706, name: "Chicken Clear Soup", category: "Soup", subCategory: "Non-Veg", variants: [{ label: "Full", price: 45 }] },
/* =========================
   SANDWICH – VEG
========================= */
{ id: 901, name: "Veg Grill Sandwich", category: "Sandwich", subCategory: "Veg", variants: [{ label: "Full", price: 69 }] },
{ id: 902, name: "Veg Cheese Grill Sandwich", category: "Sandwich", subCategory: "Veg", variants: [{ label: "Full", price: 89 }] },
{ id: 903, name: "Paneer Sandwich", category: "Sandwich", subCategory: "Veg", variants: [{ label: "Full", price: 110 }] },
{ id: 904, name: "Paneer Cheese Sandwich", category: "Sandwich", subCategory: "Veg", variants: [{ label: "Full", price: 130 }] },

/* =========================
   SANDWICH – NON VEG
========================= */
{ id: 905, name: "Chicken Sandwich", category: "Sandwich", subCategory: "Non-Veg", variants: [{ label: "Full", price: 79 }] },
{ id: 906, name: "Chicken Cheese Sandwich", category: "Sandwich", subCategory: "Non-Veg", variants: [{ label: "Full", price: 89 }] },
{ id: 907, name: "Chicken Schezwan Sandwich", category: "Sandwich", subCategory: "Non-Veg", variants: [{ label: "Full", price: 89 }] },
{ id: 908, name: "Peri Peri Chicken Sandwich", category: "Sandwich", subCategory: "Non-Veg", variants: [{ label: "Full", price: 89 }] },
{ id: 909, name: "Peri Peri Chicken Cheese Sandwich", category: "Sandwich", subCategory: "Non-Veg", variants: [{ label: "Full", price: 89 }] },

/* =========================
   ROLLS – VEG
========================= */
{ id: 1001, name: "Veg Roll", category: "Roll", subCategory: "Veg", variants: [{ label: "Full", price: 69 }] },
{ id: 1002, name: "Veg Cheese Roll", category: "Roll", subCategory: "Veg", variants: [{ label: "Full", price: 79 }] },
{ id: 1003, name: "Paneer Roll", category: "Roll", subCategory: "Veg", variants: [{ label: "Full", price: 99 }] },
{ id: 1004, name: "Paneer Cheese Roll", category: "Roll", subCategory: "Veg", variants: [{ label: "Full", price: 119 }] },

/* =========================
   ROLLS – NON VEG
========================= */
{ id: 1005, name: "Chicken Roll", category: "Roll", subCategory: "Non-Veg", variants: [{ label: "Full", price: 100 }] },
{ id: 1006, name: "Chicken Cheese Roll", category: "Roll", subCategory: "Non-Veg", variants: [{ label: "Full", price: 119 }] },
{ id: 1007, name: "Crispy Chicken Roll", category: "Roll", subCategory: "Non-Veg", variants: [{ label: "Full", price: 105 }] },
{ id: 1008, name: "Crispy Egg Chicken Roll", category: "Roll", subCategory: "Non-Veg", variants: [{ label: "Full", price: 115 }] },
{ id: 1009, name: "Egg Chicken Roll", category: "Roll", subCategory: "Non-Veg", variants: [{ label: "Full", price: 110 }] },

/* =========================
   BURGER – VEG
========================= */
{ id: 1101, name: "Paneer Burger", category: "Burger", subCategory: "Veg", variants: [{ label: "Full", price: 115 }] },
{ id: 1102, name: "Veg Crispy Cheese Burger", category: "Burger", subCategory: "Veg", variants: [{ label: "Full", price: 89 }] },
{ id: 1103, name: "Veg Paneer Crispy Cheese Burger", category: "Burger", subCategory: "Veg", variants: [{ label: "Full", price: 119 }] },
{ id: 1104, name: "Veg Burger", category: "Burger", subCategory: "Veg", variants: [{ label: "Full", price: 79 }] },

/* =========================
   BURGER – NON VEG
========================= */
{ id: 1105, name: "Chicken Burger", category: "Burger", subCategory: "Non-Veg", variants: [{ label: "Full", price: 79 }] },
{ id: 1106, name: "Chicken Cheese Burger", category: "Burger", subCategory: "Non-Veg", variants: [{ label: "Full", price: 99 }] },
{ id: 1107, name: "Chicken Peri Peri Burger", category: "Burger", subCategory: "Non-Veg", variants: [{ label: "Full", price: 89 }] },
{ id: 1108, name: "Chicken Peri Peri Cheese Burger", category: "Burger", subCategory: "Non-Veg", variants: [{ label: "Full", price: 110 }] },
{ id: 1109, name: "Crispy Chicken Burger", category: "Burger", subCategory: "Non-Veg", variants: [{ label: "Full", price: 115 }] },
{ id: 1110, name: "Crispy Chicken Cheese Burger", category: "Burger", subCategory: "Non-Veg", variants: [{ label: "Full", price: 139 }] },
{ id: 1111, name: "Chicken Cheese Burger Crispy Peri Peri", category: "Burger", subCategory: "Non-Veg", variants: [{ label: "Full", price: 149 }] },



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

