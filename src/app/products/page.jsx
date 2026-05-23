import FilteredProductList from "@/components/FilteredProductList";
import Breadcrumb from "@/components/Breadcrumb";
import { products, getCategories } from "@/data/products";

export const metadata = {
  title: "Our Products | Fourzaa Global",
  description: "Browse our premium range of spices, agricultural, herbal, and dehydrated products for export.",
};

export default function ProductsPage() {
  const categories = getCategories();

  return (
    <main className="w-full bg-background min-h-screen">
      {/* Page Banner */}
      <div className="page-banner" style={{ backgroundImage: "url('/images/banner_products.png')" }}>
        <div className="page-banner-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4 animate-fade-up will-animate">
            Our Products
          </h1>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FilteredProductList products={products} categories={categories} />
      </div>
    </main>
  );
}
