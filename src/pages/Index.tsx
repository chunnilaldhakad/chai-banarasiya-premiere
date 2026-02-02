import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CuisineShowcase from "@/components/CuisineShowcase";
import BuffetExperience from "@/components/BuffetExperience";
import MenuPreview from "@/components/MenuPreview";
import AmbienceGallery from "@/components/AmbienceGallery";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <CuisineShowcase />
      <BuffetExperience />
      <MenuPreview />
      <AmbienceGallery />
      <TestimonialsSlider />
      <LocationContact />
      <Footer />
    </main>
  );
};

export default Index;
