import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Info } from "lucide-react";
import { toast } from "sonner";

const DownloadSection = () => {
  const handleDownloadPDF = () => {
    // Hide navigation and other non-essential elements before printing
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        nav, .no-print { display: none !important; }
        body { background: white !important; }
        * { color: black !important; }
        .card-gradient, .hero-gradient { background: white !important; }
        section { page-break-after: always; }
      }
    `;
    document.head.appendChild(style);

    // Trigger browser print dialog
    window.print();

    // Clean up
    setTimeout(() => {
      document.head.removeChild(style);
    }, 1000);

    toast.success("Print dialog opened! Choose 'Save as PDF' to download.", {
      description: "Select your preferred PDF settings in the print dialog."
    });
  };

  return (
    <section id="download" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Download Project Documentation
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12" />
        
        <div className="max-w-2xl mx-auto">
          <Card className="card-gradient p-8 border-border text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            
            <h3 className="text-2xl font-semibold text-foreground mb-3">
              Complete Project Report
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Download this entire website as a PDF document for offline viewing, 
              printing, or submission. Includes all sections, technical details, 
              and system documentation.
            </p>
            
            <Button
              size="lg"
              onClick={handleDownloadPDF}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-effect"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Project PDF
            </Button>
            
            <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border/50">
              <div className="flex items-start gap-3 text-left">
                <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-foreground/80">
                  <p className="font-semibold mb-1">How to save as PDF:</p>
                  <p>
                    When the print dialog opens, select "Save as PDF" as your 
                    printer/destination, then click Save to download the complete 
                    project documentation.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
