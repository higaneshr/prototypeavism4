import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-2">AVIS-M4</h3>
            <p className="text-muted-foreground">
              Autonomous Vehicle Intelligent System (Mark 4)
            </p>
          </div>
          
          <div className="py-6 border-y border-border/50">
            <p className="text-foreground/90 mb-2">
              © 2025 AVIS-M4 – Autonomous Vehicle Intelligent System (Mark 4)
            </p>
            <p className="text-sm text-muted-foreground">
              All rights reserved.
            </p>
          </div>
          
          
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="border-primary text-primary hover:bg-primary/10 mt-6"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
