import { Button } from "@/components/ui/button";
import { BookOpen, PenTool, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: BookOpen,
    title: "Publishing Services",
    description: "Full-service magazine production from concept to print.",
    features: [
      "Editorial planning & strategy",
      "Feature writing & copywriting",
      "Art direction & design management",
      "Advertising & sponsorship management",
    ],
    pricing: "Starting from $3,000 per project",
    cta: "Learn More",
  },
  {
    icon: PenTool,
    title: "Editing Services",
    description: "Professional editing & proofreading for polished content.",
    features: [
      "Comprehensive editing & proofreading",
      "Feature polish & headline crafting",
      "Fact-checking & content accuracy",
      "Subediting & quality control",
    ],
    pricing: "Rates from $0.25 per word",
    cta: "Get a Quote",
  },
  {
    icon: TrendingUp,
    title: "Advertising Support",
    description: "Maximize revenue with strategic advertising partnerships.",
    features: [
      "Strategic partnerships with top-tier brands",
      "Ad sales from prospecting to deal closure",
      "Revenue maximization with content quality",
      "Cover up to 50% of magazine costs",
    ],
    pricing: "Custom packages available",
    cta: "Discover More",
  },
];

const ServicesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);

  return (
    <section id="services" className="py-24 md:py-32 bg-card">
      <div className="container">
        <div ref={headerRef} className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            How I Can Help
          </h2>
        </div>

        <div ref={cardsRef} className={`grid md:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group bg-background border border-border rounded-sm p-8 md:p-10 flex flex-col hover:border-accent/40 transition-colors duration-300"
              style={{ transitionDelay: cardsVisible ? `${i * 150}ms` : '0ms' }}
            >
              <service.icon className="w-8 h-8 text-accent mb-6" strokeWidth={1.5} />
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-accent mb-6">{service.pricing}</p>
              <Button variant="gold-outline" className="w-full" asChild>
                <a href="#contact">{service.cta}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
