const products = [

/* =========================
   MOMOS – VEG
========================= */
{ id: 201, name: "Veg Steam Momos-6pc", category: "Mo-Mo", subCategory: "Veg", variants: [{ label: "Full", price: 59 }] },
{ id: 202, name: "Veg Steam Schezwan Momos-6pc", category: "Mo-Mo", subCategory: "Veg", variants: [{ label: "Full", price: 79 }] },
{ id: 203, name: "Veg Fried Schezwan Momos-6pc", category: "Mo-Mo", subCategory: "Veg", variants: [{ label: "Full", price: 89 }] },
{ id: 204, name: "Veg Peri Peri Steam Momos-6pc", category: "Mo-Mo", subCategory: "Veg", variants: [{ label: "Full", price: 89 }] },

/* =========================
   MOMOS – NON VEG
========================= */
{ id: 205, name: "Chicken Steam Momos-6pc", category: "Mo-Mo", subCategory: "Non-Veg", variants: [{ label: "Full", price: 89 }] },
{ id: 206, name: "Chicken Steam Schezwan Momos-6pc", category: "Mo-Mo", subCategory: "Non-Veg", variants: [{ label: "Full", price: 95 }] },
{ id: 207, name: "Chicken Fried Momos-6pc", category: "Mo-Mo", subCategory: "Non-Veg", variants: [{ label: "Full", price: 95 }] },
{ id: 208, name: "Chicken Fried Schezwan Momos-6pc", category: "Mo-Mo", subCategory: "Non-Veg", variants: [{ label: "Full", price: 89 }] },
{ id: 209, name: "Chicken Peri Peri Steam Momos-6pc", category: "Mo-Mo", subCategory: "Non-Veg", variants: [{ label: "Full", price: 95 }] },

/* =========================
   PIZZAS – VEG
========================= */
{ id: 301, name: "Corn Capsicum Pizza", category: "Pizza", subCategory: "Veg", variants: [
  { label: "Regular-8in", price:155  },
  { label: "large-10in", price:200  }
  
]},
{ id: 302, name: "Paneer Loaded Pizza", category: "Pizza", subCategory: "Veg", variants: [
  { label: "Regular-8in", price: 195 },
  { label: "large-10in", price: 269}
 
]},
{ id: 303, name: "Cheese Pizza", category: "Pizza", subCategory: "Veg", variants: [
  { label: "Regular-8in", price: 139 },
  { label: "large-10in", price: 175 }
  
]},
{ id: 304, name: "Paneer Tikka Pizza", category: "Pizza", subCategory: "Veg", variants: [
  { label: "Regular-8in", price: 165 },
  { label: "large-10in", price: 270 }
 
]},

{ id: 306, name: "Peri Peri Paneer Tikka Pizza", category: "Pizza", subCategory: "Veg", variants: [
  { label: "Regular-8in", price: 165 },
  { label: "large", price: 275 }
  
]},
{ id: 307, name: "BBQ Paneer Pizza", category: "Pizza", subCategory: "Veg", variants: [
  { label: "Regular-8in", price: 185 },
  { label: "large-10in", price: 295 }
 
]},

/* =========================
   PIZZAS – NON VEG
========================= */
{ id: 308, name: "Peri Peri Chicken Tikka Pizza", category: "Pizza", subCategory: "Non-Veg", variants: [
  { label: "Regular-8in", price: 175 },
  
  { label: "Large-10in", price: 295 }
]},
{ id: 309, name: "BBQ Chicken Pizza", category: "Pizza", subCategory: "Non-Veg", variants: [
  { label: "Regular-8in", price: 189 },
  
  { label: "Large-10in", price: 295 }
]},
{ id: 310, name: "Chicken Loaded Pizza", category: "Pizza", subCategory: "Non-Veg", variants: [
  { label: "Regular-8in", price: 189 },
  
  { label: "Large-10in", price: 295 }
]},
{ id: 311, name: "Crispy Chicken Pizza", category: "Pizza", subCategory: "Non-Veg", variants: [
  { label: "Regular-8in", price: 189 },
 
  { label: "Large-10in", price: 295 }
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
    { label: "Regular-8in", price: 175 },
    
    { label: "Large-10in", price: 279 }
  ]
},


/* =========================
   FRIED RICE – VEG
========================= */
{ id: 401, name: "Veg Fried Rice", category: "Fried Rice", subCategory: "Veg", variants: [{ label: "Full", price: 95 }] },
{ id: 402, name: "Veg Schezwan Fried Rice", category: "Fried Rice", subCategory: "Veg", variants: [{ label: "Full", price: 105 }] },
{ id: 403, name: "Gobi Fried Rice", category: "Fried Rice", subCategory: "Veg", variants: [{ label: "Full", price: 115 }] },
{ id: 404, name: "Gobi Schezwan Fried Rice", category: "Fried Rice", subCategory: "Veg", variants: [{ label: "Full", price: 115 }] },
{ id: 405, name: "Paneer Fried Rice", category: "Fried Rice", subCategory: "Veg", variants: [{ label: "Full", price: 135 }] },
{ id: 406, name: "Paneer Schezwan Fried Rice", category: "Fried Rice", subCategory: "Veg", variants: [{ label: "Full", price: 145 }] },

/* =========================
   FRIED RICE – NON VEG
========================= */
{ id: 407, name: "Chicken Fried Rice", category: "Fried Rice", subCategory: "Non-Veg", variants: [{ label: "Full", price: 109 }] },
{ id: 408, name: "Egg Fried Rice", category: "Fried Rice", subCategory: "Non-Veg", variants: [{ label: "Full", price: 95 }] },
{ id: 409, name: "Egg Chicken Fried Rice", category: "Fried Rice", subCategory: "Non-Veg", variants: [{ label: "Full", price: 145 }] },
{ id: 410, name: "Egg Schezwan Fried Rice", category: "Fried Rice", subCategory: "Non-Veg", variants: [{ label: "Full", price: 135 }] },
{ id: 411, name: "Egg Chicken Schezwan Fried Rice", category: "Fried Rice", subCategory: "Non-Veg", variants: [{ label: "Full", price: 135 }] },


/* =========================
   STARTERS – VEG
========================= */
{ id: 101, name: "Gobi Manchurian", category: "Starter", subCategory: "Veg", variants: [{ label: "Full", price: 79 }] },
{ id: 102, name: "French Fries (250 gm)", category: "Starter", subCategory: "Veg", variants: [{ label: "Full", price: 75 }] },
{ id: 103, name: "Veg Nuggets (6 pcs)", category: "Starter", subCategory: "Veg", variants: [{ label: "Full", price: 65 }] },
{ id: 104, name: "Potato Smiles (6 pcs)", category: "Starter", subCategory: "Veg", variants: [{ label: "Full", price: 65 }] },
{ id: 105, name: "Paneer Chilli 6pc (Dry)", category: "Starter", subCategory: "Veg", variants: [{ label: "Full", price:105 }] },
{ id: 106, name: "Paneer Chilli 6pc(Gravy)", category: "Starter", subCategory: "Veg", variants: [{ label: "Full", price: 110 }] },
{ id: 107, name: "Gobi Chilli (Dry)", category: "Starter", subCategory: "Veg", variants: [{ label: "Full", price: 75 }] },
{ id: 108, name: "Gobi Chilli (Gravy)", category: "Starter", subCategory: "Veg", variants: [{ label: "Full", price: 79 }] },


/* =========================
   STARTERS – NON VEG
========================= */
{ id: 509, name: "Chilli Chicken Dry 6pc", category: "Starter", subCategory: "Non-Veg", variants: [{ label: "Full", price: 95}] },
{ id: 510, name: "Chilli Chicken Gravy 6pc", category: "Starter", subCategory: "Non-Veg", variants: [{ label: "Full", price: 99 }] },
{ id: 511, name: "Dragon Chicken 10pc", category: "Starter", subCategory: "Non-Veg", variants: [{ label: "Full", price: 135 }] },
{ id: 512, name: "Chicken Lollipop 5pc", category: "Starter", subCategory: "Non-Veg", variants: [{ label: "Full", price: 185 }] },
{ id: 513, name: "Green Chilli Chicken", category: "Starter", subCategory: "Non-Veg", variants: [{ label: "Full", price: 95 }] },
{ id: 514, name: "Ginger Chicken 6pc", category: "Starter", subCategory: "Non-Veg", variants: [{ label: "Full", price: 129 }] },
{ id: 515, name: "Lemon Chicken 6pc", category: "Starter", subCategory: "Non-Veg", variants: [{ label: "Full", price: 115 }] },
{ id: 516, name: "Fried Chicken Lollipop 5pc", category: "Starter", subCategory: "Non-Veg", variants: [{ label: "Full", price: 185 }] },
{ id: 517, name: "Chicken Strips 5pc", category: "Starter", subCategory: "Non-Veg", variants: [{ label: "Full", price: 139 }] },
{ id: 518, name: "Chicken Nuggets 6pc", category: "Starter", subCategory: "Non-Veg", variants: [{ label: "6 Pieces", price:85  }] },
{ id: 519, name: "Chicken Popcorn 12pc", category: "Starter", subCategory: "Non-Veg", variants: [{ label: "12 Pieces", price: 85 }] },
/* =========================
   CHICKEN BUCKETS
========================= */
{ 
  id: 801, 
  name: "Chicken Bucket", 
  category: "Starter", 
  subCategory: "Non-Veg", 
  variants: [
    { label: "Half 5pc", price: 315 },
    { label: "Full 10pc", price: 565 }
  ] 
},


/* =========================
   NOODLES
========================= */
{ id: 601, name: "Veg Hakka Noodles", category: "Noodles", subCategory: "Veg", variants: [{ label: "Full", price: 105 }] },
{ id: 602, name: "Chicken Hakka Noodles", category: "Noodles", subCategory: "Non-Veg", variants: [{ label: "Full", price: 125 }] },
{ id: 603, name: "Egg Hakka Noodles", category: "Noodles", subCategory: "Non-Veg", variants: [{ label: "Full", price: 119 }] },
{ id: 604, name: "Paneer Hakka Noodles", category: "Noodles", subCategory: "Veg", variants: [{ label: "Full", price: 135 }] },
{ id: 605, name: "Egg  Chicken Hakka Noodles", category: "Noodles", subCategory: "Non-Veg", variants: [{ label: "Full", price: 135 }] },
   

/* =========================
   SOUPS – VEG
========================= */
{ id: 701, name: "Veg Manchow Soup", category: "Soup", subCategory: "Veg", variants: [{ label: "Full", price: 55 }] },
{ id: 702, name: "Lemon Coriander Soup", category: "Soup", subCategory: "Veg", variants: [{ label: "Full", price: 55 }] },
{ id: 703, name: "Veg Clear Soup", category: "Soup", subCategory: "Veg", variants: [{ label: "Full", price: 55 }] },

/* =========================
   SOUPS – NON VEG
========================= */
{ id: 704, name: "Chicken Manchow Soup", category: "Soup", subCategory: "Non-Veg", variants: [{ label: "Full", price: 59 }] },
{ id: 705, name: "Chicken Lemon Coriander Soup", category: "Soup", subCategory: "Non-Veg", variants: [{ label: "Full", price: 59 }] },
{ id: 706, name: "Chicken Clear Soup", category: "Soup", subCategory: "Non-Veg", variants: [{ label: "Full", price: 59 }] },
/* =========================
   SANDWICH – VEG
========================= */
{ id: 901, name: "Veg Grill Sandwich", category: "Sandwich", subCategory: "Veg", variants: [{ label: "Full", price: 75 }] },
{ id: 902, name: "Veg Cheese Grill Sandwich", category: "Sandwich", subCategory: "Veg", variants: [{ label: "Full", price: 95 }] },
{ id: 903, name: "Paneer Sandwich", category: "Sandwich", subCategory: "Veg", variants: [{ label: "Full", price: 125 }] },
{ id: 904, name: "Paneer Cheese Sandwich", category: "Sandwich", subCategory: "Veg", variants: [{ label: "Full", price: 135 }] },

/* =========================
   SANDWICH – NON VEG
========================= */
{ id: 905, name: "Chicken Sandwich", category: "Sandwich", subCategory: "Non-Veg", variants: [{ label: "Full", price: 85 }] },
{ id: 906, name: "Chicken Cheese Sandwich", category: "Sandwich", subCategory: "Non-Veg", variants: [{ label: "Full", price: 95 }] },
{ id: 907, name: "Chicken Schezwan Sandwich", category: "Sandwich", subCategory: "Non-Veg", variants: [{ label: "Full", price: 99 }] },
{ id: 908, name: "Peri Peri Chicken Sandwich", category: "Sandwich", subCategory: "Non-Veg", variants: [{ label: "Full", price: 85}] },
{ id: 909, name: "Peri Peri Chicken Cheese Sandwich", category: "Sandwich", subCategory: "Non-Veg", variants: [{ label: "Full", price:95 }] },

/* =========================
   ROLLS – VEG
========================= */
{ id: 1001, name: "Veg Roll", category: "Roll", subCategory: "Veg", variants: [{ label: "Full", price: 85 }] },
{ id: 1002, name: "Veg Cheese Roll", category: "Roll", subCategory: "Veg", variants: [{ label: "Full", price: 95 }] },
{ id: 1003, name: "Paneer Roll", category: "Roll", subCategory: "Veg", variants: [{ label: "Full", price: 115 }] },
{ id: 1004, name: "Paneer Cheese Roll", category: "Roll", subCategory: "Veg", variants: [{ label: "Full", price: 125 }] },
{ id: 1012, name: "Paneer Schezwan Roll", category: "Roll", subCategory: "Veg", variants: [{ label: "Full", price: 129 }] },   

/* =========================
   ROLLS – NON VEG
========================= */
{ id: 1005, name: "Chicken Roll", category: "Roll", subCategory: "Non-Veg", variants: [{ label: "Full", price: 115 }] },
{ id: 1006, name: "Chicken Cheese Roll", category: "Roll", subCategory: "Non-Veg", variants: [{ label: "Full", price: 105 }] },
{ id: 1007, name: "Crispy Chicken Roll", category: "Roll", subCategory: "Non-Veg", variants: [{ label: "Full", price: 119 }] },
{ id: 1008, name: "Crispy Egg Chicken Roll", category: "Roll", subCategory: "Non-Veg", variants: [{ label: "Full", price: 119 }] },
{ id: 1009, name: "Egg Chicken Roll", category: "Roll", subCategory: "Non-Veg", variants: [{ label: "Full", price: 115 }] },
{ id: 1019, name: "Egg  Roll", category: "Roll", subCategory: "Non-Veg", variants: [{ label: "Full", price:105 }] },
/* =========================
   BURGER – VEG
========================= */
{ id: 1101, name: "Paneer Burger", category: "Burger", subCategory: "Veg", variants: [{ label: "Full", price: 119 }] },
{ id: 1102, name: "Veg Crispy Cheese Burger", category: "Burger", subCategory: "Veg", variants: [{ label: "Full", price: 85 }] },
{ id: 1103, name: "Veg Paneer Crispy Cheese Burger", category: "Burger", subCategory: "Veg", variants: [{ label: "Full", price: 135 }] },
{ id: 1104, name: "Veg Burger", category: "Burger", subCategory: "Veg", variants: [{ label: "Full", price: 89 }] },

/* =========================
   BURGER – NON VEG
========================= */
{ id: 1105, name: "Chicken Burger", category: "Burger", subCategory: "Non-Veg", variants: [{ label: "Full", price: 95 }] },
{ id: 1106, name: "Chicken Cheese Burger", category: "Burger", subCategory: "Non-Veg", variants: [{ label: "Full", price: 105 }] },
{ id: 1107, name: "Chicken Peri Peri Burger", category: "Burger", subCategory: "Non-Veg", variants: [{ label: "Full", price: 115 }] },
{ id: 1108, name: "Chicken Peri Peri Cheese Burger", category: "Burger", subCategory: "Non-Veg", variants: [{ label: "Full", price: 105 }] },
{ id: 1109, name: "Crispy Chicken Burger", category: "Burger", subCategory: "Non-Veg", variants: [{ label: "Full", price: 135 }] },
{ id: 1110, name: "Crispy Chicken Cheese Burger", category: "Burger", subCategory: "Non-Veg", variants: [{ label: "Full", price: 155 }] },


/* =========================
   ICE CREAM – VEG
========================= */
{ id: 1601, name: "Raj Bhog Ice Cream", category: "Ice Cream", subCategory: "Veg", variants: [{ label: "Scoop", price: 35 }] },
{ id: 1603, name: "Butterscotch Ice Cream", category: "Ice Cream", subCategory: "Veg", variants: [{ label: "Scoop", price: 35 }] },
{ id: 1604, name: "Blackcurrant Ice Cream", category: "Ice Cream", subCategory: "Veg", variants: [{ label: "Scoop", price: 35 }] },
{ id: 1605, name: "Strawberry Ice Cream", category: "Ice Cream", subCategory: "Veg", variants: [{ label: "Scoop", price: 35 }] },
{ id: 1606, name: "Mango Ice Cream", category: "Ice Cream", subCategory: "Veg", variants: [{ label: "Scoop", price: 35 }] },
{ id: 1607, name: "Plain Ice Cream", category: "Ice Cream", subCategory: "Veg", variants: [{ label: "Scoop", price: 35 }] },
{ id: 1608, name: "Pista Ice Cream", category: "Ice Cream", subCategory: "Veg", variants: [{ label: "Scoop", price: 35 }] },
{ id: 1609, name: "Belgian Chocolate Ice Cream", category: "Ice Cream", subCategory: "Veg", variants: [{ label: "Scoop", price: 35 }] },
{ id: 1610, name: "Dry Fruit Ice Cream", category: "Ice Cream", subCategory: "Veg", variants: [{ label: "Scoop", price: 35 }] },
{ id: 1611, name: "Vanilla Ice Cream", category: "Ice Cream", subCategory: "Veg", variants: [{ label: "Scoop", price: 35 }] },
{ id: 1612, name: "Rich Chocolate Ice Cream", category: "Ice Cream", subCategory: "Veg", variants: [{ label: "Scoop", price: 35}] },
{ id: 1613, name: "Kesar Pista Ice Cream", category: "Ice Cream", subCategory: "Veg", variants: [{ label: "Scoop", price: 35 }] },
{ id: 1614, name: "Tutti Frutti Ice Cream", category: "Ice Cream", subCategory: "Veg", variants: [{ label: "Scoop", price: 35 }] },





/* =========================
   MOCKTAILS & BEVERAGES – VEG
========================= */

/* --- MOCKTAILS --- */
{ id: 1701, name: "Strawberry Mocktail", category: "Mocktails & Beverages", subCategory: "Veg", variants: [{ label: "Full", price: 55 }] },
{ id: 1702, name: "Orange Mocktail", category: "Mocktails & Beverages", subCategory: "Veg", variants: [{ label: "Full", price: 55 }] },
{ id: 1703, name: "Black Currant Mocktail", category: "Mocktails & Beverages", subCategory: "Veg", variants: [{ label: "Full", price: 55 }] },
{ id: 1704, name: "Lemon Soda", category: "Mocktails & Beverages", subCategory: "Veg", variants: [{ label: "Full", price: 45 }] },
{ id: 1705, name: "Virgin Mojito", category: "Mocktails & Beverages", subCategory: "Veg", variants: [{ label: "Full", price: 50 }] },

/* --- MILK SHAKES --- */
{ id: 1706, name: "Milk Shake", category: "Mocktails & Beverages", subCategory: "Veg", variants: [{ label: "Regular", price: 55 }] },
{ id: 1707, name: "Strawberry Milkshake", category: "Mocktails & Beverages", subCategory: "Veg", variants: [{ label: "Regular", price: 75 }] },
{ id: 1708, name: "Mango Milkshake", category: "Mocktails & Beverages", subCategory: "Veg", variants: [{ label: "Regular", price: 75 }] },
{ id: 1709, name: "Black Currant Milkshake", category: "Mocktails & Beverages", subCategory: "Veg", variants: [{ label: "Regular", price: 75 }] },
{ id: 1710, name: "Chocolate Milkshake", category: "Mocktails & Beverages", subCategory: "Veg", variants: [{ label: "Regular", price: 75 }] },

/* --- COLD COFFEE --- */
{ id: 1711, name: "Cold Coffee", category: "Mocktails & Beverages", subCategory: "Veg", variants: [{ label: "Regular", price: 85 }] },
{ id: 1712, name: "Strong Cold Coffee", category: "Mocktails & Beverages", subCategory: "Veg", variants: [{ label: "Regular", price: 105 }] }



];

window.products = products;




















