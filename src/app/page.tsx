// Import components that make up the different sections of the Home Page
import AboutSection from "@/components/home/AboutSection";
import BestSellers from "@/components/home/BestSellers";
import CustomerReviews from "@/components/home/CustomerReviews";
import HeroSection from "@/components/home/HeroSection";
import HomeImage from "@/components/home/HomeImage";
import Newsletter from "@/components/home/Newsletter";

// Home is the main landing page of the application (located at "/")
export default function Home() {
  return (
    <div>
      {/* Displays the main banner image at the top of the home page */}
      <HomeImage />
      
      {/* Displays the hero section with the main call-to-action */}
      <HeroSection />
      
      {/* Displays a grid or list of the best-selling products */}
      <BestSellers />
      
      {/* Displays testimonials and reviews from customers */}
      <CustomerReviews />
      
      {/* Displays an email subscription form for newsletters */}
      <Newsletter />
      
      {/* Displays information about the store or brand */}
      <AboutSection />
    </div>
  );
}
