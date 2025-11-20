import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const OverviewSection = () => {
  const keyPoints = [
    "Smart autonomous vehicle model with advanced safety features",
    "Line path following instead of GPS for indoor navigation accuracy",
    "Front obstacle detection with automatic stopping capability",
    "Under-car scanning to protect animals and objects before starting",
    "Real-time camera monitoring and image capture system",
    "Mark 4 represents our fourth improved prototype iteration"
  ];

  return (
    <section id="overview" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Project Overview
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12" />
          
          <Card className="card-gradient p-8 border-border glow-effect">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-primary">What is AVIS-M4?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  AVIS-M4 (Autonomous Vehicle Intelligent System - Mark 4) is an innovative student science project 
                  that demonstrates advanced robotics and autonomous vehicle technology. Our system integrates multiple 
                  sensors and intelligent algorithms to create a safe, self-navigating vehicle prototype that can 
                  detect obstacles, follow designated paths, and prevent accidents.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-primary">Why Mark 4?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  This is our fourth prototype iteration, incorporating lessons learned from previous versions. 
                  Each iteration has improved reliability, accuracy, and added new safety features. The "Mark 4" 
                  designation represents continuous improvement and refinement of our autonomous vehicle concept.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-primary">Key Capabilities</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {keyPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground/80 text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
