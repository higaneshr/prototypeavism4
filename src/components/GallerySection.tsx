import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import prototypeCarImage from "@/assets/prototype-car.jpg";
import underCarSensorImage from "@/assets/under-car-sensor.jpg";
import sensorsCloseupImage from "@/assets/sensors-closeup.jpg";
import heroImage from "@/assets/avis-hero.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: prototypeCarImage,
      title: "AVIS-M4 Prototype Vehicle",
      description: "Complete assembled vehicle with all sensors and components"
    },
    {
      src: underCarSensorImage,
      title: "Under-Car Sensor Assembly",
      description: "Ultrasonic sensor and Arduino board mounted beneath chassis"
    },
    {
      src: sensorsCloseupImage,
      title: "Front Sensors and Line Detection",
      description: "IR sensors and ultrasonic module for navigation and obstacle detection"
    },
    {
      src: heroImage,
      title: "System Architecture Visualization",
      description: "Conceptual design showing integrated sensor systems"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Project Gallery
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6" />
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Visual documentation of the AVIS-M4 prototype and its components
        </p>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className="card-gradient border-border overflow-hidden hover:glow-effect smooth-transition cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {image.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {image.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-background border-border p-0">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background smooth-transition"
          >
            <X className="w-5 h-5" />
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
