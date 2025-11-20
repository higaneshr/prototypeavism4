import { Card } from "@/components/ui/card";
import { Activity, ScanEye, StopCircle, Navigation, Video, Sparkles, Shield, Bell } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Activity,
      title: "Real-Time Detection",
      description: "Continuous sensor monitoring with instant response to environmental changes"
    },
    {
      icon: ScanEye,
      title: "Under-Car Scan",
      description: "Baseline comparison system protects animals and objects beneath vehicle"
    },
    {
      icon: StopCircle,
      title: "Front Obstacle Stop",
      description: "Automatic emergency braking when obstacles detected in path"
    },
    {
      icon: Navigation,
      title: "Line Path Following",
      description: "Precision GPS-less navigation using infrared line detection technology"
    },
    {
      icon: Video,
      title: "Live Camera Feed",
      description: "ESP32-CAM provides real-time visual feedback and documentation"
    },
    {
      icon: Sparkles,
      title: "Mark 4 Prototype",
      description: "Fourth iteration with enhanced reliability and new safety features"
    },
    {
      icon: Shield,
      title: "Sensor-Based Safety",
      description: "Multi-layered sensor array ensures comprehensive hazard detection"
    },
    {
      icon: Bell,
      title: "Smart Alert System",
      description: "Visual LCD display and audio buzzer notifications for all events"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Key Features
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12" />
        
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="card-gradient p-6 border-border hover:glow-effect smooth-transition group text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 smooth-transition">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
