"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { Download } from "lucide-react";

export default function FilteredProductList({ products, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Filter
  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(p => p.category === selectedCategory);

  // Paginate
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* LEFT SIDEBAR (Desktop) / TOP (Mobile) */}
      <div className="w-full lg:w-72 flex-shrink-0">
        <div className="bg-surface border border-border rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Categories</h2>
          
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-2 lg:pb-0 hide-scrollbar">
            <button
              onClick={() => handleCategoryChange("All")}
              className={`flex-shrink-0 text-left px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === "All"
                  ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary lg:rounded-l-none"
                  : "text-foreground/70 hover:text-primary hover:bg-accent"
              }`}
            >
              All Products
            </button>
            
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`flex-shrink-0 text-left px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === cat
                    ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary lg:rounded-l-none"
                    : "text-foreground/70 hover:text-primary hover:bg-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Brochure Download CTA */}
        <div className="hidden lg:block bg-gradient-brand rounded-xl p-6 text-white text-center">
          <h3 className="text-lg font-bold mb-2">Download Brochure</h3>
          <p className="text-sm text-white/80 mb-4">Get our complete product catalog in PDF format.</p>
          <button className="flex items-center justify-center w-full px-4 py-2 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </button>
        </div>
      </div>

      {/* RIGHT SIDE: PRODUCT GRID */}
      <div className="flex-grow">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-foreground">
            {selectedCategory === "All" ? "All Products" : selectedCategory}
          </h2>
          <span className="text-sm text-foreground/60">
            Showing {filteredProducts.length} products
          </span>
        </div>

        {currentProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-surface rounded-xl border border-border">
            <p className="text-foreground/60">No products found in this category.</p>
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-border rounded-lg disabled:opacity-50 hover:bg-accent"
            >
              Prev
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                  currentPage === i + 1
                    ? "bg-primary text-white font-bold"
                    : "border border-border text-foreground hover:bg-accent"
                }`}
              >
                {i + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-border rounded-lg disabled:opacity-50 hover:bg-accent"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}