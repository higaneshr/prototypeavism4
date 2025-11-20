import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const ArchitectureSection = () => {
  const components = [
    { name: "Arduino / Microcontroller", role: "Main control unit" },
    { name: "ESP32-CAM", role: "Image capture & live video" },
    { name: "Front Ultrasonic Sensor", role: "Obstacle detection" },
    { name: "Under-Car Ultrasonic", role: "Ground clearance monitoring" },
    { name: "IR Sensors (L/R)", role: "Line path detection" },
    { name: "Motor Driver (L298N)", role: "Motor control" },
    { name: "DC Motors", role: "Vehicle movement" },
    { name: "LCD Display", role: "Status feedback" },
    { name: "Buzzer", role: "Audio alerts" },
    { name: "SD Card Module", role: "Data storage" },
  ];

  const dataFlows = [
    {
      title: "Under-Car Detection Flow",
      steps: [
        "Under-car ultrasonic measures distance",
        "ESP32/Arduino compares with stored baseline",
        "If difference detected, trigger ESP32-CAM",
        "Capture photo and send notification",
        "Prevent vehicle start until cleared"
      ]
    },
    {
      title: "Front Obstacle Flow",
      steps: [
        "Front ultrasonic continuously scans",
        "Distance reading sent to Arduino",
        "If obstacle within threshold, stop motors",
        "Activate buzzer and LCD warning",
        "Resume when path is clear"
      ]
    },
    {
      title: "Line Following Flow",
      steps: [
        "IR sensors detect line position",
        "Arduino processes sensor data",
        "Calculate motor speed adjustments",
        "Send commands to motor driver",
        "Vehicle stays on designated path"
      ]
    }
  ];

  return (
    <section id="architecture" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          System Architecture
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12" />
        
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Component Diagram */}
          <Card className="card-gradient p-8 border-border">
            <h3 className="text-2xl font-semibold mb-6 text-primary">System Components</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {components.map((component, index) => (
                <div
                  key={index}
                  className="bg-muted/50 p-4 rounded-lg border border-border/50 hover:border-primary/50 smooth-transition"
                >
                  <h4 className="font-semibold text-foreground mb-1">{component.name}</h4>
                  <p className="text-sm text-muted-foreground">{component.role}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Data Flow Diagrams */}
          <div className="grid md:grid-cols-3 gap-6">
            {dataFlows.map((flow, flowIndex) => (
              <Card key={flowIndex} className="card-gradient p-6 border-border">
                <h3 className="text-xl font-semibold mb-4 text-primary">{flow.title}</h3>
                <div className="space-y-3">
                  {flow.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                        {stepIndex + 1}
                      </div>
                      <p className="text-sm text-foreground/80 pt-0.5">{step}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Integration Overview */}
          <Card className="card-gradient p-8 border-border">
            <h3 className="text-2xl font-semibold mb-4 text-primary">System Integration</h3>
            <p className="text-foreground/90 leading-relaxed">
              All components work together seamlessly through the central Arduino controller. 
              The system continuously monitors multiple sensor inputs, processes the data in real-time, 
              and makes intelligent decisions to ensure safe operation. The ESP32-CAM provides visual 
              feedback and documentation capabilities, while the LCD and buzzer keep the operator informed 
              of system status at all times.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
