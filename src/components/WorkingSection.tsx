import { Card } from "@/components/ui/card";
import { Power, ScanLine, Navigation, Eye, Camera, AlertTriangle, CheckCircle, Play } from "lucide-react";

const WorkingSection = () => {
  const steps = [
    {
      icon: Power,
      title: "1. Power On & Initialization",
      description: "System boots up, all sensors are initialized, and diagnostic checks are performed"
    },
    {
      icon: ScanLine,
      title: "2. Under-Car Baseline Scan",
      description: "Ultrasonic sensor measures ground clearance and stores baseline distance to SD card"
    },
    {
      icon: Navigation,
      title: "3. Path Following (Line-Based GPS)",
      description: "IR sensors detect the line and vehicle begins following the designated path"
    },
    {
      icon: Eye,
      title: "4. Continuous Front Obstacle Monitoring",
      description: "Front ultrasonic sensor constantly scans for obstacles while vehicle is in motion"
    },
    {
      icon: ScanLine,
      title: "5. Under-Car Re-scan Before Moving",
      description: "System compares current ground clearance with baseline before each movement cycle"
    },
    {
      icon: AlertTriangle,
      title: "6. Alert & Auto-Stop",
      description: "If object/animal detected, vehicle stops immediately, buzzer activates, and LCD shows warning"
    },
    {
      icon: Camera,
      title: "7. Camera Capture & Send to App",
      description: "ESP32-CAM captures photo of detected object and sends notification to monitoring app"
    },
    {
      icon: CheckCircle,
      title: "8. Driver Confirms, Then Moves Safely",
      description: "After driver verification and clearance, system allows vehicle to resume operation"
    }
  ];

  return (
    <section id="working" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Working of the System
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6" />
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Step-by-step process of how AVIS-M4 operates
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-8 md:left-1/2 w-16 h-16 bg-card rounded-full border-4 border-primary flex items-center justify-center -translate-x-1/2 z-10 glow-effect">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    {/* Content Card */}
                    <Card
                      className={`card-gradient p-6 border-border ml-20 md:ml-0 ${
                        isEven ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                      } md:w-[calc(50%-4rem)] hover:glow-effect smooth-transition`}
                    >
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="text-foreground/80 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingSection;
