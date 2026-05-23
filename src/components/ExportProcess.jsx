import { Search, ShieldCheck, Factory, Package, Truck } from "lucide-react";

export default function ExportProcess() {
  const steps = [
    { num: "01", title: "Sourcing", desc: "Selecting the best raw materials from trusted farms.", icon: Search },
    { num: "02", title: "Quality Testing", desc: "Rigorous lab testing for purity and safety.", icon: ShieldCheck },
    { num: "03", title: "Processing", desc: "Hygienic processing using modern machinery.", icon: Factory },
    { num: "04", title: "Packaging", desc: "Export standard packaging to preserve freshness.", icon: Package },
    { num: "05", title: "Shipping", desc: "Timely delivery and complete documentation.", icon: Truck },
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Our Export Process</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="flex flex-col items-center text-center relative group">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-border border-dashed z-0"></div>
              )}
              
              <div className="relative z-10 w-20 h-20 bg-surface border-2 border-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/5 transition-colors shadow-sm">
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-gold text-white font-bold rounded-full flex items-center justify-center border-4 border-surface shadow-sm">
                  {step.num}
                </span>
                <Icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-foreground/70">{step.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
