import heroImage from "@/assets/hero-portrait.webp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref: imgRef, isVisible: imgVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div ref={imgRef} className={`relative transition-all duration-700 ${imgVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src={heroImage}
                alt="Lynette Botha portrait"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full border border-accent/20 rounded-sm -z-10" />
          </div>

          {/* Content */}
          <div ref={contentRef} className={`space-y-6 transition-all duration-700 delay-200 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent">
              About
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Lynette Botha
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 15 years of experience in luxury, travel, lifestyle, and property
                magazine publishing, I bring meticulous attention to detail and a passion for
                engaging storytelling to every project.
              </p>
              <p>
                From concept development to final print, I've guided more than 250 magazines
                through the complete editorial process — ensuring every page meets the highest
                standards of quality, accuracy, and reader engagement.
              </p>
              <p>
                My award-winning work spans some of the most respected titles in luxury
                publishing, and I pride myself on building lasting partnerships with brands,
                publishers, and creative teams who share a commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              {[
                { value: "15+", label: "Years" },
                { value: "250+", label: "Magazines" },
                { value: "1000+", label: "Articles" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-serif font-semibold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
