import { Card } from "@/components/ui/card";
import { User, GraduationCap, School } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Ganesh",
      role: "Hardware Design, Coding & System Integration",
      responsibilities: [
        "Circuit design and component selection",
        "Arduino and ESP32 programming",
        "Sensor calibration and testing",
        "System architecture and integration"
      ]
    },
    {
      name: "Mohit",
      role: "Wiring, Testing, Presentation & Documentation",
      responsibilities: [
        "Physical wiring and assembly",
        "System testing and debugging",
        "Project presentation preparation",
        "Technical documentation and reports"
      ]
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Team & Credits
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12" />
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Team Members */}
          <div className="grid md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-gradient p-6 border-border">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <User className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {member.role}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {member.responsibilities.map((responsibility, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <p className="text-sm text-foreground/80">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Institution Info */}
          <Card className="card-gradient p-8 border-border">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  2nd PUC – PCMC
                </h3>
                <p className="text-foreground/80 flex items-center justify-center md:justify-start gap-2">
                  <School className="w-4 h-4 text-primary" />
                  Carmel Composite PU College, Nanjangud
                </p>
              </div>
            </div>
          </Card>

          {/* Acknowledgments */}
          <Card className="card-gradient p-6 border-border">
            <h3 className="text-lg font-semibold text-primary mb-3">
              Acknowledgments
            </h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              We would like to express our gratitude to our teachers, mentors, and the 
              administration of Carmel Composite PU College for their continuous support 
              and guidance throughout this project. Special thanks to the science department 
              for providing resources and facilities for our research and development.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
