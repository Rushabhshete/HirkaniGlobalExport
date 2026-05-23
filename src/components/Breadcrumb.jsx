import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ items, theme = "dark" }) {
  const isDark = theme === "dark";
  const textActive = isDark ? "text-white" : "text-foreground font-semibold";
  const textInactive = isDark ? "text-white/70 hover:text-white" : "text-foreground/60 hover:text-primary";
  const iconColor = isDark ? "text-white/50" : "text-foreground/40";

  return (
    <nav className="flex items-center space-x-2 text-sm mb-6 animate-fade-up will-animate">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center space-x-2">
            {isLast ? (
              <span className={textActive}>{item.label}</span>
            ) : (
              <>
                <Link href={item.href} className={`transition ${textInactive}`}>
                  {item.label}
                </Link>
                <ChevronRight className={`h-4 w-4 ${iconColor}`} />
              </>
            )}
          </div>
        );
      })}
    </nav>
  );
}
