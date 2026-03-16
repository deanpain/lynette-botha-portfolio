import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import magazineClouds from "@/assets/magazine-clouds.jpg";
import magazineGold from "@/assets/magazine-gold.jpg";
import magazineBlue from "@/assets/magazine-blue.jpg";
import magazineEscape from "@/assets/magazine-escape.jpg";

const magazines = [
  {
    title: "Clouds",
    category: "Travel & Luxury",
    image: magazineClouds,
    description:
      "A stunning editorial featuring breathtaking aerial photography of cloud formations over mountain ranges. This issue explores the intersection of nature's most ephemeral beauty and the luxury travel experience, showcasing exclusive destinations where travelers can witness these celestial displays from private villas and boutique sky lodges.",
  },
  {
    title: "Gold",
    category: "Lifestyle & Luxury",
    image: magazineGold,
    description:
      "An opulent exploration of gold in all its forms—from fine jewelry and haute couture to architectural details and culinary creations. This issue celebrates the enduring allure of gold as a symbol of achievement, elegance, and timeless sophistication, featuring interviews with master craftsmen and exclusive access to golden destinations.",
  },
  {
    title: "Blue",
    category: "Ocean & Travel",
    image: magazineBlue,
    description:
      "Dive into the mesmerizing world of blue—the color that dominates our planet's most breathtaking landscapes. From the deep sapphire waters of the Maldives to the azure skies of the Greek islands, this issue captures the essence of blue in travel, wellness, and sustainable luxury oceanfront living.",
  },
  {
    title: "Escape Route",
    category: "Adventure & Travel",
    image: magazineEscape,
    description:
      "For those who crave the road less traveled, this issue maps out extraordinary escape routes across the globe. From hidden mountain passes in Patagonia to secret beaches in Southeast Asia, discover transformative journeys that push boundaries and redefine adventure travel with style and sustainability.",
  },
];

const PortfolioSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-card">
      <div className="container">
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Featured Work
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {magazines.map((mag, i) => (
            <Dialog key={mag.title}>
              <DialogTrigger asChild>
                <div
                  className={`group cursor-pointer transition-all duration-700 ${
                    gridVisible ? "animate-slide-in-right" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: gridVisible ? `${i * 150}ms` : "0ms" }}
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted shadow-lg hover:shadow-accent/20 transition-all duration-500">
                    <img
                      src={mag.image}
                      alt={`${mag.title} magazine cover`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors duration-300 flex items-end p-6">
                      <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="font-serif text-xl font-semibold text-background">
                          {mag.title}
                        </h3>
                        <p className="text-sm text-background/70 mt-1">{mag.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-serif">{mag.title}</DialogTitle>
                  <DialogDescription className="text-base">{mag.category}</DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <img
                    src={mag.image}
                    alt={`${mag.title} magazine cover`}
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  {mag.description}
                </p>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
