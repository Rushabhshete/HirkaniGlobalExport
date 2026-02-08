"use client";

import { useState } from "react";
import { Filter } from "lucide-react";
import ProductCard from "@/components/ProductCard";

export default function FilteredProductList({ products, categories = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const allCategories = ["All", ...categories];

  const getProductsByCategory = () => {
    const grouped = {};
    products.forEach((product) => {
      if (!grouped[product.category]) {
        grouped[product.category] = [];
      }
      grouped[product.category].push(product);
    });
    return grouped;
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const isShowingAllCategories = selectedCategory === "All";
  const productsByCategory = isShowingAllCategories ? getProductsByCategory() : {};

  return (
    <>
      {/* Filter Section */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <Filter className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">
            Filter by category:
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-orange-600 text-white dark:bg-orange-500"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Section-wise Products or Single Category Products */}
      {isShowingAllCategories ? (
        <>
          {/* Show products grouped by category */}
          {allCategories.slice(1).map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productsByCategory[category]?.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {/* Show flat grid for single category */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
}