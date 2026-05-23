import { getProductBySlug, products } from "@/data/products";
import Breadcrumb from "@/components/Breadcrumb";
import ProductDetailsClient from "@/components/ProductDetailsClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product Not Found | Fourzaa Global" };
  
  return {
    title: `${product.name} | Fourzaa Global`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Premium Export Quality | Fourzaa Global`,
      description: product.description,
      images: [
        {
          url: product.image,
          alt: product.name,
        }
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Fourzaa Global`,
      description: product.description,
      images: [product.image],
    }
  };
}

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // Create JSON-LD structured data for Google Search Crawlers
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.description,
    "category": product.category,
    "brand": {
      "@type": "Brand",
      "name": "Fourzaa Global"
    },
    "countryOfOrigin": {
      "@type": "Country",
      "name": product.origin || "India"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": product.numericPrice,
      "highPrice": product.numericPrice * 1.5,
      "offerCount": 1,
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": product.numericPrice,
        "priceCurrency": "USD",
        "referenceQuantity": {
          "@type": "QuantitativeValue",
          "value": 1,
          "unitText": product.unit || "kg"
        }
      }
    }
  };

  if (product.specifications) {
    jsonLd.additionalProperty = Object.entries(product.specifications).map(([key, val]) => ({
      "@type": "PropertyValue",
      "name": key,
      "value": val
    }));
  }

  return (
    <main className="w-full bg-background min-h-screen">
      {/* Insert Structured JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* We invert the breadcrumb colors for dark text on light bg */}
        <div className="mb-8">
          <Breadcrumb 
            theme="light"
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: product.name }
            ]} 
          />
        </div>
        
        <ProductDetailsClient product={product} />
      </div>
    </main>
  );
}
