export const CATEGORIES = [
  {
    name: "Spices",
    slug: "spices",
    description: "Pure, natural and aromatic spices with rich flavors",
    image: "/images/category_spices.png",
  },
  {
    name: "Agricultural Products",
    slug: "agricultural-products",
    description: "High quality agricultural commodities",
    image: "/images/category_agricultural.png",
  },
  {
    name: "Herbal Products",
    slug: "herbal-products",
    description: "Natural herbs for wellness and health",
    image: "/images/category_herbal.png",
  },
  {
    name: "Dehydrated Products",
    slug: "dehydrated-products",
    description: "Hygienically processed dehydrated products",
    image: "/images/category_dehydrated.png",
  },
  {
    name: "Snacks",
    slug: "snacks",
    description: "Traditional Indian snacks made with authentic recipes",
    image: "/images/category_snacks.png",
  },
  {
    name: "Handmade Products",
    slug: "handmade-products",
    description: "Artisan handcrafted products with traditional designs",
    image: "/images/category_handmade.png",
  },
];

export const products = [
  /* ========== SPICES ========== */
  {
    id: "1",
    slug: "premium-turmeric-powder",
    name: "Turmeric",
    description:
      "Our turmeric is known for its rich color, strong aroma and high curcumin content. Sourced from the best farms and processed with care.",
    numericPrice: 12.5,
    unit: "kg",
    image: "/turmeric_powder.png",
    images: [
      "/turmeric_powder.png",
      "/images/category_spices.png",
      "/images/banner_export.png"
    ],
    category: "Spices",
    origin: "India",
    specifications: {
      Origin: "India",
      Curcumin: "3% - 5%",
      Moisture: "8% (Max)",
      "Ash Content": "9% (Max)",
      "Shelf Life": "24 Months",
      Packaging: "5kg / 10kg / 25kg PP Bags",
      "Minimum Order Quantity": "1 Ton",
    },
    ingredients: ["100% Pure Turmeric"],
    shelfLife: "24 months",
    packaging: ["5kg bags", "10kg bags", "25kg PP bags"],
    minOrderQty: "1 Ton",
  },
  {
    id: "2",
    slug: "red-chilli-powder",
    name: "Red Chilli",
    description:
      "Fiery red chili powder with intense heat and vibrant color. Premium quality sourced from Guntur and Byadgi regions.",
    numericPrice: 15.75,
    unit: "kg",
    image: "/red_chilli_powder.png",
    images: [
      "/red_chilli_powder.png",
      "/images/category_spices.png",
      "/images/banner_export.png"
    ],
    category: "Spices",
    origin: "India",
    specifications: {
      Origin: "India",
      "Heat Level": "Medium to Hot",
      Moisture: "10% (Max)",
      Color: "Deep Red (ASTA 80-120)",
      "Shelf Life": "24 Months",
      Packaging: "5kg / 10kg / 25kg PP Bags",
      "Minimum Order Quantity": "1 Ton",
    },
    ingredients: ["100% Pure Red Chilies"],
    shelfLife: "24 months",
    packaging: ["5kg bags", "10kg bags", "25kg PP bags"],
    minOrderQty: "1 Ton",
  },
  {
    id: "3",
    slug: "cumin-seeds",
    name: "Cumin Seeds",
    description:
      "Premium quality cumin seeds with strong aroma and distinct earthy flavor. Carefully sorted and cleaned for export.",
    numericPrice: 18.0,
    unit: "kg",
    image: "/images/cumin_seeds.png",
    images: [
      "/images/cumin_seeds.png",
      "/images/category_spices.png",
      "/images/banner_export.png"
    ],
    category: "Spices",
    origin: "India",
    specifications: {
      Origin: "India (Gujarat/Rajasthan)",
      Purity: "99% Min",
      Moisture: "8% (Max)",
      "Volatile Oil": "2.5% Min",
      "Shelf Life": "24 Months",
      Packaging: "10kg / 25kg / 50kg Jute Bags",
      "Minimum Order Quantity": "1 Ton",
    },
    ingredients: ["100% Pure Cumin Seeds"],
    shelfLife: "24 months",
    packaging: ["10kg bags", "25kg bags", "50kg jute bags"],
    minOrderQty: "1 Ton",
  },
  {
    id: "4",
    slug: "coriander-seeds",
    name: "Coriander Seeds",
    description:
      "Whole coriander seeds with citrusy aroma. Essential spice for global cuisines, sourced from premium Indian farms.",
    numericPrice: 10.0,
    unit: "kg",
    image: "/images/coriander_seeds.png",
    images: [
      "/images/coriander_seeds.png",
      "/images/category_spices.png",
      "/images/banner_export.png"
    ],
    category: "Spices",
    origin: "India",
    specifications: {
      Origin: "India (Rajasthan/MP)",
      Purity: "98% Min",
      Moisture: "9% (Max)",
      "Volatile Oil": "0.3% Min",
      "Shelf Life": "24 Months",
      Packaging: "10kg / 25kg / 50kg PP Bags",
      "Minimum Order Quantity": "1 Ton",
    },
    ingredients: ["100% Pure Coriander Seeds"],
    shelfLife: "24 months",
    packaging: ["10kg bags", "25kg bags", "50kg PP bags"],
    minOrderQty: "1 Ton",
  },
  {
    id: "5",
    slug: "black-pepper",
    name: "Black Pepper",
    description:
      "The king of spices. Premium Malabar black pepper with high piperine content and bold flavor.",
    numericPrice: 25.0,
    unit: "kg",
    image: "/images/black_pepper.png",
    images: [
      "/images/black_pepper.png",
      "/images/category_spices.png",
      "/images/banner_export.png"
    ],
    category: "Spices",
    origin: "India",
    specifications: {
      Origin: "India (Kerala/Karnataka)",
      Piperine: "4% - 6%",
      Moisture: "12% (Max)",
      "Bulk Density": "500 g/L Min",
      "Shelf Life": "24 Months",
      Packaging: "5kg / 10kg / 25kg PP Bags",
      "Minimum Order Quantity": "500 Kg",
    },
    ingredients: ["100% Pure Black Pepper"],
    shelfLife: "24 months",
    packaging: ["5kg bags", "10kg bags", "25kg PP bags"],
    minOrderQty: "500 Kg",
  },
  {
    id: "6",
    slug: "fenugreek-seeds",
    name: "Fenugreek Seeds",
    description:
      "High quality fenugreek seeds with rich golden-yellow color and distinctive bitter-sweet flavor.",
    numericPrice: 8.0,
    unit: "kg",
    image: "/images/fenugreek_seeds.png",
    images: [
      "/images/fenugreek_seeds.png",
      "/images/category_spices.png",
      "/images/banner_export.png"
    ],
    category: "Spices",
    origin: "India",
    specifications: {
      Origin: "India (Rajasthan)",
      Purity: "98% Min",
      Moisture: "8% (Max)",
      "Foreign Matter": "1% Max",
      "Shelf Life": "24 Months",
      Packaging: "10kg / 25kg PP Bags",
      "Minimum Order Quantity": "1 Ton",
    },
    ingredients: ["100% Pure Fenugreek Seeds"],
    shelfLife: "24 months",
    packaging: ["10kg bags", "25kg PP bags"],
    minOrderQty: "1 Ton",
  },
  {
    id: "7",
    slug: "garam-masala-blend",
    name: "Garam Masala Blend",
    description:
      "Traditional blend of aromatic spices perfect for authentic Indian cuisine. Custom blending available.",
    numericPrice: 20.0,
    unit: "kg",
    image: "/garam_masala_blend.png",
    images: [
      "/garam_masala_blend.png",
      "/images/category_spices.png",
      "/images/banner_export.png"
    ],
    category: "Spices",
    origin: "India",
    specifications: {
      Origin: "India",
      Composition: "Cardamom, Cinnamon, Cloves, Black Pepper, Cumin",
      Moisture: "8% (Max)",
      "Shelf Life": "18 Months",
      Packaging: "500g / 1kg / 5kg bags",
      "Minimum Order Quantity": "500 Kg",
    },
    ingredients: ["Cardamom", "Cinnamon", "Cloves", "Black Pepper", "Cumin"],
    shelfLife: "18 months",
    packaging: ["500g bags", "1kg bags", "5kg bags"],
    minOrderQty: "500 Kg",
  },

  /* ========== AGRICULTURAL PRODUCTS ========== */
  {
    id: "8",
    slug: "ashwagandha",
    name: "Ashwagandha",
    description:
      "Premium Ashwagandha root powder (Withania somnifera). Adaptogenic herb highly valued in Ayurvedic medicine worldwide.",
    numericPrice: 30.0,
    unit: "kg",
    image: "/images/ashwagandha.png",
    images: [
      "/images/ashwagandha.png",
      "/images/category_agricultural.png",
      "/images/banner_export.png"
    ],
    category: "Agricultural Products",
    origin: "India",
    specifications: {
      Origin: "India (Madhya Pradesh/Rajasthan)",
      Withanolides: "2.5% Min",
      Moisture: "8% (Max)",
      "Ash Content": "7% (Max)",
      "Shelf Life": "24 Months",
      Packaging: "5kg / 10kg / 25kg Bags",
      "Minimum Order Quantity": "500 Kg",
    },
    ingredients: ["100% Pure Ashwagandha Root"],
    shelfLife: "24 months",
    packaging: ["5kg bags", "10kg bags", "25kg bags"],
    minOrderQty: "500 Kg",
  },
  {
    id: "9",
    slug: "garlic-whole",
    name: "Garlic (Whole)",
    description:
      "Fresh whole garlic bulbs for export. Strong pungent flavor, organically grown in Rajasthan and Madhya Pradesh.",
    numericPrice: 5.0,
    unit: "kg",
    image: "/images/garlic.png",
    images: [
      "/images/garlic.png",
      "/images/category_agricultural.png",
      "/images/banner_export.png"
    ],
    category: "Agricultural Products",
    origin: "India",
    specifications: {
      Origin: "India (Rajasthan/MP)",
      Size: "45mm - 55mm",
      Moisture: "65% Fresh",
      "Shelf Life": "3 Months (Fresh)",
      Packaging: "10kg / 20kg Mesh Bags",
      "Minimum Order Quantity": "5 Tons",
    },
    ingredients: ["100% Fresh Garlic"],
    shelfLife: "3 months",
    packaging: ["10kg mesh bags", "20kg mesh bags"],
    minOrderQty: "5 Tons",
  },

  /* ========== DEHYDRATED PRODUCTS ========== */
  {
    id: "10",
    slug: "moringa-powder",
    name: "Moringa Powder",
    description:
      "Nutrient-rich moringa leaf powder, sun-dried and finely ground. Known as the 'miracle tree' with exceptional nutritional profile.",
    numericPrice: 22.0,
    unit: "kg",
    image: "/images/moringa_powder.png",
    images: [
      "/images/moringa_powder.png",
      "/images/category_dehydrated.png",
      "/images/banner_export.png"
    ],
    category: "Dehydrated Products",
    origin: "India",
    specifications: {
      Origin: "India (Tamil Nadu/Rajasthan)",
      Protein: "25% Min",
      Moisture: "6% (Max)",
      "Mesh Size": "80-100 Mesh",
      "Shelf Life": "24 Months",
      Packaging: "5kg / 10kg / 25kg Bags",
      "Minimum Order Quantity": "500 Kg",
    },
    ingredients: ["100% Pure Moringa Leaves"],
    shelfLife: "24 months",
    packaging: ["5kg bags", "10kg bags", "25kg bags"],
    minOrderQty: "500 Kg",
  },
  {
    id: "11",
    slug: "onion-powder",
    name: "Onion Powder",
    description:
      "Fine dehydrated onion powder with concentrated flavor. Ideal for food processing, seasoning blends and ready-to-eat products.",
    numericPrice: 12.0,
    unit: "kg",
    image: "/images/onion_powder.png",
    images: [
      "/images/onion_powder.png",
      "/images/category_dehydrated.png",
      "/images/banner_export.png"
    ],
    category: "Dehydrated Products",
    origin: "India",
    specifications: {
      Origin: "India (Maharashtra/Gujarat)",
      Moisture: "5% (Max)",
      "Mesh Size": "80-100 Mesh",
      Color: "Creamy White",
      "Shelf Life": "18 Months",
      Packaging: "5kg / 10kg / 25kg Bags",
      "Minimum Order Quantity": "1 Ton",
    },
    ingredients: ["100% Dehydrated Onion"],
    shelfLife: "18 months",
    packaging: ["5kg bags", "10kg bags", "25kg bags"],
    minOrderQty: "1 Ton",
  },
  {
    id: "12",
    slug: "garlic-powder",
    name: "Garlic Powder",
    description:
      "Premium dehydrated garlic powder with strong pungent flavor. Processed under strict hygiene standards for global markets.",
    numericPrice: 14.0,
    unit: "kg",
    image: "/images/garlic_powder.png",
    images: [
      "/images/garlic_powder.png",
      "/images/category_dehydrated.png",
      "/images/banner_export.png"
    ],
    category: "Dehydrated Products",
    origin: "India",
    specifications: {
      Origin: "India (Rajasthan/MP)",
      Moisture: "6% (Max)",
      "Mesh Size": "80-100 Mesh",
      Color: "Off-White",
      "Shelf Life": "18 Months",
      Packaging: "5kg / 10kg / 25kg Bags",
      "Minimum Order Quantity": "1 Ton",
    },
    ingredients: ["100% Dehydrated Garlic"],
    shelfLife: "18 months",
    packaging: ["5kg bags", "10kg bags", "25kg bags"],
    minOrderQty: "1 Ton",
  },
  {
    id: "13",
    slug: "ginger-powder",
    name: "Ginger Powder",
    description:
      "Finely ground dehydrated ginger powder with warm, spicy flavor. Used in food processing, beverages, and Ayurvedic formulations.",
    numericPrice: 16.0,
    unit: "kg",
    image: "/images/ginger_powder.png",
    images: [
      "/images/ginger_powder.png",
      "/images/category_dehydrated.png",
      "/images/banner_export.png"
    ],
    category: "Dehydrated Products",
    origin: "India",
    specifications: {
      Origin: "India (Kerala/Karnataka)",
      Gingerol: "1.5% Min",
      Moisture: "8% (Max)",
      "Mesh Size": "60-80 Mesh",
      "Shelf Life": "24 Months",
      Packaging: "5kg / 10kg / 25kg Bags",
      "Minimum Order Quantity": "500 Kg",
    },
    ingredients: ["100% Pure Ginger"],
    shelfLife: "24 months",
    packaging: ["5kg bags", "10kg bags", "25kg bags"],
    minOrderQty: "500 Kg",
  },
  {
    id: "14",
    slug: "dehydrated-onion-flakes",
    name: "Dehydrated Onion Flakes",
    description:
      "Crispy dehydrated onion flakes retaining full flavor and aroma. Widely used in soups, snacks, and ready meals.",
    numericPrice: 10.0,
    unit: "kg",
    image: "/images/onion_powder.png",
    images: [
      "/images/onion_powder.png",
      "/images/category_dehydrated.png",
      "/images/banner_export.png"
    ],
    category: "Dehydrated Products",
    origin: "India",
    specifications: {
      Origin: "India (Maharashtra)",
      Moisture: "6% (Max)",
      Size: "3-15mm Flakes",
      Color: "Light Pink / White",
      "Shelf Life": "18 Months",
      Packaging: "10kg / 20kg Cartons",
      "Minimum Order Quantity": "1 Ton",
    },
    ingredients: ["100% Dehydrated Onion"],
    shelfLife: "18 months",
    packaging: ["10kg cartons", "20kg cartons"],
    minOrderQty: "1 Ton",
  },

  /* ========== HERBAL PRODUCTS ========== */
  {
    id: "15",
    slug: "herbal-soaps",
    name: "Herbal Soaps",
    description:
      "Handcrafted herbal soaps made with natural ingredients like neem, turmeric, and aloe vera. Chemical-free and skin-friendly.",
    numericPrice: 3.5,
    unit: "piece",
    image: "/images/category_herbal.png",
    images: [
      "/images/category_herbal.png",
      "/images/category_herbal.png",
      "/images/banner_export.png"
    ],
    category: "Herbal Products",
    origin: "India",
    specifications: {
      Ingredients: "Neem, Turmeric, Aloe Vera, Coconut Oil",
      Weight: "100g / 125g per bar",
      "Shelf Life": "24 Months",
      Type: "Cold Process Handmade",
      Packaging: "Paper Box / Shrink Wrap",
      "Minimum Order Quantity": "1000 Pieces",
    },
    ingredients: ["Neem", "Turmeric", "Aloe Vera", "Coconut Oil"],
    shelfLife: "24 months",
    packaging: ["100g bars", "125g bars"],
    minOrderQty: "1000 Pieces",
  },
  {
    id: "16",
    slug: "face-pack",
    name: "Face Pack",
    description:
      "Ayurvedic face pack with multani mitti, sandalwood, and rose extracts. Natural skincare for radiant and glowing skin.",
    numericPrice: 8.0,
    unit: "pack",
    image: "/images/category_herbal.png",
    images: [
      "/images/category_herbal.png",
      "/images/category_herbal.png",
      "/images/banner_export.png"
    ],
    category: "Herbal Products",
    origin: "India",
    specifications: {
      Ingredients: "Multani Mitti, Sandalwood, Rose, Turmeric",
      Weight: "100g / 200g",
      "Shelf Life": "18 Months",
      Type: "Powder Form",
      Packaging: "Stand-up Pouch / Jar",
      "Minimum Order Quantity": "500 Units",
    },
    ingredients: ["Multani Mitti", "Sandalwood", "Rose", "Turmeric"],
    shelfLife: "18 months",
    packaging: ["100g pouch", "200g jar"],
    minOrderQty: "500 Units",
  },
  {
    id: "17",
    slug: "hair-pack",
    name: "Hair Pack",
    description:
      "Herbal hair pack with amla, shikakai, and bhringraj for strong and healthy hair. Traditional Ayurvedic hair care.",
    numericPrice: 9.0,
    unit: "pack",
    image: "/images/category_herbal.png",
    images: [
      "/images/category_herbal.png",
      "/images/category_herbal.png",
      "/images/banner_export.png"
    ],
    category: "Herbal Products",
    origin: "India",
    specifications: {
      Ingredients: "Amla, Shikakai, Bhringraj, Hibiscus",
      Weight: "100g / 200g",
      "Shelf Life": "18 Months",
      Type: "Powder Form",
      Packaging: "Stand-up Pouch / Jar",
      "Minimum Order Quantity": "500 Units",
    },
    ingredients: ["Amla", "Shikakai", "Bhringraj", "Hibiscus"],
    shelfLife: "18 months",
    packaging: ["100g pouch", "200g jar"],
    minOrderQty: "500 Units",
  },
  {
    id: "18",
    slug: "herbal-shampoo",
    name: "Herbal Shampoo",
    description:
      "Sulfate-free herbal shampoo with natural extracts of amla, reetha, and aloe vera. Gentle cleansing for all hair types.",
    numericPrice: 6.0,
    unit: "bottle",
    image: "/images/category_herbal.png",
    images: [
      "/images/category_herbal.png",
      "/images/category_herbal.png",
      "/images/banner_export.png"
    ],
    category: "Herbal Products",
    origin: "India",
    specifications: {
      Ingredients: "Amla, Reetha, Aloe Vera, Neem",
      Volume: "200ml / 500ml",
      "Shelf Life": "24 Months",
      Type: "Sulfate-Free Liquid",
      Packaging: "HDPE Bottle",
      "Minimum Order Quantity": "500 Bottles",
    },
    ingredients: ["Amla", "Reetha", "Aloe Vera", "Neem"],
    shelfLife: "24 months",
    packaging: ["200ml bottle", "500ml bottle"],
    minOrderQty: "500 Bottles",
  },

  /* ========== SNACKS ========== */
  {
    id: "19",
    slug: "chakali",
    name: "Chakali",
    description:
      "Traditional Indian spiral-shaped snack made from rice flour and spices. Crunchy, savory, and perfect for tea-time.",
    numericPrice: 7.0,
    unit: "kg",
    image: "/images/category_snacks.png",
    images: [
      "/images/category_snacks.png",
      "/images/category_snacks.png",
      "/images/banner_export.png"
    ],
    category: "Snacks",
    origin: "India",
    specifications: {
      Ingredients: "Rice Flour, Gram Flour, Sesame, Spices",
      "Shelf Life": "3 Months",
      Type: "Ready to Eat",
      Packaging: "250g / 500g / 1kg Packs",
      "Minimum Order Quantity": "200 Kg",
    },
    ingredients: ["Rice Flour", "Gram Flour", "Sesame", "Spices", "Oil"],
    shelfLife: "3 months",
    packaging: ["250g packs", "500g packs", "1kg packs"],
    minOrderQty: "200 Kg",
  },

  /* ========== HANDMADE PRODUCTS ========== */
  {
    id: "20",
    slug: "handmade-purse",
    name: "Handmade Purse",
    description:
      "Beautifully crafted handmade purse with traditional Indian embroidery and mirror work. Unique artisanal accessory.",
    numericPrice: 15.0,
    unit: "piece",
    image: "/images/category_handmade.png",
    images: [
      "/images/category_handmade.png",
      "/images/category_handmade.png",
      "/images/banner_export.png"
    ],
    category: "Handmade Products",
    origin: "India",
    specifications: {
      Material: "Cotton / Jute / Silk Blend",
      Size: "20cm x 15cm",
      Craft: "Embroidery & Mirror Work",
      "Shelf Life": "N/A",
      Packaging: "Individual Poly Bag",
      "Minimum Order Quantity": "100 Pieces",
    },
    ingredients: [],
    shelfLife: "N/A",
    packaging: ["Individual poly bag", "Box of 50"],
    minOrderQty: "100 Pieces",
  },
  {
    id: "21",
    slug: "sling-bag",
    name: "Sling Bag",
    description:
      "Handcrafted sling bag with ethnic Indian design patterns. Perfect blend of tradition and modern style for daily use.",
    numericPrice: 20.0,
    unit: "piece",
    image: "/images/category_handmade.png",
    images: [
      "/images/category_handmade.png",
      "/images/category_handmade.png",
      "/images/banner_export.png"
    ],
    category: "Handmade Products",
    origin: "India",
    specifications: {
      Material: "Cotton Canvas / Jute",
      Size: "30cm x 25cm x 8cm",
      Craft: "Block Print / Hand Weave",
      Closure: "Zip + Magnetic Snap",
      Packaging: "Individual Poly Bag",
      "Minimum Order Quantity": "100 Pieces",
    },
    ingredients: [],
    shelfLife: "N/A",
    packaging: ["Individual poly bag", "Box of 25"],
    minOrderQty: "100 Pieces",
  },
  {
    id: "22",
    slug: "handmade-pouch",
    name: "Pouch",
    description:
      "Multi-purpose handmade pouch with vibrant Indian fabric and intricate detailing. Ideal for cosmetics, stationery, or gifts.",
    numericPrice: 8.0,
    unit: "piece",
    image: "/images/category_handmade.png",
    images: [
      "/images/category_handmade.png",
      "/images/category_handmade.png",
      "/images/banner_export.png"
    ],
    category: "Handmade Products",
    origin: "India",
    specifications: {
      Material: "Cotton / Silk / Jute",
      Size: "18cm x 12cm",
      Craft: "Hand Embroidered",
      Closure: "Zip / Drawstring",
      Packaging: "Individual Poly Bag",
      "Minimum Order Quantity": "200 Pieces",
    },
    ingredients: [],
    shelfLife: "N/A",
    packaging: ["Individual poly bag", "Box of 100"],
    minOrderQty: "200 Pieces",
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

export const getRelatedProducts = (product, limit = 4) => {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
};
