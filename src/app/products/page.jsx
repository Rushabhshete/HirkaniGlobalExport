import { products, getCategories } from "@/data/products";
import FilteredProductList from "@/components/FilteredProductList";

export default function ProductsPage() {
  const categories = getCategories();

  return (
    <main className="py-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10 animate-fade-up will-animate">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Our Products
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl">
            Explore our premium collection of Indian spices and chutneys,
            carefully selected for export quality.
          </p>
        </div>

        {/* Product List */}
        <FilteredProductList
          products={products}
          categories={categories}
        />
      </div>
    </main>
  );
}
