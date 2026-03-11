import { FileText, Shield, DollarSign } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  {
    icon: FileText,
    title: "Tailored Content",
    description:
      "Custom editorial content crafted to resonate with your target readership and brand values.",
  },
  {
    icon: Shield,
    title: "High Standards",
    description:
      "Professional editing ensures every publication meets the highest standards of quality and consistency.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "Clear, upfront rates with no hidden costs or fees — so you always know what to expect.",
  },
];

const WhyChooseSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div ref={ref} className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Why Work With Me
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            The Difference
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {reasons.map((reason, i) => (
            <div key={reason.title} className={`text-center space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: isVisible ? `${200 + i * 150}ms` : '0ms' }}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-accent/30 text-accent">
                <reason.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
