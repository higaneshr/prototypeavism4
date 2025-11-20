import { Card } from "@/components/ui/card";
import { Shield, Car, Bus, Trees, Package, Waypoints } from "lucide-react";

const SafetySection = () => {
  const safetyBenefits = [
    "Prevents tragic accidents with small animals or pets under vehicles",
    "Reduces collision risks with sudden obstacles in the vehicle's path",
    "Provides continuous safety monitoring without human error",
    "Encourages safer driving habits through real-time feedback",
    "Documents incidents with photographic evidence for analysis",
    "Operates reliably in various lighting and weather conditions"
  ];

  const useCases = [
    {
      icon: Car,
      title: "Personal Cars",
      description: "Protect family pets and wildlife in residential driveways and parking areas"
    },
    {
      icon: Bus,
      title: "School & College Buses",
      description: "Enhanced safety for students and children in busy school zones"
    },
    {
      icon: Trees,
      title: "Wildlife Safari Jeeps",
      description: "Prevent harm to animals in natural habitats and protected areas"
    },
    {
      icon: Package,
      title: "Delivery Vehicles",
      description: "Safe navigation in residential areas with pets and children"
    },
    {
      icon: Waypoints,
      title: "Future Autonomous Taxis",
      description: "Foundation technology for fully self-driving vehicle safety systems"
    },
    {
      icon: Shield,
      title: "Industrial Vehicles",
      description: "Warehouse and factory safety for personnel and equipment"
    }
  ];

  return (
    <section id="safety" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Safety & Use Cases
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12" />
        
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Safety Benefits */}
          <Card className="card-gradient p-8 border-border">
            <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8" />
              Safety Benefits
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {safetyBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-muted/30 p-4 rounded-lg border border-border/30"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Use Cases */}
          <div>
            <h3 className="text-2xl font-semibold text-center text-primary mb-8">
              Real-World Applications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <Card
                    key={index}
                    className="card-gradient p-6 border-border hover:glow-effect smooth-transition group"
                  >
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 smooth-transition">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {useCase.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
