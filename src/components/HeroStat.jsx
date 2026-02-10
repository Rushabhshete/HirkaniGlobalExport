import { CheckCircle2 } from "lucide-react";

export default function HeroStat({ icon: Icon, label }) {
  return (
    <div className="text-center md:text-left">
      <Icon className="h-7 w-7 mb-2 mx-auto md:mx-0 text-primary" />
      <p className="text-xs md:text-sm font-semibold uppercase tracking-tight text-foreground">
        {label}
      </p>
    </div>
  );
}
