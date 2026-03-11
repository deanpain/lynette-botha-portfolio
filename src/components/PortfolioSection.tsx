import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import magazineClouds from "@/assets/magazine-clouds.jpg";
import magazineGold from "@/assets/magazine-gold.jpg";
import magazineBlue from "@/assets/magazine-blue.jpg";
import magazineEscape from "@/assets/magazine-escape.jpg";

const magazines = [
  { title: "Clouds", category: "Travel & Luxury", image: magazineClouds },
  { title: "Gold", category: "Lifestyle & Luxury", image: magazineGold },
  { title: "Blue", category: "Ocean & Travel", image: magazineBlue },
  { title: "Escape Route", category: "Adventure & Travel", image: magazineEscape },
];

const PortfolioSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-card">
      <div className="container">
        <div ref={headerRef} className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Featured Work
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {magazines.map((mag, i) => (
            <div key={mag.title} className={`group cursor-pointer transition-all duration-700 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: gridVisible ? `${i * 100}ms` : '0ms' }}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
                <img
                  src={mag.image}
                  alt={`${mag.title} magazine cover`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors duration-300 flex items-end p-6">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="font-serif text-xl font-semibold text-background">{mag.title}</h3>
                    <p className="text-sm text-background/70 mt-1">{mag.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
