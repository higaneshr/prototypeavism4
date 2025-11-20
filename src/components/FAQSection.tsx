import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQSection = () => {
  const faqs = [
    {
      question: "Why did you use line following instead of GPS?",
      answer: "GPS is inaccurate indoors and requires large open spaces for reliable navigation. Our line following system using IR sensors provides precise path control in confined areas like labs, exhibitions, and indoor testing environments. This makes it ideal for student projects and controlled demonstrations where GPS signals are weak or unavailable."
    },
    {
      question: "How does under-car detection work?",
      answer: "When the vehicle is turned off, an ultrasonic sensor measures and stores the baseline distance to the ground in an SD card. Before starting, the system re-measures this distance. If there's a significant difference (indicating an object or animal), the ESP32-CAM captures a photo, sends a notification, and prevents the vehicle from starting until the obstruction is cleared."
    },
    {
      question: "What happens when an obstacle is detected?",
      answer: "The front ultrasonic sensor continuously monitors the path ahead. When an obstacle comes within the safe distance threshold, the system immediately stops all motors, activates the buzzer alarm, and displays a warning on the LCD screen. The vehicle remains stopped until the obstacle is removed and the path is clear, then automatically resumes operation."
    },
    {
      question: "Can this system be installed in real cars?",
      answer: "While AVIS-M4 is currently a prototype demonstration model, the underlying principles and technologies can be adapted for real vehicles. The system would need industrial-grade components, redundant safety mechanisms, and integration with existing vehicle systems. This project serves as a proof-of-concept for future automotive safety features."
    },
    {
      question: "Why is it called Mark 4?",
      answer: "Mark 4 indicates this is our fourth prototype iteration. Each version improved upon the previous one: Mark 1 had basic line following, Mark 2 added obstacle detection, Mark 3 introduced under-car scanning, and Mark 4 (current version) integrates all features with the ESP32-CAM system for enhanced safety and documentation capabilities."
    },
    {
      question: "What makes this project unique?",
      answer: "AVIS-M4 combines multiple safety systems into one integrated platform: line-based autonomous navigation, front obstacle avoidance, under-vehicle protection, and real-time camera monitoring. The under-car detection feature is particularly innovative, addressing a real-world safety concern that's often overlooked in autonomous vehicle research."
    },
    {
      question: "How accurate is the line following?",
      answer: "Our IR sensor array provides high precision line detection with minimal deviation. The left-right sensor configuration allows the vehicle to make real-time corrections, keeping it centered on the path. In controlled testing, the system maintains its course with less than 2cm deviation from the line at standard speeds."
    },
    {
      question: "What is the response time for obstacle detection?",
      answer: "The system responds to obstacles in under 200 milliseconds from detection to complete motor stop. This includes sensor reading, Arduino processing, and motor driver response time. At typical operating speeds, this provides a safe stopping distance of approximately 15-20cm."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Frequently Asked Questions
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12" />
        
        <div className="max-w-3xl mx-auto">
          <Card className="card-gradient p-8 border-border">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6 data-[state=open]:bg-muted/30"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
