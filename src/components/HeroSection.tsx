import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-portrait.webp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "250+", label: "Magazines Edited" },
  { value: "1000+", label: "Articles Published" },
];

const HeroSection = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation(0.1);
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation(0.1);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2);

  return (
    <section className="relative pt-20 md:pt-0 min-h-screen flex items-center">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left content */}
          <div ref={leftRef} className={`order-2 md:order-1 space-y-8 transition-all duration-700 ${leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-4">
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent">
                Award-Winning Editor
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-foreground text-balance">
                Magazine Publishing & Editing Services
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Crafting luxury magazines that captivate audiences and maximize revenue.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="gold" size="lg" asChild>
                <a href="#services">View Services</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Schedule Consultation</a>
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div ref={rightRef} className={`order-1 md:order-2 transition-all duration-700 delay-200 ${rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={heroImage}
                  alt="Lynette Botha - Award-winning magazine editor"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/30 rounded-sm -z-10" />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div ref={statsRef} className={`mt-16 md:mt-24 border-t border-border pt-8 transition-all duration-700 delay-500 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground tracking-wide uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
