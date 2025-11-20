import { Card } from "@/components/ui/card";
import { Code2 } from "lucide-react";

const SoftwareSection = () => {
  const algorithms = [
    {
      title: "1. Line Following Algorithm",
      description: "Enables the vehicle to navigate along a designated path",
      pseudoCode: `// Read IR sensors
leftSensor = digitalRead(LEFT_IR_PIN);
rightSensor = digitalRead(RIGHT_IR_PIN);

// Adjust motor speeds based on sensor readings
if (leftSensor == BLACK && rightSensor == WHITE) {
    // Turn right
    leftMotor.speed(FAST);
    rightMotor.speed(SLOW);
} else if (leftSensor == WHITE && rightSensor == BLACK) {
    // Turn left
    leftMotor.speed(SLOW);
    rightMotor.speed(FAST);
} else if (leftSensor == BLACK && rightSensor == BLACK) {
    // Go straight
    leftMotor.speed(NORMAL);
    rightMotor.speed(NORMAL);
} else {
    // Stop (lost line)
    stopMotors();
}`
    },
    {
      title: "2. Under-Car Detection Logic",
      description: "Protects animals and objects beneath the vehicle",
      pseudoCode: `// When vehicle is OFF - Store baseline
if (systemState == OFF) {
    baselineDistance = readUltrasonic(UNDER_CAR_SENSOR);
    saveToSDCard(baselineDistance);
}

// When starting - Check for objects
if (systemState == STARTING) {
    currentDistance = readUltrasonic(UNDER_CAR_SENSOR);
    difference = abs(currentDistance - baselineDistance);
    
    if (difference > THRESHOLD) {
        // Object detected
        capturePhoto(ESP32_CAM);
        sendNotification("Object detected under vehicle!");
        preventStart();
        activateBuzzer();
    } else {
        allowStart();
    }
}`
    },
    {
      title: "3. Front Obstacle Detection Logic",
      description: "Prevents collisions with objects ahead",
      pseudoCode: `// Continuous monitoring while moving
while (vehicleMoving) {
    frontDistance = readUltrasonic(FRONT_SENSOR);
    
    if (frontDistance < SAFE_DISTANCE) {
        // Obstacle detected
        stopMotors();
        activateBuzzer();
        displayLCD("OBSTACLE AHEAD!");
        
        // Wait for obstacle to clear
        while (frontDistance < SAFE_DISTANCE) {
            frontDistance = readUltrasonic(FRONT_SENSOR);
            delay(100);
        }
        
        // Resume movement
        deactivateBuzzer();
        displayLCD("Path Clear");
        resumeMovement();
    }
}`
    }
  ];

  return (
    <section id="software" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Software & Code Logic
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12" />
        
        <div className="max-w-5xl mx-auto space-y-8">
          {algorithms.map((algorithm, index) => (
            <Card key={index} className="card-gradient p-8 border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">
                    {algorithm.title}
                  </h3>
                  <p className="text-foreground/80">
                    {algorithm.description}
                  </p>
                </div>
              </div>
              
              <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                <pre className="text-sm text-foreground/90 overflow-x-auto whitespace-pre-wrap font-mono">
                  {algorithm.pseudoCode}
                </pre>
              </div>
            </Card>
          ))}
          
          <Card className="card-gradient p-8 border-border">
            <h3 className="text-2xl font-semibold text-primary mb-4">Implementation Notes</h3>
            <div className="space-y-3 text-foreground/90">
              <p>
                <strong className="text-primary">Language:</strong> The system is programmed in C/C++ 
                using the Arduino IDE, taking advantage of its extensive library support for sensors 
                and modules.
              </p>
              <p>
                <strong className="text-primary">Real-time Processing:</strong> All algorithms run 
                simultaneously using non-blocking code patterns to ensure responsive operation.
              </p>
              <p>
                <strong className="text-primary">Error Handling:</strong> The code includes failsafe 
                mechanisms and error checking to prevent system failures and ensure safe operation.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
