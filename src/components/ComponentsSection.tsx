import { Card } from "@/components/ui/card";
import { Cpu, Camera, Radar, Eye, Gauge, Zap, Disc, Speaker, HardDrive, Battery } from "lucide-react";

const ComponentsSection = () => {
  const hardwareComponents = [
    {
      icon: Cpu,
      name: "Arduino / ESP32 Board",
      description: "Central processing unit controlling all system operations and sensor integration"
    },
    {
      icon: Camera,
      name: "ESP32-CAM Module",
      description: "Captures images and provides live video feed for under-car object detection"
    },
    {
      icon: Radar,
      name: "Ultrasonic Sensors (x2)",
      description: "Measures distances for front obstacle and under-car object detection"
    },
    {
      icon: Eye,
      name: "IR Sensors (L/R)",
      description: "Detects black/white lines for accurate path following navigation"
    },
    {
      icon: Gauge,
      name: "L298N Motor Driver",
      description: "Controls motor speed and direction for precise vehicle movement"
    },
    {
      icon: Zap,
      name: "DC Motors + Wheels",
      description: "Provides mechanical movement and steering capabilities"
    },
    {
      icon: Disc,
      name: "LCD Display (I2C)",
      description: "Shows real-time system status and sensor readings"
    },
    {
      icon: Speaker,
      name: "Buzzer",
      description: "Provides audio alerts for obstacles and system warnings"
    },
    {
      icon: HardDrive,
      name: "SD Card Module",
      description: "Stores baseline measurements and logs system events"
    },
    {
      icon: Battery,
      name: "Power Supply",
      description: "Battery pack or adapter providing stable power to all components"
    }
  ];

  return (
    <section id="components" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Hardware Components
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12" />
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hardwareComponents.map((component, index) => {
              const Icon = component.icon;
              return (
                <Card
                  key={index}
                  className="card-gradient p-6 border-border hover:glow-effect smooth-transition group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 smooth-transition">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {component.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {component.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
