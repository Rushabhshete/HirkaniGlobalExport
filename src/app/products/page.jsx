import { products, getCategories } from "@/data/products";
import FilteredProductList from "@/components/FilteredProductList";

export default function ProductsPage() {
  const categories = getCategories();

  return (
    <main className="py-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-600">
            Explore our premium collection of Indian spices and chutneys,
            carefully selected for export quality.
          </p>
        </div>

        <FilteredProductList products={products} categories={categories} />
      </div>
    </main>
  );
}
