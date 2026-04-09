import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import ComponentsSection from "@/components/ComponentsSection";
import SoftwareSection from "@/components/SoftwareSection";
import WorkingSection from "@/components/WorkingSection";
import FeaturesSection from "@/components/FeaturesSection";
import SafetySection from "@/components/SafetySection";
import GallerySection from "@/components/GallerySection";
import DownloadSection from "@/components/DownloadSection";

import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <OverviewSection />
      <ArchitectureSection />
      <ComponentsSection />
      <SoftwareSection />
      <WorkingSection />
      <FeaturesSection />
      <SafetySection />
      <GallerySection />
      <DownloadSection />
      
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
