import Link from "next/link";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";

export default function CategoryCard({ name, description, image, slug }) {
  return (
    <Link href={`/products?category=${encodeURIComponent(name)}`} className="block group h-full">
      <div className="flex flex-col h-full bg-surface border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative h-48 w-full overflow-hidden">
          <ImageWithSkeleton
            src={image}
            alt={name}
            fill
            imageClassName="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
          <p className="text-sm text-foreground/70 mb-6 flex-grow">{description}</p>
          
          <div className="mt-auto">
            <span className="inline-block px-6 py-2 text-sm font-bold text-white bg-gradient-brand rounded-lg w-full text-center group-hover:brightness-110 transition">
              Explore
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
