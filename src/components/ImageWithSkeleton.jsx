"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageWithSkeleton({ src, alt, fill, width, height, className, imageClassName, priority, sizes }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${fill ? "w-full h-full" : ""} ${className || ""}`}>
      {/* Skeleton Background */}
      <div 
        className={`absolute inset-0 bg-accent animate-pulse z-0 transition-opacity duration-500 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} 
      />
      
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className={`z-10 transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"} ${imageClassName || ""}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
