import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@/assets/avis-hero.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient">AVIS-M4</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-foreground animate-fade-in">
            Autonomous Vehicle Intelligent System
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-foreground/80 max-w-3xl mx-auto animate-fade-in">
            A student-built smart vehicle prototype that combines line following, under-car safety scanning, 
            obstacle stopping and real-time camera monitoring.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button
              size="lg"
              onClick={() => scrollToSection("overview")}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-effect"
            >
              Explore Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 smooth-transition" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("download")}
              className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg"
            >
              <Download className="mr-2" />
              Download as PDF
            </Button>
          </div>
          
          <div className="mt-12 text-sm text-foreground/60">
            Mark 4 • Fourth Improved Prototype
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
