export const products = [
  {
    id: "1",
    slug: "premium-turmeric-powder",
    name: "Premium Turmeric Powder",
    description:
      "High-quality turmeric powder with rich color and aroma, sourced from the finest farms in India.",
    price: "$12.50/kg",
    image: "/turmeric_powder (3).png",
    category: "Spices",
    origin: "India",
    ingredients: ["100% Pure Turmeric"],
    shelfLife: "24 months",
    packaging: ["1kg bags", "5kg bags", "25kg bulk"],
  },
  {
    id: "2",
    slug: "garam-masala-blend",
    name: "Garam Masala Blend",
    description:
      "Traditional blend of aromatic spices perfect for authentic Indian cuisine.",
    price: "$18.00/kg",
    image: "/garam_masala_blend.png",
    category: "Spices",
    origin: "India",
    ingredients: ["Cardamom", "Cinnamon", "Cloves", "Black Pepper", "Cumin"],
    shelfLife: "18 months",
    packaging: ["500g bags", "1kg bags", "10kg bulk"],
  },
  {
    id: "3",
    slug: "red-chili-powder",
    name: "Red Chili Powder",
    description: "Fiery red chili powder with intense heat and vibrant color.",
    price: "$15.75/kg",
    image: "/red_chilli_powder.png",
    category: "Spices",
    origin: "India",
    ingredients: ["100% Pure Red Chilies"],
    shelfLife: "24 months",
    packaging: ["1kg bags", "5kg bags", "25kg bulk"],
  },
  {
    id: "4",
    slug: "mango-chutney",
    name: "Mango Chutney",
    description:
      "Sweet and tangy mango chutney made with fresh mangoes and traditional spices.",
    price: "$8.50/jar",
    image: "/mango_chuney.png",
    category: "Chutneys",
    origin: "India",
    ingredients: ["Mango", "Sugar", "Vinegar", "Spices"],
    shelfLife: "12 months",
    packaging: ["250g jars", "500g jars", "1kg containers"],
  },
  {
    id: "5",
    slug: "mint-chutney",
    name: "Mint Chutney",
    description:
      "Fresh and zesty mint chutney with a perfect balance of herbs and spices.",
    price: "$7.25/jar",
    image: "/mint_chutney.png",
    category: "Chutneys",
    origin: "India",
    ingredients: ["Fresh Mint", "Coriander", "Green Chilies", "Lemon"],
    shelfLife: "6 months",
    packaging: ["200g jars", "400g jars"],
  },
  {
    id: "6",
    slug: "organic-basmati-rice",
    name: "Organic Basmati Rice",
    description:
      "Premium organic basmati rice with long grains and aromatic fragrance.",
    price: "$22.00/kg",
    image: "/organic_basmati_rice.png",
    category: "Food Products",
    origin: "India",

    isComingSoon: true,
    ingredients: ["100% Organic Basmati Rice"],
    shelfLife: "12 months",
    packaging: ["1kg bags", "5kg bags", "25kg bulk"],
  },
];

/* ---------- Helpers ---------- */

function normalizeSlug(s) {
  if (!s && s !== "") return "";
  return String(s)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export const getProductBySlug = (slug) => {
  const target = normalizeSlug(decodeURIComponent(slug || ""));
  return products.find((product) => normalizeSlug(product.slug) === target);
};

export const getProductsByCategory = (category) => {
  return products.filter((product) => product.category === category);
};

export const getCategories = () => {
  return Array.from(new Set(products.map((p) => p.category)));
};
